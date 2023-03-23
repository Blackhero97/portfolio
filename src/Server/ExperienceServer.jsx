import { useEffect, useState } from "react";

function ExperienceServer(url) {
  const [exData, setExData] = useState();
  const [exLoad, setExLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((info) => setExData(info), setExLoad(false));
    }, 1000);
  }, [url]);
  return { exData, exLoad };
}

export default ExperienceServer;
