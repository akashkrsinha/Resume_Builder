import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './../Styles/header.module.css'
import { useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation();
    const [showRegister, setShowRegister] = useState(true);
    const [showLogin, setShowLogin] = useState(true);

    useEffect(() => {
        console.log('location.pathname', location.pathname);
        if (location.pathname == '/login') {
            setShowLogin(false);
        } else if (location.pathname == '/signup') {
            setShowRegister(false);
        } else {
            setShowRegister(true);
            setShowLogin(true);
        }
    })

    return (
        <>
            <div className={styles.logoContainer}>
                <Link to="/">
                    <div className={styles.logoDiv}>
                        <img src='./homeLogo.png' height='35px' weight='35px' />
                        <div className={styles.logoText}>
                            <span style={{ color: 'red' }}>Resume</span> <span style={{ color: 'green' }}>Creator</span>
                        </div>
                    </div>
                </Link>
            </div>

            <div className={styles.contents}>
                {/* <div className={styles.btns}>
                    <Link to='/contact'>
                        Resume Templates
                    </Link>
                </div> */}

                {/* <div className={styles.btns}>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </div> */}

                {showRegister && <div className={styles.btns}>
                    <Link to='/signup'>
                        Register
                    </Link>
                </div>}

                {showLogin && < div className={styles.btns}>
                    <Link to='/login'>
                        Login
                    </Link>
                </div>}
            </div >

            {/* <button>Create Resume</button> */}
        </>
    )
}