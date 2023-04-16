import React from "react";
import MyLogo from "../imgs/portfolio-hasanboy.png";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <div className="logo-box">
      <Link to={"/"}>
        <img src={MyLogo} alt="" className="logo-img" />
      </Link>
    </div>
  );
}

export default Logo;
