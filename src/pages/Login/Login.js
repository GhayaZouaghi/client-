import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./Login.css";

import { login } from "../../JS/Actions/user";

import clav from "../../assests/clavier.jpg";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  return (
    <div className="land">
      <img src={clav} alt="login" style={{ maxWidth: "300px" }} />
      <div className="maincontainer">
        <div class="container">
          <div class="card bg-light">
            <article class="card-body mx-auto" style={{ maxWidth: "400px" }}>
              <h4 class="card-title mt-3 text-center">Log In</h4>

              <form>
                <div class="form-group input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      {" "}
                      <i class="fa fa-envelope"></i>{" "}
                    </span>
                  </div>
                  <input
                    name=""
                    class="form-control"
                    placeholder="Email address"
                    type="email"
                    value={user.email}
                    onChange={handleChangeUser}
                  />
                </div>

                <div class="form-group input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      {" "}
                      <i class="fa fa-lock"></i>{" "}
                    </span>
                  </div>
                  <input
                    class="form-control"
                    placeholder="Enter your password"
                    type="password"
                    value={user.password}
                    onChange={handleChangeUser}
                  />
                </div>

                <div class="form-group">
                  <button
                    type="button"
                    class="btn btn-primary btn-block"
                    onClick={() => dispatch(login(user))}
                  >
                    {" "}
                    LOG IN{" "}
                  </button>
                </div>

                <p class="text-center">
                  You Don't Have an account?
                  <Link to="/register">
                    {" "}
                    <a href="#3">Sign Up</a>{" "}
                  </Link>
                </p>
              </form>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
