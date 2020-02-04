import React from 'react';
import PropTypes from 'prop-types';

import PageSection from '../PageSection';
import Collapse from '../../Collapse/Collapse';
import Text from '../../Text';
import Button from '../../Button';
import Link from '../../Link';
import Heading from '../../Heading';
import List from '../../List';

const JoinTeam = ({ jobs, updatedJobs }) => {
  const items = updatedJobs.length > 0 ? updatedJobs : jobs;
  return (
    <PageSection>
      <Heading as="h2" textAlign="center" mb={5}>
        Join The Team
      </Heading>
      {items.map(job => (
        <Collapse key={job.createdAt.toString() + job.id} title={job.text}>
          <Text dangerouslySetInnerHTML={{ __html: job.description }} mb={4} />
          {job.lists.map(item => (
            <div key={item.text}>
              <Heading as="h6">{item.text}</Heading>
              <List dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          ))}
          <Button ml="auto" variant="primary" as={Link} to={job.applyUrl}>
            Apply here
          </Button>
        </Collapse>
      ))}
    </PageSection>
  );
};
const jobPropTypes = {
  text: PropTypes.string.isRequired,
  descriptionPlain: PropTypes.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

JoinTeam.propTypes = {
  jobs: PropTypes.arrayOf(jobPropTypes).isRequired,
  updatedJobs: PropTypes.arrayOf(jobPropTypes),
};

JoinTeam.defaultProps = {
  updatedJobs: [],
};

export default JoinTeam;
