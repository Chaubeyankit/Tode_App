import React, { useState } from 'react';
import {NavLink, useNavigate } from 'react-router-dom';
import signup from '../image/signup-image.jpg'
import '../css/registration.css'
export const SignUp = (props) => {

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", confirmPassword: "" })
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password, })
    });
    const json = await response.json()

    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate("/");
      props.showAlert("Your Account is created", "success")
    }
    else {
      props.showAlert("Invalid credentials or Email already exist", "danger")

    }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='main'>
        <section className="signup">
          <div className="container">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Create an account to use a Todo App</h2>
                <form onSubmit={(e) => { handleSubmit(e) }} className="register-form" id="register-form" >
                  <div className="form-group">
                    <label id="labelupin" htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                    <input type="text" name="name" required onChange={onChange} id="name" placeholder="Your Name" autoComplete='off' />
                  </div>
                  <div className="form-group">
                    <label id="labelupin" htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                    <input type="email" name="email" required onChange={onChange} id="email" placeholder="Your Email" />
                  </div>
                  <div className="form-group">
                    <label id="labelupin" htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                    <input type="password" name="password" required minLength={5} onChange={onChange} id="pass" placeholder="Password" autoComplete='off' />
                  </div>

                  <div className="form-group form-button">
                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                  </div>

                </form>
              </div>
              <div className="signup-image">
                <figure><img src={signup} alt="sing up " /></figure>
                <NavLink id="icon_opt_login" to="/login" className="signup-image-link">I am already member</NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
