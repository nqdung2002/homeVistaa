import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.data);

        if (data.data === "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          window.location.href = "./login";
        }
      });
  }, []);
  console.log(userData.username);
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
        <Link to="/wishlist">Yêu thích</Link>
      </div>
      <div className="username">Chào mừng: {userData.username}</div>
    </div>
  );
};
