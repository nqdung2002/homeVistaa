import React from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react'
import './findbar.css'
import Form from 'react-bootstrap/Form';

export const Findbar = () => {
  return (
    <div className="findbar">
        <span className='find_title'><h1>Tìm kiếm</h1></span>
        <span className='search'>
          <input type="textarea" />
          <button><MagnifyingGlass size={16} /></button>
        </span>
        <span>
          <Form.Label>Giá: </Form.Label>
          <Form.Select>
            <option value="ascend">Tăng dần</option>
            <option value="decrease">Giảm dần</option>
          </Form.Select>
        </span>
        <span>
          <Form.Label>Diện tích: </Form.Label>
          <Form.Select>
            <option value="<50">Nhỏ hơn 50m2</option>
            <option value="<100">Nhỏ hơn 100m2</option>
            <option value="<200">Nhỏ hơn 200m2</option>
            <option value=">200">Lớn hơn 200m2</option>
          </Form.Select>
        </span>
        <span>
          <Form.Label>Số phòng ngủ: </Form.Label>
          <Form.Select>
            <option value="1">1 phòng ngủ</option>
            <option value="2">2 phòng ngủ</option>
            <option value="3">3 phòng ngủ</option>
            <option value="4">Lớn hơn 4 phòng ngủ</option>
          </Form.Select>
        </span>
        <span>
          <Form.Label>Vị trí: </Form.Label>
          <Form.Select>
            <option value="1">Quận Ba Đình</option>
            <option value="2">Quận Đống Đa</option>
            <option value="3">Quận Cầu Giấy</option>
            <option value="4">Quận Long Biên</option>
            <option value="5">Quận Nam Từ Liêm</option>
          </Form.Select>
        </span>
        <button className='nut'>Clear Filter</button>
    </div>
  )
}
