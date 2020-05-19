import React from 'react';
import PropTypes from 'prop-types';
import ArrowForward from 'emotion-icons/ion-md/ArrowForward';
import styled from '@emotion/styled';

import Heading from '../../Heading';
import Icon from '../../Icon';
import Link from '../../Link';
import { media } from '../../../utils/emotion';

const Container = styled(Link)`
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.accentBackground};
  ${media.desktop`
    padding-left: 4rem;
    padding-right: 4rem;
  `}
`;

const JobItem = ({ job }) => {
  return (
    <Container to={`/team/${job.fields.slug}/${job.id}`}>
      <Heading as="h5" mb={0}>
        {job.text}
      </Heading>
      <Icon icon={ArrowForward} />
    </Container>
  );
};

JobItem.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
};

JobItem.defaultProps = {
  job: {
    fields: {},
  },
};

export default JobItem;
