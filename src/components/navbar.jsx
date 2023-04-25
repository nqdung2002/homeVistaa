import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <div id="Home">Home</div>
            <div id="Vista">Vista</div>
        </div>
        <div className="list_nav">
            <Link to="/home">Trang chủ</Link>
            <Link to="/">Hướng dẫn</Link>
            <Link to="/about/">Về chúng tôi</Link>
            <Link to="/carts/">Liên hệ</Link>
        </div>
        <div className="login"><Link to="/">Đăng nhập</Link></div>
    </div>
  )
}
