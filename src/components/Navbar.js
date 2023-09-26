import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
export const Navbar = () => {
      const navigate = useNavigate();
      const handleLogout = () => {
            localStorage.removeItem('token');
            navigate("/login");
      }
      //Uswe to show active element in navbar
      let location = useLocation();
      useEffect(() => { }, [location]);
      return (
            <>
                  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                              <Link className="navbar-brand" to="/">📝 Todo APP</Link>
                              <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                              >
                                    <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                    <ul className="navbar-nav mb-2 mb-lg-0 me-auto ">
                                          <li className="nav-item">
                                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home </Link>
                                          </li>
                                    </ul>
                                    {!localStorage.getItem('token') ? <form className="d-flex">
                                          <Link className="btn btn-danger mx-1" to="/login" role="button">Login</Link>
                                          <Link className="btn btn-success mx-1" to="/signup" role="button">Signup</Link>
                                    </form> : <button onClick={handleLogout} className="btn btn-primary">Logout</button>}
                              </div>
                        </div>
                  </nav>
            </>
      );
};
