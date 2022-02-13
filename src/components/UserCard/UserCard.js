import React from "react";
import "./UserCard.css";

import {Link} from "react-router-dom"
import IMG from "../../assests/avatar.png";

const UserCard = () => {
  return (
    <div className="devop">
      <div className="container">
        <div className="card float-right " style={{ width: "500px" }}>
          <div className="row">
            <div className="col-sm-5">
              <img className="d-block w-100" src={IMG} alt="profilimg" />
            </div>
            <div className="col-sm-7">
              <div className="card-block">
                {/*           <h4 class="card-title">Small card</h4> */}
                <h2>NAME </h2>
                <h2>EMAIL</h2>
                <h2> PHONE</h2>
                <h2>Skills</h2>
                <br />
                <Link to="/profileview">
                <a href="#3" className="btn btn-primary btn-sm float-right">
                  View Profile
                </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* ! 2eme carte  */}

      <div className="container">
        <div className="card float-right " style={{ width: "500px" }}>
          <div className="row">
            <div className="col-sm-5">
              <img className="d-block w-100" src={IMG} alt="profilimg" />
            </div>
            <div className="col-sm-7">
              <div className="card-block">
                {/*           <h4 class="card-title">Small card</h4> */}
                <h2>NAME </h2>
                <h2>EMAIL</h2>
                <h2> PHONE</h2>
                <h2>Skills</h2>
                <br />
                <a href="#3" className="btn btn-primary btn-sm float-right">
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* 3eme carte */}
      <div className="container">
        <div className="card float-right "  style={{ width: "500px" }}>
          <div className="row">
            <div className="col-sm-5">
              <img
                className="d-block w-100"
                src={IMG}
                alt="profilimg"
                              />
            </div>
            <div className="col-sm-7">
              <div className="card-block">
                {/*           <h4 class="card-title">Small card</h4> */}
                <h2>NAME </h2>
                <h2>EMAIL</h2>
                <h2> PHONE</h2>
                <h2>Skills</h2>
                <br />
                <a href="#3" className="btn btn-primary btn-sm float-right">
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
export default UserCard;
