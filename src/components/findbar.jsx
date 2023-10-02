import React from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import "./findbar.css";
import { Select, Options } from "./Select/Select";

export const Findbar = () => {
  return (
    <div className="findbar">
      <span className="find_title">
        <h1>Tìm kiếm</h1>
      </span>
      <span className="search">
        <input type="textarea" placeholder="Search" />
        <button>
          <MagnifyingGlass size={25} />
        </button>
      </span>
      <span className="filter">
        <Select label="Giá: ">
          <Options value="Chọn"></Options>
          <Options value="Tăng dần"></Options>
          <Options value="Giảm dần"></Options>
        </Select>
      </span>
      <span className="filter">
        <Select label="Diện tích: ">
          <Options value="Chọn"></Options>
          <Options value="Nhỏ hơn 50m2"></Options>
          <Options value="Nhỏ hơn 100m2"></Options>
          <Options value="Nhỏ hơn 200m2"></Options>
          <Options value="Lớn hơn 200m2"></Options>
        </Select>
      </span>
      <span className="filter">
        <Select label="Số phòng ngủ: ">
          <Options value="Chọn"></Options>
          <Options value="1"></Options>
          <Options value="2"></Options>
          <Options value="3"></Options>
          <Options value="4"></Options>
        </Select>
      </span>
      <span className="filter">
        <Select label="Vị trí: ">
          <Options value="Chọn"></Options>
          <Options value="Hà Nội"></Options>
          <Options value="TP.Hồ Chí Minh"></Options>
          <Options value="Thanh Hóa"></Options>
          <Options value="Đà Nẵng"></Options>
        </Select>
      </span>
      <button className="clear-btn">Clear Filter</button>
    </div>
  );
};
