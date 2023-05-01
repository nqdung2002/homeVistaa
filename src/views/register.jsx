import React from 'react'
import './register.css'

export const Register = () => {
  return (
    <div>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" href="../css/homepage.css" type="text/css" />
        <body className='body_register'>
          <div className="main-register">
            <h1>Login</h1>
            <form action="">
              <div className="textfield">
                <input type="textarea" required/>
                <label htmlFor="">Tên đăng ký</label>
                <span></span>
              </div>
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
          </div>
        </body>
      </div>
  )
}