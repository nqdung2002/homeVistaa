import React from 'react'
import './login.css'

export const Login = () => {
  return (
    <div>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" href="../css/homepage.css" type="text/css" />
        <title>Trang chủ</title>
        <header>
          <a href className="logo"><h1>HomeVista</h1></a>
          <nav className="navbar">
            <a href>Chức năng 1</a>
            <a href>Chức năng 2</a>
            <a href>Chức năng 3</a>
            <a href>Chức năng 4</a>
            <a href>Chức năng 5</a>
          </nav>
          <div className="icon">
            <a href className="fas fa-heart" />
          </div>
        </header>
      </div>
  )
}