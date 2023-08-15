import React, { useRef, useEffect, useState } from 'react'
import style from '../Styles/signup.module.css'
import { useNavigate } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2'

export default function Signup() {
    const navigate = useNavigate()
    const [nameReq, setnameReq] = useState(false);
    const [emailReq, setEmailReq] = useState(false);
    const [passReq, setPassReq] = useState(false);
    const userName = useRef()
    const userEmail = useRef()
    const userPassword = useRef()

    const handleSubmit = () => {
        // console.log('User Details', userName.current.value, userEmail.current.value, userPassword.current.value);

        if (userName.current.value === "") {
            setnameReq(true);
            return;
        } else if (userEmail.current.value == "") {
            setEmailReq(true);
            return;
        } else if (userPassword.current.value == "") {
            setPassReq(true);
            return;
        }

        let payload = { name: userName.current.value, email: userEmail.current.value, password: userPassword.current.value };

        axios.post('http://localhost:5000/register', payload)    //Sending Payload in body of API
            // axios.get('http://127.0.0.1:5000/register')
            .then((res) => {
                // console.log(res);
                Swal.fire('Success', 'User Registered Successfully', 'success').then(() => {
                    userName.current.value = "";
                    userEmail.current.value = "";
                    userPassword.current.value = "";
                    navigate('/login');
                });
            })
            .catch((error) => console.log(error))
    }

    const handleChange = (event) => {
        // console.log('event', event.target.name);
        if (event.target.name == 'name' && userName.current.value != "") {
            setnameReq(false);
        } else if (event.target.name == 'name' && userName.current.value == "") {
            setnameReq(true);
        } else if (event.target.name == 'email' && userEmail.current.value != "") {
            setEmailReq(false);
        } else if (event.target.name == 'email' && userEmail.current.value == "") {
            setEmailReq(true);
        } else if (event.target.name == 'password' && userPassword.current.value != "") {
            setPassReq(false);
        } else if (event.target.name == 'password' && userPassword.current.value == "") {
            setPassReq(true);
        }
    }

    return (
        <div className={style.formcard}>
            <div className={style.inputContainer}>
                <div className={style.header}>Sign Up</div>

                <input type='text' name='name' ref={userName} onChange={handleChange} placeholder='Enter Name*' className={style.input} />
                {nameReq && <div style={{ color: 'red', marginRight: 'auto' }}>Name is required</div>}

                <input type='text' name='email' ref={userEmail} onChange={handleChange} placeholder='Enter Email*' className={style.input} />
                {emailReq && <div style={{ color: 'red', marginRight: 'auto' }}>Email is required</div>}

                <input type='password' name='password' ref={userPassword} onChange={handleChange} placeholder='Enter Password*' className={style.input} />
                {passReq && <div style={{ color: 'red', marginRight: 'auto' }}>Password is required</div>}

                <button onClick={handleSubmit} className={style.submit}>Submit</button>
            </div>
        </div>
    )
}