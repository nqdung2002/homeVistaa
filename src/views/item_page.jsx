import React from 'react'
import './item_page.css'
import { Navbar } from '../components/navbar'
import img from '../assets/images/img1.jpg'

export const Item_page = () => {
  return (
    <div className="item_page_container">
      <Navbar />
      <div className="item_content">
        <img src={img} alt="" />
        <h1>Giới thiệu về Căn nhà 1</h1>
        <p>Căn nhà 1 với diện tích 250m2 là dự án mới nhất mà Khang Điền đang triển khai. Vào tháng 9/2021 vừa qua, Khang Điền và nhà thầu An Phong đã tiến hành làm lễ khởi công dự án này trước sự góp mặt quan trọng của nhiều lãnh đạo TP Thủ Đức</p>
        <ul>
          <li>
            <b>Trạng thái</b>
            <p>Đang mở bán</p>
          </li>
          <li>
            <b>Diện tích</b>
            <p>250m2</p>
          </li>
          <li>
            <b>Vị trí</b>
            <p>Quận Cầu Giấy</p>
          </li>
          <li>
            <b>Loại hình</b>
            <p>Chung cư</p>
          </li>
          <li>
            <b>Phòng ngủ</b>
            <p>3</p>
          </li>
          <li>
            <b>Giá</b>
            <p>2.000.000.000 VNĐ</p>
          </li>
        </ul>
      </div>

      <div className="sidebar">
        <h2>Căn nhà 1</h2>
        <hr />
        <ul>
          <li>
            <b>Trạng thái</b>
            <p>Đang mở bán</p>
          </li>
          <li>
            <b>Diện tích</b>
            <p>250m2</p>
          </li>
          <li>
            <b>Vị trí</b>
            <p>Quận Cầu Giấy</p>
          </li>
          <li>
            <b>Loại hình</b>
            <p>Chung cư</p>
          </li>
          <li>
            <b>Phòng ngủ</b>
            <p>3</p>
          </li>
          <li>
            <b>Giá</b>
            <p>2.000.000.000 VNĐ</p>
          </li>
        </ul>
        <hr />
        <a href="" className='button1'>Xem nhà ngay</a>
        <div className='button2'>
          <a href="">Liên hệ</a>
          <a href="">Yêu thích</a>
        </div>
      </div>
    </div>
  )
}
