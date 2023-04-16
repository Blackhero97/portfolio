import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div className="home-box">
        <section className="home">
          <div className="home-links">
            <div
              data-aos="fade-down"
              data-aos-duration="1300"
              data-aos-delay="1000"
              className="links-box "
            >
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
            <h2
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="50"
              className="home-subtitle"
            >
              Mening saytimga <i>"Welcome"</i>{" "}
            </h2>
            <p
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="350"
              className="home-text"
            >
              {/* I work as a front-end developer in the city of Chust. I love to
              work on anything code, from designing simple HTML pages to solving
              complex problems. I love to illustrate as well.I am currently
              working mostly with the react library */}
              Men Nurmuhammadov Hasanboy Chust shahrida Front-end{" "}
              <span>mentor</span> sifatida ishlab kelmoqdaman.
              {/* Men dasturlashni
              yaxshi ko'raman. Oddiy web sahifalardan tortib murakkab web
              sahifalargacha tayyorlashni o`z shogirtlarimga o`rgatib
              kelmoqdaman. Hozirda men asosan `React Js` kutubxonasi bilan
              ishlab kelmoqdaman. */}
            </p>
            <div
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="650"
              className="home-btns"
            >
              <Link to={"me"}>
                <button className="home-btn-me">Gallery</button>
              </Link>
              <Link to={"works"}>
                <button className="home-btn-works">Loyihalar</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
