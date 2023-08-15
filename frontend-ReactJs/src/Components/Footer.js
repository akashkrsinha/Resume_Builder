import React from 'react';
import style from '../Styles/footer.module.css'
import { FaArrowUp, FaCopyright } from 'react-icons/fa';

export default function Footer() {
    const goToTop = () => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    return (
        <div className={style.main}>
            <div className={style.copyRight}>
                <FaCopyright /> <span style={{ marginLeft: '7px', fontWeight: "600" }}>Copyright 2023, all rights reserved with Resume Creator</span>
            </div>
            <div className={style.scrollUp} onClick={goToTop} title="Go To Top">
                <FaArrowUp style={{ color: "white", fontSize: 'larger' }} />
            </div>
        </div >
    )
}
