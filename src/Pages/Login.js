import React, { useRef, useState, useEffect } from 'react'
import styles from '../Styles/login.module.css'
import setUser from '../actions/contact.action'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from '../firebaseConfig'
import { useDispatch, useSelector } from 'react-redux'


export default function Login() {

    const emailLogin = useRef()
    const passwordLogin = useRef()


    let { ContactReducer } = useSelector((state) => state)
    let { UserReducer } = useSelector((state) => state)
    // console.log(UserReducer);

    const [userDetail, setUserDetail] = useState(UserReducer)
    // const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    function handelLogin() {
        
        const auth = getAuth();
        signInWithEmailAndPassword(auth, emailLogin.current.value, passwordLogin.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                const { uid, email } = user
                console.log(uid, email);
            

                setUserDetail({
                    // ...userDetail,
                    uid: uid,
                    email: email
                })
                // console.log(userDetail);
                // loading(true)
                alert("LogIn Successfully")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("Unable to Login")
            });

    }

    useEffect(() => {
        dispatch(setUser(userDetail))
        console.log(UserReducer);
    }, [userDetail])
    return (
        <div className={styles.formcard}>
            <h2 className="form-heading center">Enter Login details</h2>
            <div className="form-section">
                <div className="input-group full">
                    <label>Email</label>
                    <div className="effect">
                        <input type="text" name="email" ref={emailLogin} />
                    </div>
                </div>
                <div className="input-group full">
                    <label>Password</label>
                    <div className="effect">
                        <input type="password" name="password" ref={passwordLogin} />
                    </div>
                </div>
                <div className="form-buttons">
                    <input type='submit' className="btn hvr-float-shadow"  onClick={handelLogin}/>
                </div>
            </div>
        </div>
    )
}