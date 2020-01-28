import {useEffect, useState} from "react";

import { getOckamJobs } from "../api/lever";

const useLeverJobsUpdates = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchAndSave() {
      const result = await getOckamJobs();
      setJobs(result);
    }
    fetchAndSave()
  }, []);

  return jobs;
};

export default useLeverJobsUpdates
