const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userSchema = require('./Models/userTableModel')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
const crypto = require('crypto');
var key = "password";
var algo = "aes256"
const jwt = require('jsonwebtoken')
jwtkey = "jwt"
var cors = require('cors');

mongoose.connect('mongodb+srv://Akash:8ccCPMIggjwKfBxR@cluster0.jxnt8.mongodb.net/resume_builder?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("MongoDB Not connected", err));


app.use(cors());  // Needed to resolve Cors error

app.get('/users', (req, res) => {
    var data = userSchema.find()
        .then((data) => {
            res.json(data);
            // or
            // res.status(200).json(data);
        })
        .catch((err) => {
            res.json(err);
        })
})

// To get a single field
app.get('/userSingle', (req, res) => {
    var data = userSchema.find().select('name').then((data) => {
        // res.json(data)
        // or
        res.status(200).json(data);
    })
})

// Post API to add a new data
app.post('/userSubmit', (req, res) => {
    const data = new userSchema({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
    })
    data.save().then((result) => {
        res.status(201).json(result)
    })
})


//User Signup/ register with encyypted password, then geting token(user for those API with require authentication)
app.post('/register', jsonParser, (req, res) => {
    console.log(req.body);
    var cipher = crypto.createCipher(algo, key);
    var encrypted = cipher.update(req.body.password, 'utf8', 'hex')
        + cipher.final('hex')

    let data = new userSchema({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        // address: req.body.address,
        password: encrypted,
    })

    data.save()
        .then((result) => {
            jwt.sign({ result }, jwtkey, { expiresIn: '300s' }, (err, token) => {
                res.status(201).json({ ...result._doc, token });
            })
            // res.status(201).json(result)
        })
        .catch((err) => console.log('err occured:', err));
})


//For Login, check encrypted password, and verify token
app.post('/login', jsonParser, (req, res) => {
    console.log(req.body)
    userSchema.findOne({ email: req.body.email })
        .then((data) => {
            console.log(data)
            // res.end
            var decipher = crypto.createDecipher(algo, key);
            var decrypted = decipher.update(data.password, 'hex', 'utf8') + decipher.final('utf8');
            console.log("decrypted password", decrypted)

            if (decrypted == req.body.password) {
                jwt.sign({ data }, jwtkey, { expiresIn: '300s' }, (err, token) => {
                    res.status(200).json({
                        token: token,
                        message: "Login Successful",
                        data: data
                    });
                })
            } else {
                console.log('Password incorrect');
                res.status(403).json({
                    message: "Password Incorrect! Please try again.",
                    error: "Login not successful",
                })

            }
        })
        .catch((error) => {
            res.status(401).json({
                message: "User not found",
                error: "Login not successful",
            })
        })
})

app.listen(5000);