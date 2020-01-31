import React from 'react';

import HeaderSection from "../components/pages/team/HeaderSection";
import ValuesSection from "../components/pages/team/ValuesSection";
import JoinTeam from "../components/pages/team/JoinTeam";
import useLeverJobs from "../hooks/useLeverJobs";
import useLeverJobsUpdates from "../hooks/useLeverJobsUpdates";
import SEO from "../components/SEO";

const mapAEdgesToCollection = (edges) => {
  return edges.map(item => item.node)
};

const Team = () => {
  const { allLever } = useLeverJobs();
  const jobs = mapAEdgesToCollection(allLever.edges);
  const updatedJobs = useLeverJobsUpdates();

  return (
    <>
      <SEO title="Ockam | Team" />
      <HeaderSection />
      <ValuesSection />
      <JoinTeam jobs={jobs} updatedJobs={updatedJobs} />
    </>
  );
};



export default Team;
