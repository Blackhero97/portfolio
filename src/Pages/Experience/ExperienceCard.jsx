import React from "react";
import { Link } from "react-router-dom";

function ExperienceCard({ blogs }) {
  return (
    <>
      {blogs.map((item) => {
        return (
          <div key={item.id} className="excperience-card">
            <div className="ex-box">
              <img src={item.icon} alt="" className="excperience-img" />
              <button className="excperience-btn">{item.button}</button>
            </div>
            <h4 className="excperience-title">{item.title}</h4>
            <p className="excperience-text">{item.text}</p>
            <Link to={`/listex/${item.id}`}>
              <button className="job">{item.read}</button>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default ExperienceCard;
