import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  console.log();
  return (
    <div className="navbar">
      <div className="logo">
        <div id="Home">Home</div>
        <div id="Vista">Vista</div>
      </div>
      <div className="list_nav">
        <Link to="/home">Trang chủ</Link>
        <Link to="/find">Tìm kiếm</Link>
        <Link to="/about">Hướng dẫn</Link>
        <Link to="/carts">Liên hệ</Link>
      </div>
      <div className="login"><Link to="/login">Đăng nhập</Link></div>
    </div>
  );
};
