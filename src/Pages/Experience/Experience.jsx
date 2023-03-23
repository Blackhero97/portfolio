import React from "react";
// import School from "../imgs/school.png";
// import Litsey from "../imgs/litsey.png";
// import Univer from "../imgs/univer.png";
// import Programm from "../imgs/program.png";
// import Ujob from "../imgs/university.png";
// import Uztelecom from "../imgs/uztelocom.png";
// import IT from "../imgs/IT.png";
import ExperienceServer from "../../Server/ExperienceServer";
import ExperienceServerJobs from "../../Server/ExperienceServerJobs";
import ExperienceCard from "./ExperienceCard";
import ExperienceJobs from "./ExperienceJobs";
function Excperience() {
  const { exData, exLoad } = ExperienceServer(
    "https://my-json-server.typicode.com/Blackhero97/excperiencejson/excperience"
  );
  const { exJobData, exJobLoad } = ExperienceServerJobs(
    "https://my-json-server.typicode.com/Blackhero97/excperiencejson/jobs"
  );
  return (
    <>
      <div className="excperience-jobs">
        <div className="excperience">
          <h3 className="excperience-subtitle">Excperience</h3>
          <div className="excperience-box">
            {exLoad && <p>Data Fetching Please Wait....</p>}
            {exData && <ExperienceCard blogs={exData} />}
          </div>
        </div>
        <div className="jobs">
          <h3 className="jobs-subtitle">Jobs</h3>
          <div className="jobs-box">
            {exJobLoad && <p>Data Fetching Please Wait....</p>}
            {exJobData && <ExperienceJobs blogs={exJobData} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Excperience;
