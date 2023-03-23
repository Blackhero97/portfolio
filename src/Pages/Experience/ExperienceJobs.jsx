import React from "react";
import { Link } from "react-router-dom";

function ExperienceJobs({ blogs }) {
  return (
    <>
      {blogs.map((item) => {
        return (
          <div key={item.id} className="jobs-card">
            <div className="ex-box">
              <img src={item.icon} alt="" className="jobs-img" />
              <button className="jobs-btn">{item.button}</button>
            </div>
            <h4 className="jobs-title">{item.title}</h4>
            <p className="jobs-text">{item.text}</p>
            <Link to={`/listjob/${item.id}`}>
              <button className="job">{item.read}</button>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default ExperienceJobs;
