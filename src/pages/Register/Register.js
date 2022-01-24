import React, {useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {register} from '../../JS/Actions/user'

import "./Register.css";
import join from "../../assests/developpeur.jpeg";


const Register = () => {

  const [newUser, setNewUser]=useState({name: "", email: "", password: "", phone: ""})
  const dispatch =useDispatch()

  const handleChangeNewUser=(e)=>{
    setNewUser({...newUser, [e.target.name]: e.target.value })
  }

  return (
    <div className="reg">
      <div className="maincontainer">
        <div class="container">
          <div class="card bg-light">
            <article class="card-body mx-auto" style={{ maxWidth: "800px" }}>
              <h4 class="card-title mt-3 text-center">Create Account</h4>
              <p class="text-center">Get started with your free account</p>

              <form>
                <div class="form-group input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      {" "}
                      <i class="fa fa-user"></i>{" "}
                    </span>
                  </div>
                  <input
                    name=""
                    class="form-control"
                    placeholder="Full name"
                    type="text"
                    value={newUser.name}
                    onChange={handleChangeNewUser}
                  />
                </div>
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
                    value={newUser.email}
                    onChange={handleChangeNewUser}
                  />
                </div>
                <div class="form-group input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      {" "}
                      <i class="fa fa-phone"></i>{" "}
                    </span>
                  </div>

                  <input
                    name=""
                    class="form-control"
                    placeholder="Phone number"
                    type="text"
                    value={newUser.phone}
                    onChange={handleChangeNewUser}
                  />
                </div>
                 {/* <div class="form-group input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      {" "}
                      <i class="fa fa-building"></i>{" "}
                    </span>
                   </div> 
                    <select class="form-control"> 
                    <option selected=""> Select job type</option>
                    <option>Web Developer</option>
                    <option>Full Stack Developer</option>
                    <option>Mean Stack</option>
                    <option>Mern Stack</option>
                    <option>backend Developer</option>
                    <option>frontend Developer</option>
                    <option>data science</option>
                  </select> 
                </div>  */}
                <div class="form-group input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      {" "}
                      <i class="fa fa-lock"></i>{" "}
                    </span>
                  </div>
                  <input
                    class="form-control"
                    placeholder="Create password"
                    type="password"
                    value={newUser.password}
                    onChange={handleChangeNewUser}
                  />
                </div>

                <div class="form-group">
                  <button type="button" class="btn btn-primary btn-block" onClick={()=>dispatch(register(newUser))}>
                    {" "}
                    Create Account{" "}
                    
                    </button>
                   
                </div>
                <p class="text-center">
                  Have an account?{" "}
                  <Link to="/Login">
                    <a href="#3">Log In</a>{" "}
                  </Link>
                </p>
              </form>
            </article>
          </div>
        </div>
      </div>
      <img src={join} alt="register" style={{ maxWidth: "800px" }} />
      {/* color background */}
 {
    document.body.style.backgroundColor = "#81B29A"
}
    </div>
  );
};

export default Register;
