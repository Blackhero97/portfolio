import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="pageNotFound">
        <h2>Ooo ?</h2>
        <h4>Uzur sahifa topilmadi!</h4>
        <Link to={"/"}>
          <button className="ortga">Bosh sahifaga qaytish</button>
        </Link>
      </div>
    </>
  );
}

export default NotFound;
