import { useEffect, useState } from "react";
function ExperienceServerJobs(url) {
  const [exJobData, setExJobData] = useState();
  const [exJobLoad, setExJobLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((info) => setExJobData(info), setExJobLoad(false));
    }, 1000);
  }, [url]);
  return { exJobData, exJobLoad };
}

export default ExperienceServerJobs;
