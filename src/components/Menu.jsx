import React from "react";

function Menu() {
  const Open = () => {
    let aside = document.querySelector(".portfolio-aside");
    aside.classList.add("active");
  };
  return (
    <>
      <div onClick={Open} className="menu">
        <i class="bx bx-menu-alt-right"></i>
      </div>
    </>
  );
}

export default Menu;
