import React from "react";
import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./userDetails";
        }
      });
  }

  return (
    <div>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="stylesheet" href="../css/homepage.css" type="text/css" />
      <div className="body_login">
        <div className="main-login">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="textfield">
              <input
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="">Email</label>
              <span></span>
            </div>
            <div className="textfield">
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="">Mật khẩu</label>
              <span></span>
            </div>
            <input type="submit" />
          </form>
          <div id="forgot">
            Chưa có tài khoản? Đăng ký ngay{" "}
            <Link to={"/register"}>tại đây</Link>.
          </div>
        </div>
      </div>
    </div>
  );
};
