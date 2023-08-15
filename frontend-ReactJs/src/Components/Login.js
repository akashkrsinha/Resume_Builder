import React, { useRef, useState, useEffect } from 'react'
import styles from '../Styles/login.module.css'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

export default function Login() {

    const emailLogin = useRef();
    const passwordLogin = useRef();
    const [emailReq, setEmailReq] = useState(false);
    const [passReq, setPassReq] = useState(false);
    const navigate = useNavigate()

    const handelLogin = () => {
        if (emailLogin.current.value === "") {
            setEmailReq(true);
            return;
        } else if (passwordLogin.current.value == "") {
            setPassReq(true);
            return;
        }

        let payload = { email: emailLogin.current.value, password: passwordLogin.current.value };

        axios.post('http://localhost:5000/login', payload)
            .then((res) => {
                sessionStorage.setItem('token', res?.token);
                sessionStorage.setItem('user', res?.data?.name);
                Swal.fire("Success", "Logged-In Successfully", 'success')
                    .then(() => {
                        emailLogin.current.value = "";
                        passwordLogin.current.value = "";

                        navigate('/contact');
                    });

            })
            .catch((error) => {
                console.log(error);
                Swal.fire('Error', `${error.response.data.message}`, 'error');
            })

    }

    const handleChange = (event) => {
        // console.log('event', event.target.name);
        if (event.target.name == 'email' && emailLogin.current.value != "") {
            setEmailReq(false);
        } else if (event.target.name == 'email' && emailLogin.current.value == "") {
            setEmailReq(true);
        } else if (event.target.name == 'password' && passwordLogin.current.value != "") {
            setPassReq(false);
        } else if (event.target.name == 'password' && passwordLogin.current.value == "") {
            setPassReq(true);
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.formcard}>
                <div className={styles.headerCon}>
                    <h2>Enter Login details</h2>
                </div>
                <div className={styles.inputCon}>
                    <div>
                        <div>Email</div>
                        <input type="text" onChange={handleChange} name="email" placeholder='Please Enter Email' ref={emailLogin} />
                        {emailReq && <div style={{ color: 'red' }}>Email is required</div>}
                    </div>

                    <div>
                        <div style={{ marginTop: '25px' }}>Password</div>
                        <input type="password" onChange={handleChange} name="password" placeholder='Please Enter Password' ref={passwordLogin} />
                        {passReq && <div style={{ color: 'red' }}>Password is required</div>}
                    </div>
                    <div className={styles.buttonCon}>
                        <button className={styles.submit} onClick={handelLogin}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}