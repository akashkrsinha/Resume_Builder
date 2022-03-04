import React, { useRef, useEffect, useState } from 'react'
import style from '../Styles/signup.module.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import setUser from '../actions/contact.action'
import { useNavigate } from 'react-router';

import {
    collection,
    addDoc,
    query,
    onSnapshot,
    doc,
    setDoc,
    // deleteField,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function Signup() {

    const dispatch = useDispatch()

    const navigation = useNavigate()

    let { userReducer } = useSelector((state) => state)
    // const [userDetail, setUserDetail] = useState(userReducer)
    const [getArr, setGetArr] = useState([]);
    const name = useRef()
    const emailRegister = useRef()
    const passwordRegister = useRef()

    // useEffect(() => {
    //     const qry = query(collection(db, "user_info"));
    //     const unsubscribe = onSnapshot(qry, (querySnapshot) => {
    //       const newArr = [];
    //       querySnapshot.forEach((doc) => {
    //         newArr.push(doc);
    //       });
    //       console.log(newArr);
    //       setGetArr(newArr);
    //     });
    //   }, []);


    //  async function handelAdd(user){
    //      try {
    //         //  alert("inside alert")
    //          console.log("Inside add Function");
    //         //  console.log(name.current.value);
    //         //  console.log(emailRegister.current.value);
    //         //  console.log(passwordRegister.current.value);



    //         //  console.log("Document written with ID: ", docRef.id);
    //        } catch (error) {
    //          console.log(error);
    //        }
    //   }


    async function handelRegister() {

        const auth = getAuth();
        try {
            console.log("First");
            let user = await createUserWithEmailAndPassword(auth, emailRegister.current.value, passwordRegister.current.value)
            console.log("You are Registered Now")
            console.log("2");
            // Signed in 
            user = user.user;
            console.log(3);

            dispatch(
                setUser(
                    {
                        email: user.email,
                        uid: user.uid,
                    }))

            await setDoc(doc(db, "user_info", user.uid), {
                name: name.current.value,
                email: emailRegister.current.value,
                password: passwordRegister.current.value,
            });

            console.log(userReducer);
            console.log(user.email, user.uid);
            // console.log(userReducer);
            // handelAdd(user)
            navigation("/contact")
        }
        catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            // alert(errorCode, errorMessage, "Unable to Register")
            // ..
            alert("Unable to Register")
        }


    }
    //     useEffect(() => {

    //     console.log(userReducer);

    // }, [userDetail])
    return (
        <div class={style.formcard}>
            <h2 class="form-heading center">Enter your details</h2>


            <div class="form-section">
                <div class="input-group full">
                    <label>Name</label>
                    <div class="effect">
                        <input type="text" name="name" ref={name} />
                    </div>
                </div>

                <div class="input-group full">
                    <label>Email</label>
                    <div class="effect">
                        <input type="text" name="email" ref={emailRegister} />
                    </div>
                </div>

                <div class="input-group full">
                    <label>Password</label>
                    <div class="effect">
                        <input type="password" name="password" ref={passwordRegister} />
                    </div>
                </div>
                <div class="form-buttons">
                    <button class="btn hvr-float-shadow" type="button" onClick={handelRegister}>Register</button>
                </div>
            </div>
        </div>
    )
}