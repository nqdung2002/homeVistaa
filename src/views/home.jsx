import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/navbar'
import './home.css'
import { Plus } from '@phosphor-icons/react'
import img from '../assets/images/joel-filipe-RFDP7_80v5A-unsplash (1) 1.png'


export const Home = () => {
  return (
    <body className='body_home'> 
      <Navbar />
      <div className="slogan">
        <h1>Tìm một căn nhà trong mơ</h1>
        <h1>trong khi vẫn nằm dài trên giường</h1>
        <h1 style={{color: "#0F6DA2"}}>Tại sao không?</h1>
        <p>Khám phá ngôi nhà của bạn một cách trực quan và đầy đủ nhất! Hơn <b style={{color: "#0F6DA2"}}>01</b> cấu trúc và dự án nhà ở được thực hiện. Việc của bạn chỉ là nằm và xem!</p>
        <div className="more_info">
          <Link to="/login/">Tìm hiểu thêm</Link>
        </div>
      </div>

      <div className="home_foot">
          <div className="block">
            <div className="num">0<Plus size={24} color='blue' /></div>
            <div id="detail">Khách hàng</div>
          </div>
          <div className="block">
            <div className="num">0<Plus size={24} color='blue' /></div>
            <div id="detail">Căn hộ</div>
          </div>
          <div className="block">
            <div className="num">0<Plus size={24} color='blue'/></div>
            <div id="detail">Giải thưởng</div>
          </div>

          <div className="foot_right">
            <div className="block1">HomeVista</div>
            <div className="block2">25 năm vận hành</div>
            <div className="block3">Là một dự án được vận hành liên tục trong 25 năm, chúng tôi tin có thể đem lại cho bạn một trải nghiệm thăm nhà tuyệt vời nhất quả đất.</div>
          </div>

          <img src={img} alt="" />
        </div>
      

    </body>
  )
}

