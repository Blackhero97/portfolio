import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Excperience from "./Experience/Experience";
import Services from "./Services";

function Home() {
  return (
    <>
      <div className="home-box">
        <section className="home">
          <div className="home-links">
            <div className="links-box">
              <ul>
                <li>
                  {" "}
                  <a href="tel:+998883715271" className="phone-number">
                    +998883715271
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hasanboyleo97@gmail.com"
                    className="email-address"
                  >
                    hasanboyleo97@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="home-text-box">
            <h2 className="home-subtitle">Hello I’m Hasanboy</h2>
            <p className="home-text">
              I work as a front-end developer in the city of Chust. I love to
              work on anything code, from designing simple HTML pages to solving
              complex problems. I love to illustrate as well.I am currently
              working mostly with the react library
            </p>
            <div className="home-btns">
              <Link to={"me"}>
                <button className="home-btn-me">Hire Me</button>
              </Link>
              <Link to={"works"}>
                <button className="home-btn-works">View Works</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
