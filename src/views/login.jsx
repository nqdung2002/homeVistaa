import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" href="../css/homepage.css" type="text/css" />
        <body className='body_login'>
          <div className="main-login">
            <h1>Login</h1>
            <form action="">
              <div className="textfield">
                <input type="textarea" required/>
                <label htmlFor="">Email</label>
                <span></span>
              </div>
              <div className="textfield">
                <input type="password" required/>
                <label htmlFor="">Mật khẩu</label>
                <span></span>
              </div>
              <input type="submit" />
            </form>
            <div id="forgot">Quên mật khẩu? Thiết lập lại <Link to={"/register/"}>tại đây</Link>.</div>
          </div>
        </body>
      </div>
  )
}