import React from 'react'
import { Link } from 'react-router-dom'
import styles from './../Styles/header.module.css'

export default function Header() {
    return (
        <>
            <div className={styles.logoContainer}>
                <Link to="/">
                    <img src='./homeLogo.png' height='35px' weight='35px' />
                </Link>
                <div className={styles.logoText}>
                    <span style={{ color: 'red' }}>Resume</span> <span style={{ color: 'green' }}>Creator</span>
                </div>
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
                
                <div className={styles.btns}>
                    <Link to='/signup'>
                        Register
                    </Link>
                </div>
                <div className={styles.btns}>
                    <Link to='/login'>
                        Login
                    </Link>
                </div>
            </div>

            {/* <button>Create Resume</button> */}
        </>
    )
}