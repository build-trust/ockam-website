import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import PageSection from '../PageSection';
import Heading from '../../Heading';
import AnimateOnScroll from '../../AnimateOnScroll';

import JobList from "./JobList";

const AnchorPointer = styled('div')`
  padding-bottom: 8rem;
`;

const separateJobsByCategories = jobs => {
  return jobs.reduce((acc, job) => {
    const categoryIndex = acc.findIndex(
      item => item.name === job.categories.team
    );
    if (categoryIndex > -1) {
      acc[categoryIndex].jobs.push(job);
    } else {
      acc.push({
        name: job.categories.team,
        jobs: [job],
      });
    }
    return acc;
  }, []);
};

const JoinTeam = ({ jobs }) => {
  const categorizedJobs = separateJobsByCategories(jobs);

  return (
    <PageSection>
      <AnchorPointer id="open-roles" />
      <AnimateOnScroll>
        <Heading linked as="h2" textAlign="center" mb={5}>
          Join The Team
        </Heading>
      </AnimateOnScroll>
      {categorizedJobs.map((category) => <JobList title={category.name} jobs={category.jobs} />)}
    </PageSection>
  );
};
const jobPropTypes = {
  text: PropTypes.string.isRequired,
  descriptionPlain: PropTypes.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    team: PropTypes.string,
  })),
  list: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

JoinTeam.propTypes = {
  jobs: PropTypes.arrayOf(jobPropTypes).isRequired,
};

export default JoinTeam;
