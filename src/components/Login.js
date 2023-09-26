import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import signinpic from '../image/signin-image.jpg';
import '../css/registration.css'
export const Login = (props) => {
      const [credentials, setCredentials] = useState({ email: "", password: "" })
      const navigate = useNavigate();
      const handleSubmit = async (e) => {
            e.preventDefault();
            const response = await fetch("http://localhost:5000/api/auth/login", {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ email: credentials.email, password: credentials.password })
            });
            const json = await response.json()

            if (json.success) {
                  // Save the auth token and redirect
                  localStorage.setItem('token', json.authtoken);
                  props.showAlert("Loged in successfully", "success");
                  navigate("/");

            }
            else {
                  props.showAlert("Invalid credentials", "danger");
            }
      }
      const onChange = (e) => {
            setCredentials({ ...credentials, [e.target.name]: e.target.value })
      }

      return (
            <>
                  <div className='main'>
                        <section className="sign-in">
                              <div className="container">
                                    <div className="signin-content">
                                          <div className="signin-image">
                                                <figure><img src={signinpic} alt="sing in" /></figure>
                                                <NavLink id="icon_opt_login" to="/signup" className="signup-image-link">Create an account</NavLink>
                                          </div>

                                          <div className="signin-form">
                                                <h2 className="form-title">Login to continue to Todo App</h2>

                                                <form onSubmit={handleSubmit} className="register-form" id="login-form">
                                                      <div className="form-group">
                                                            <label id="labelupin" htmlFor="email"><i className="zmdi zmdi-account material-icons-name"></i></label>

                                                            <input type="email" name="email" id="your_name" placeholder="Username" value={credentials.email} onChange={onChange} />
                                                      </div>

                                                      <div className="form-group">
                                                            <label id="labelupin" htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>

                                                            <input type="password" name="password" id="your_pass" placeholder="Password" value={credentials.password} onChange={onChange} />
                                                      </div>
                                                      <div className="form-group form-button">
                                                            <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
                                                      </div>
                                                </form>

                                          </div>
                                    </div>
                              </div>
                        </section>
                  </div>
            </>
      )
}
