import React from "react";
import { Link, useParams } from "react-router-dom";
import ExperienceServerJobs from "../../Server/ExperienceServerJobs";
function JobsList() {
  const { id } = useParams();
  const { exJobData, exJobLoad } = ExperienceServerJobs(
    "https://my-json-server.typicode.com/Blackhero97/excperiencejson/jobs/" + id
  );
  return (
    <>
      {exJobLoad && <p>Data Fetching Please Wait ....</p>}
      {exJobData && (
        <div className="jobList">
          <img className="jobList-img" src={exJobData.icon} alt="" />
          <h4 className="jobList-title">{exJobData.title}</h4>
          <p className="jobList-text">{exJobData.text}</p>
          <Link to={"/experience"}>
            <button className="ortga">Ortga</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default JobsList;
// {exLoad && <p>Data Fetching Please Wait ....</p>}
