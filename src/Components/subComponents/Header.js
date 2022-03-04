import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../Styles/header.module.css'

export default function Header() {
    return (
        <>
            <div className={styles.logo}>
                <Link to="/">
                    <img src='./homeLogo.png'/>
                </Link>
            </div>
            <div className={styles.contents}>
                <div>
                    Resume Templates
                </div>

                <div className={styles.signupbtn}>
                    <Link to='/contact' style={{ textDecoration: "none" }}>
                        Contact
                    </Link>
                </div>
                <div className={styles.signupbtn}>
                    <Link to='/signup' style={{ textDecoration: "none" }}>
                        Register
                    </Link>
                </div>
                <div className={styles.loginbtn}>
                    <Link to='/login' style={{ textDecoration: "none" }}>
                        Login
                    </Link>
                </div>
            </div>
        </>
    )
}