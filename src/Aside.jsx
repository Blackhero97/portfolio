import React from "react";
import { Link } from "react-router-dom";
import Logo from "./imgs/img.jpg";
function Aside() {
  const Close = () => {
    let aside = document.querySelector(".portfolio-aside");
    aside.classList.remove("active");
  };
  return (
    <>
      <aside>
        <Link onClick={Close} to={"me"}>
          <div className="info-box">
            <img src={Logo} alt="" className="logo" />
            <span className="info-box-name">Hasanboy</span>
            <span className="info-box-prof">Web Developer</span>
          </div>
        </Link>
        <nav>
          <ul>
            <li>
              <Link onClick={Close} to={""}>
                Asosiy
              </Link>
            </li>
            <li>
              <Link onClick={Close} to={"about"}>
                Men haqimda
              </Link>
            </li>
            <li>
              <Link onClick={Close} to={"services"}>
                Hizmatlar
              </Link>
            </li>
            <li>
              <Link onClick={Close} to={"experience"}>
                Faoliyat
              </Link>
            </li>
            <li>
              <Link onClick={Close} to={"projects"}>
                Loyihalar
              </Link>
            </li>
            <li>
              <Link onClick={Close} to={"blog"}>
                Blog
              </Link>
            </li>
            <li>
              <Link onClick={Close} to={"contact"}>
                Boglanish
              </Link>
            </li>
            <div onClick={Close} className="close">
              <i class="bx bx-x"></i>
            </div>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Aside;
