import React from 'react'
import '../Styles/global.css'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <div className='layoutContainer'>
        <div className='header'><Header/></div>
        <div className='content'>{children}</div>
        <div className='footer'><Footer/></div>
    </div>
  )
}