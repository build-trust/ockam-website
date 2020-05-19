import React from 'react';
import PropTypes from 'prop-types';

import SEO from '../../SEO';
import useSiteMetadata from '../../../hooks/useSiteMetadata';

import NotSuitableSection from './NotSuitableSection';
import CategoryTeamJobsSection from './CategoryTeamJobsSection';
import JobOfferSection from './JobOfferSection';

const JobPage = ({ job }) => {
  const { title: defaultSeoTitle } = useSiteMetadata();
  const seoTitle = `${job.text} | ${defaultSeoTitle}`;
  const seoDescription = `${job.descriptionPlain.substr(0, 150)}...`;
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <JobOfferSection job={job} />
      <NotSuitableSection />
      <CategoryTeamJobsSection
        teamCategory={job.categories.team}
        currentJobId={job.id}
      />
    </>
  );
};

JobPage.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    additional: PropTypes.string,
    additionalPlain: PropTypes.string,
    description: PropTypes.string,
    descriptionPlain: PropTypes.string,
    applyUrl: PropTypes.string,
    categories: PropTypes.shape({
      team: PropTypes.string,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
    lists: PropTypes.arrayOf({
      text: PropTypes.string,
      content: PropTypes.string,
      applyUrl: PropTypes.string,
    }),
  }),
};

JobPage.defaultProps = {
  job: {
    fields: {},
    lists: {},
  },
};

export default JobPage;
