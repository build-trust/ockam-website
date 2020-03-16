import React from 'react';
import styled from '@emotion/styled';
import PropTypes from "prop-types";

import PageSection from '../PageSection';
import { media } from '../../../utils/emotion';
import Heading from '../../Heading';
import Text from '../../Text';
import mattAvatar from '../../../assets/matthew-gregory.jpg';
import Button from '../../Button';
import Caption from '../../Caption';
import Link from '../../Link';
import CheckedListItem from "../../CheckedListItem";

const Grid = styled('div')`
  display: grid;
  grid-template-areas:
    'title'
    'quotation'
    'description';
  grid-row-gap: 3rem;
  ${media.desktop`
    grid-template-columns: 6fr 5fr;
    grid-row-gap: 0;
    grid-column-gap: 10rem;
    grid-template-areas:
      "title title"
      "description quotation"
  `};
`;

const Title = styled(Heading)`
  grid-area: title;
`;

const DescriptionBox = styled('div')`
  grid-area: description;
`;

const QuatationBox = styled('div')`
  grid-area: quotation;
  border: 2px solid ${props => props.theme.colors.accentBackground};
  border-radius: ${props => props.theme.radii.default};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 5rem 3rem 3rem 3rem;
`;

const ValuesContainer = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  ${media.desktop`
    align-items: flex-start;
    justify-content: flex-start;
  `};
`;

const ButtonsContainer = styled('div')`
  display: flex;
`;

const MattAvatar = styled('img')`
  border-radius: 50%;
  width: 6.4rem;
  position: absolute;
  top: 0;
  transform: translateY(-50%);
`;

const ValuesListItem = ({ children }) => <CheckedListItem containerStyle={{ marginBottom: 0}}>{ children }</CheckedListItem>;

ValuesListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

const ValuesSection = () => {
  return (
    <PageSection>
      <Grid>
        <Title
          as="h2"
          mb={{ _: 5, lg: 4 }}
          textAlign={{ _: 'center', lg: 'left' }}
        >
          Ockam Values
        </Title>
        <DescriptionBox>
          <ValuesContainer>
            <ValuesListItem>
              <Text mb={0} color="white">
                Simplicity
              </Text>
            </ValuesListItem>
            <ValuesListItem>
              <Text mb={0} color="white">
                High Performance Team
              </Text>
            </ValuesListItem>
            <ValuesListItem>
              <Text mb={0} color="white">
                Builders Love Their Tools
              </Text>
            </ValuesListItem>
          </ValuesContainer>
          <Text>
            Our Values are what we believe. Our Virtues are what we do. What we
            do is who we are.
          </Text>
          <Text mb={4}>
            Ockam is a distributed team and we have a remote-first culture.
          </Text>
          <ButtonsContainer>
            <Button
              as={Link}
              to="/learn/blog/values_and_virtues_on_the_Ockam_Team"
              variant="primary"
            >
              Read more
            </Button>
          </ButtonsContainer>
        </DescriptionBox>
        <QuatationBox>
          <MattAvatar src={mattAvatar} alt="matthew-gregory" />
          <Heading textAlign="center" as="h3" fontStyle="italic">
            Before We Wrote The Code, We Shipped Our Values.
          </Heading>
          <Caption fontSize={2}>Matthew Gregory, CEO</Caption>
        </QuatationBox>
      </Grid>
    </PageSection>
  );
};

export default ValuesSection;
