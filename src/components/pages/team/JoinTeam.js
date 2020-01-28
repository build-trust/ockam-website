import React from 'react';
import PropTypes from 'prop-types';

import PageSection from "../PageSection";
import Collapse from "../../Collapse/Collapse";
import Text from "../../Text";
import Button from "../../Button";
import Link from "../../Link";
import Heading from "../../Heading";

const JoinTeam = ({ jobs, updatedJobs }) => {
  const items = updatedJobs.length > 0 ? updatedJobs : jobs;
  return (
    <PageSection>
      <Heading as='h2' textAlign='center' mb={5}>Join The Team</Heading>
      {items.map(job => (
        <Collapse key={job.id} title={job.text}>
          <Text mb={4}>{job.descriptionPlain}</Text>
          <Button ml='auto' variant='primary' as={Link} to={job.hostedUrl}>Apply here</Button>
        </Collapse>
      ))}
    </PageSection>
  );
};
const jobPropTypes = {
  text: PropTypes.string.isRequired,
  descriptionPlain: PropTypes.isRequired,
};

JoinTeam.propTypes = {
  jobs: PropTypes.arrayOf(jobPropTypes).isRequired,
  updatedJobs: PropTypes.arrayOf(jobPropTypes),
};

JoinTeam.defaultProps = {
  updatedJobs: [],
};


export default JoinTeam;
