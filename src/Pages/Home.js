import React from 'react'
import style from '../Styles/home.module.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.left}>
        <div className={style.center}>
          {/* <div className={style.text1}>The Best Online</div>
                        <div className={style.text2}>RESUME MAKER</div>

                        <div className={style.p1}>Professional out-of-the-box resumes, instantly generated by the most advanced resume builder technology available.</div>
                        <div className={style.p2}>Effortless crafting. Real-time preview & pre-written resume examples.
                          Dozens of HR-approved resume templates.</div>
                        <div className={style.p3}>Land your dream job with the perfect resume employers are looking for!</div> */}
          <div className={style.leftbtn}>
            <Link to='/contact' style={{ textDecoration: "none" }}>
              <button className={style.makebtn}>MAKE YOUR RESUME NOW</button>
            </Link>
          </div>
        </div>
      </div>



      <div className={style.right}>
        <div className={style.rightImg}>
          {/* <img src="./homeimage.jpg" id="style.homecvimg" /> */}
        </div>
      </div>
    </div>
  )
}



// import React, { Component } from 'react';
// import Carousel from 'react-elastic-carousel';
// import img1 from '../sliderimages/s1.jpg'
// import img2 from '../sliderimages/s2.jpg'
// import img3 from '../sliderimages/s3.jpg'
// import img4 from '../sliderimages/s4.jpg'
// import img5 from '../sliderimages/s5.jpg'
// import img6 from '../sliderimages/s6.jpg'
// import img7 from '../sliderimages/s7.jpg'
// import img8 from '../sliderimages/s8.jpg'
// import style from '../Styles/home.module.css'

// class Home extends Component {
//   state = {
//     items: [
//       {id: 1, title: <img src={img1} className={style.homeImg}/>},
//       {id: 2, title: <img src={img2} className={style.homeImg}/>},
//       {id: 3, title: <img src={img3} className={style.homeImg}/>},
//       {id: 4, title: <img src={img4} className={style.homeImg}/>},
//       {id: 5, title: <img src={img5} className={style.homeImg}/>},
//       {id: 3, title: <img src={img6} className={style.homeImg}/>},
//       {id: 4, title: <img src={img7} className={style.homeImg}/>},
//       {id: 5, title: <img src={img8} className={style.homeImg}/>}
//     ]
//   }

//   render () {
//     const { items } = this.state;
//     return (
//       <Carousel>
//         {items.map(item => <div key={item.id}>{item.title}</div>)}
//       </Carousel>
//     )
//   }
// }

// export default Home;