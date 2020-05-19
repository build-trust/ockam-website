import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import AnimateOnScroll from '../../AnimateOnScroll';
import Subheading from '../Subheading';
import { media } from '../../../utils/emotion';

import JobItem from './JobItem';

const Container = styled('div')`
  margin-bottom: 8rem;
`;

const Category = styled(Subheading)`
  ${media.desktop`
    padding-left: 4rem;
    padding-right: 4rem;
  `}
`;

const JobList = ({ title, jobs }) => (
  <Container>
    <AnimateOnScroll slideIn="down">
      <Category>{title}</Category>
    </AnimateOnScroll>
    {jobs.map((job, index) => (
      <AnimateOnScroll key={job.id} slideIn="down" delay={100 * index}>
        <JobItem job={job} />
      </AnimateOnScroll>
    ))}
  </Container>
);

JobList.propTypes = {
  title: PropTypes.string.isRequired,
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

JobList.defaultProps = {
  jobs: [{}],
};

export default JobList;
