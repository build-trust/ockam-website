import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Heading from '../../Heading';
import Text from '../../Text';
import Button from '../../Button';
import Link from '../../Link';
import List from '../../List';
import checkIcon from '../../../assets/check-circle-icon.svg';

const StyledList = styled(List)`
  list-style-type: none;
  padding-left: 0;
  li {
    position: relative;
    font-size: ${props => props.theme.fontSizes.body};
    padding-left: 4rem;
    margin-bottom: ${props => props.theme.space.medium};

    :before {
      content: '';
      width: 2.1rem;
      height: 2.1rem;
      position: absolute;
      background-image: url(${checkIcon});
      background-size: cover;
      background-position: center;
      left: 0;
      top: 0.5rem;
    }
  }
`;

const ListContainer = styled('div')`
  margin-bottom: 5rem;
`;

const JobOfferContent = ({ job }) => {
  return (
    <>
      <Heading as="h1">{job.text}</Heading>
      <Text mb={4} dangerouslySetInnerHTML={{ __html: job.descriptionPlain }} />
      {job.lists.map(item => (
        <ListContainer key={item.text}>
          <Heading mb={4} as="h2">
            {item.text}
          </Heading>
          <StyledList dangerouslySetInnerHTML={{ __html: item.content }} />
        </ListContainer>
      ))}

      <Text mb={4}>{job.additionalPlain}</Text>
      <Button ml="auto" variant="primary" as={Link} to={job.applyUrl}>
        Apply to join The Ockam Team
      </Button>
    </>
  );
};

JobOfferContent.propTypes = {
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

JobOfferContent.defaultProps = {
  job: {},
};

export default JobOfferContent;
