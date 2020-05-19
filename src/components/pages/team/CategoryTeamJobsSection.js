import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import AnimateOnScroll from '../../AnimateOnScroll';
import Heading from '../../Heading';
import Button from '../../Button';
import Link from '../../Link';
import PageSection from '../PageSection';
import useLeverJobs from '../../../hooks/useLeverJobs';

import JobItem from './JobItem';

const CategoryJobsHeader = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
`;

const getSameCategoryTeamJobs = (jobs, teamCategory, currentJobId) => {
  return jobs
    .filter(job => job.categories.team === teamCategory)
    .filter(job => job.id !== currentJobId);
};

const CategoryTeamJobsSection = ({ teamCategory, currentJobId }) => {
  const jobs = useLeverJobs();
  const categoryJobs = getSameCategoryTeamJobs(
    jobs,
    teamCategory,
    currentJobId
  );
  if (categoryJobs.length === 0) return null;
  return (
    <PageSection>
      <AnimateOnScroll slideIn="down">
        <CategoryJobsHeader>
          <Heading mb={0} ml={{ _: 0, lg: 4 }} as="h2">
            See also
          </Heading>
          <Button as={Link} to="/team#open-roles" outline="primary" ml="auto">
            See all job offers
          </Button>
        </CategoryJobsHeader>
      </AnimateOnScroll>
      {categoryJobs.map((categoryJob, index) => (
        <AnimateOnScroll
          key={categoryJob.createdAt.toString() + categoryJob.id}
          slideIn="down"
          delay={100 * index}
        >
          <JobItem job={categoryJob} />
        </AnimateOnScroll>
      ))}
    </PageSection>
  );
};

CategoryTeamJobsSection.propTypes = {
  teamCategory: PropTypes.string.isRequired,
  currentJobId: PropTypes.string.isRequired,
};

export default CategoryTeamJobsSection;
