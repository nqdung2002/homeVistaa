import React from 'react'
import './items.css'
import { Link } from 'react-router-dom'
import { Heart } from '@phosphor-icons/react'
import { Item_page } from '../views/item_page'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpg'
import img6 from '../assets/images/img6.jpg'
import img7 from '../assets/images/img7.jpg'
import img8 from '../assets/images/img8.jpg'
import img9 from '../assets/images/img9.jpg'
import img10 from '../assets/images/img10.jpg'
import img11 from '../assets/images/img11.jpg'
import img12 from '../assets/images/img12.jpg'



export const Items = () => {
  return (
    <div className="row-grid">
       <Link className="cover-image" to="./item_page">
            <img src={img1} alt="" />
            <span className='dark-overlay'></span>
            <button id='heart'><Heart /></button>
            <div className="info-container">
                <h3 className='proj-name'>Căn nhà 1</h3>
                <div className="proj-address">Quận Ba Đình</div>
                <div className="proj-price">2.000.000.000 VNĐ</div>
            </div>
       </Link>
       <Link className="cover-image" >
            <img src={img2} alt="" />
            <span className='dark-overlay'></span>
            <button id='heart'><Heart /></button>
            <div className="info-container">
                <h3 className='proj-name'>Căn nhà 1</h3>
                <div className="proj-address">Quận Ba Đình</div>
                <div className="proj-price">2.000.000.000 VNĐ</div>
            </div>
       </Link>
       <Link className="cover-image" >
            <img src={img3} alt="" />
            <span className='dark-overlay'></span>
            <button id='heart'><Heart /></button>
            <div className="info-container">
                <h3 className='proj-name'>Căn nhà 1</h3>
                <div className="proj-address">Quận Ba Đình</div>
                <div className="proj-price">2.000.000.000 VNĐ</div>
            </div>
       </Link>
       <Link className="cover-image" >
            <img src={img4} alt="" />
            <span className='dark-overlay'></span>
            <button id='heart'><Heart /></button>
            <div className="info-container">
                <h3 className='proj-name'>Căn nhà 1</h3>
                <div className="proj-address">Quận Ba Đình</div>
                <div className="proj-price">2.000.000.000 VNĐ</div>
            </div>
       </Link>
       <Link className="cover-image" >
            <img src={img5} alt="" />
            <span className='dark-overlay'></span>
            <button id='heart'><Heart /></button>
            <div className="info-container">
                <h3 className='proj-name'>Căn nhà 1</h3>
                <div className="proj-address">Quận Ba Đình</div>
                <div className="proj-price">2.000.000.000 VNĐ</div>
            </div>
       </Link>
       <Link className="cover-image" >
            <img src={img6} alt="" />
            <span className='dark-overlay'></span>
            <button id='heart'><Heart /></button>
            <div className="info-container">
                <h3 className='proj-name'>Căn nhà 1</h3>
                <div className="proj-address">Quận Ba Đình</div>
                <div className="proj-price">2.000.000.000 VNĐ</div>
            </div>
       </Link>
       <Link className="cover-image" >
            <img src={img7} alt="" />
            <span className='dark-overlay'></span>
            <button id='heart'><Heart /></button>
            <div className="info-container">
                <h3 className='proj-name'>Căn nhà 1</h3>
                <div className="proj-address">Quận Ba Đình</div>
                <div className="proj-price">2.000.000.000 VNĐ</div>
            </div>
       </Link>
       <Link className="cover-image" >
            <img src={img8} alt="" />
            <span className='dark-overlay'></span>
            <button id='heart'><Heart /></button>
            <div className="info-container">
                <h3 className='proj-name'>Căn nhà 1</h3>
                <div className="proj-address">Quận Ba Đình</div>
                <div className="proj-price">2.000.000.000 VNĐ</div>
            </div>
       </Link>
       <Link className="cover-image" >
            <img src={img9} alt="" />
            <span className='dark-overlay'></span>
            <button id='heart'><Heart /></button>
            <div className="info-container">
                <h3 className='proj-name'>Căn nhà 1</h3>
                <div className="proj-address">Quận Ba Đình</div>
                <div className="proj-price">2.000.000.000 VNĐ</div>
            </div>
       </Link>
       <Link className="cover-image" >
            <img src={img10} alt="" />
            <span className='dark-overlay'></span>
            <button id='heart'><Heart /></button>
            <div className="info-container">
                <h3 className='proj-name'>Căn nhà 1</h3>
                <div className="proj-address">Quận Ba Đình</div>
                <div className="proj-price">2.000.000.000 VNĐ</div>
            </div>
       </Link>
       <Link className="cover-image" >
            <img src={img11} alt="" />
            <span className='dark-overlay'></span>
            <button id='heart'><Heart /></button>
            <div className="info-container">
                <h3 className='proj-name'>Căn nhà 1</h3>
                <div className="proj-address">Quận Ba Đình</div>
                <div className="proj-price">2.000.000.000 VNĐ</div>
            </div>
       </Link>
       <Link className="cover-image" >
            <img src={img12} alt="" />
            <span className='dark-overlay'></span>
            <button id='heart'><Heart /></button>
            <div className="info-container">
                <h3 className='proj-name'>Căn nhà 1</h3>
                <div className="proj-address">Quận Ba Đình</div>
                <div className="proj-price">2.000.000.000 VNĐ</div>
            </div>
       </Link>
       
    </div>
  )
}

