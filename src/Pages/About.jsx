import React from "react";

function About() {
  return (
    <>
      <section className="about">
        <div className="about-info">
          <h3 className="about-info-title">Men haqimda</h3>
          <p className="about-info-text">
            I work as a front-end developer in the city of Chust. I love to work
            on anything code, from designing simple HTML pages to solving
            complex problems. I am currently working mostly with the react
            library
          </p>
          <div className="about-info-box">
            <div className="block-one">
              <button className="block-btn">Ko'nikmlar</button>
              <ul>
                <li>
                  <article>
                    <label htmlFor="">
                      Html <i>94%</i>
                    </label>
                    <progress id="file" value="92" max="100">
                      {" "}
                      92%{" "}
                    </progress>
                  </article>
                </li>
                <li>
                  <article>
                    <label htmlFor="">
                      Css <i>90%</i>
                    </label>
                    <progress id="file" value="92" max="100">
                      {" "}
                      92%{" "}
                    </progress>
                  </article>
                </li>
                <li>
                  <article>
                    <label htmlFor="">
                      Bootstrap <i>95%</i>
                    </label>
                    <progress id="file" value="92" max="100">
                      {" "}
                      92%{" "}
                    </progress>
                  </article>
                </li>
                <li>
                  <article>
                    <label htmlFor="">
                      Figma <i>90%</i>
                    </label>
                    <progress id="file" value="92" max="100">
                      {" "}
                      92%{" "}
                    </progress>
                  </article>
                </li>
                <li>
                  <article>
                    <label htmlFor="">
                      JavaScript <i>88%</i>
                    </label>
                    <progress id="file" value="92" max="100">
                      {" "}
                      92%{" "}
                    </progress>
                  </article>
                </li>
                <li>
                  <article>
                    <label htmlFor="">
                      React <i>92%</i>
                    </label>
                    <progress id="file" value="92" max="100">
                      {" "}
                      92%{" "}
                    </progress>
                  </article>
                </li>
              </ul>
            </div>
            <div className="block-two">
              <button className="block-btn">Qiziqishlar</button>
              <ul>
                <li>
                  <article>
                    <span className="number">1-o'rinda</span>
                    <p className="hobbi-text">
                      <b>Sayohat</b>-Insonga sayohat shaxsiy fikrlashiga va
                      yangi g'oyalar kelishiga yordam beradi!
                    </p>
                  </article>
                </li>
                <li>
                  <article>
                    <span className="number">2-o'rinda</span>
                    <p className="hobbi-text">
                      <b>CyberSport</b>-CyberSport orqali jamoaviy ishlashni,
                      mantiq va aniqlikni oshirish mumkin!
                    </p>
                  </article>
                </li>
                <li>
                  <article>
                    <span className="number">3-o'rinda</span>
                    <p className="hobbi-text">
                      <b>Filmlar</b>-Bazan filmlar ko'rish orqali hayotiy
                      saboqlar va tajribalar olish mumkin!
                    </p>
                  </article>
                </li>
                <li>
                  <article>
                    <span className="number">4-o'rinda</span>
                    <p className="hobbi-text">
                      <b>Futbol</b>-ham jamoaviy ishlash prinsiplarini o'rganish
                      mumkin . Sevimli jamoam Barselona
                    </p>
                  </article>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-skills"></div>
      </section>
    </>
  );
}

export default About;
