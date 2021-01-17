import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import githubIcon from '../../assets/homepage/github-icon.svg';
import communityIcon from '../../assets/community-blue-icon.svg';
import sendIcon from '../../assets/homepage/send-icon.svg';
import twitterIcon from '../../assets/homepage/twitter-icon.svg';
import { media } from '../../utils/emotion';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import GetStartedCard from '../GetStartedCard';
import AnimateOnScroll from '../AnimateOnScroll';
import GAEvents from '../../utils/GAEvents';

import Subheading from './Subheading';
import PageSection from './PageSection';

const GetStartedGrid = styled.div`
  display: grid;
  grid-column-gap: 0.2rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 0.2rem;
  ${media.desktop`
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 0.2rem;
    grid-template-rows: 13.6rem 13.6rem;
  `}
  ${media.ultraWide`
    grid-row-gap: 0;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 13.6rem;
  `}
`;

const GetStartedSection = ({ demoPathname }) => {
  const { ockamLibraryRepo, communityChannel, twitter } = useSiteMetadata();

  return (
    <PageSection>
      <AnimateOnScroll>
        <Subheading textAlign="center" mb={5}>
          Get started with ockam
        </Subheading>
        <GetStartedGrid>
          <GetStartedCard
            onClick={GAEvents.outboundGithubLink}
            to={ockamLibraryRepo}
            title={'{ockam}'}
            icon={githubIcon}
          />
          <GetStartedCard
            onClick={GAEvents.outboundCommunityLink}
            to={communityChannel}
            title="Join Community"
            icon={communityIcon}
          />
          <GetStartedCard
            onClick={GAEvents.navigateToHowToGuides}
            to={demoPathname}
            title="Run a demo"
            icon={sendIcon}
          />
          <GetStartedCard
            onClick={GAEvents.outboundTwitterLink}
            to={twitter}
            title="Follow Ockam"
            icon={twitterIcon}
          />
        </GetStartedGrid>
      </AnimateOnScroll>
    </PageSection>
  );
};

GetStartedSection.propTypes = {
  demoPathname: PropTypes.string,
};

GetStartedSection.defaultProps = {
  demoPathname: '/learn/how-to-guides',
};

export default GetStartedSection;
