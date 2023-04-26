import React from 'react'
import './login.css'

export const Login = () => {
  return (
    <div>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" href="../css/homepage.css" type="text/css" />
        <body className='body_login'>
          <div className="main">
            <h1>Login</h1>
            <form action="">
              <div className="textfield">
                <input type="textarea" required/>
                <label htmlFor="">Tên đăng nhập</label>
                <span></span>
              </div>
              <div className="textfield">
                <input type="password" required/>
                <label htmlFor="">Mật khẩu</label>
                <span></span>
              </div>
              <input type="submit" />
            </form>
            <div id="forgot">Quên mật khẩu? Thiết lập lại <a href="">tại đây</a>.</div>
          </div>
        </body>
      </div>
  )
}