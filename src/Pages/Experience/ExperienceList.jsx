import React from "react";
import { Link, useParams } from "react-router-dom";
import ExperienceServer from "../../Server/ExperienceServer";
function ExperienceList() {
  const { id } = useParams();
  const { exData, exLoad } = ExperienceServer(
    "https://my-json-server.typicode.com/Blackhero97/excperiencejson/excperience/" +
      id
  );
  return (
    <>
      <div className="ex-list">
        {exLoad && <p>Malumotlar yuklanmoqda....</p>}
        {exData && (
          <div className="experienceList">
            <img className="experienceList-img" src={exData.icon} alt="" />
            <h4 className="experienceList-title">{exData.title}</h4>
            <p className="experienceList-text">{exData.info}</p>
            <Link to={"/experience"}>
              <button className="ortga">Ortga</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default ExperienceList;
