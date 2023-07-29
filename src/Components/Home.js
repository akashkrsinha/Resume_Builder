import React from 'react'
import style from '../Styles/home.module.css'
import { Link } from 'react-router-dom'
import resumeImg from '../images/homeimage.jpg'
// import Lazyload from 'react-lazyload';
import { FaHandPointRight } from "react-icons/fa";
// import { GrCheckmark } from "react-icons/gr";

export default function Home() {

  const arr = [
    "Resume reaches the recruiter’s table much before than you do",
    "Resume tells about you",
    "To convince that you are the one",
    "To sell your skills",
    "To grab an interview",
    "Quick but lasting first impression",
    "Summarize your career aspiration"
  ]

  return (
    <div className={style.home}>
      <div className={style.top}>
        <div className={style.topLeft}>
          <div className={style.mainTitle}>
            <div>An excellent resume has the power</div>
            <div>to open new opportunities.</div>
            <div className={style.btnContainer}>
              <Link to='/contact' style={{ textDecoration: "none" }}>
                <button className={style.btn}>START CREATING RESUME</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={style.topRight}>
          {/* <Lazyload throttle={200} height={300}> */}
          <img height="85%" width="50%" src={resumeImg} alt='Sample Resume Image'></img>
          {/* </Lazyload> */}
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.bottomLeft}>
          Why resume is so important!
        </div>
        <div className={style.bottomRight}>
          {
            arr.map((item) => {
              return (
                <div className={style.arrContainer}>
                  <FaHandPointRight style={{ color: "green" }} />
                  <span className={style.arrItems}>{item}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}


