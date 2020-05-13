import React from 'react';
import styled from '@emotion/styled';

import githubIcon from '../../../assets/homepage/github-icon.svg';
import communityIcon from '../../../assets/community-blue-icon.svg';
import sendIcon from '../../../assets/homepage/send-icon.svg';
import twitterIcon from '../../../assets/homepage/twitter-icon.svg';
import { media } from '../../../utils/emotion';
import PageSection from '../PageSection';
import Subheading from '../Subheading';
import useSiteMetadata from '../../../hooks/useSiteMetadata';
import GetStartedCard from "../../GetStartedCard";
import useModal from "../../../hooks/useModal";
import ContactModal from "../../../modals/ContactModal";
import AnimateOnScroll from "../../AnimateOnScroll";


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

const GetStartedSection = () => {
  const { ockamLibraryRepo, communityChannel, twitter } = useSiteMetadata();
  const [, showContactModal] = useModal(ContactModal);
  const onShowContactModal = () => showContactModal();

  return (
    <PageSection>
      <AnimateOnScroll>
        <Subheading textAlign="center" mb={5}>
          Get started with ockam
        </Subheading>
        <GetStartedGrid>
          <GetStartedCard to={ockamLibraryRepo} title={'{ockam}'} icon={githubIcon} />
          <GetStartedCard to={communityChannel} title="Join Community" icon={communityIcon} />
          <GetStartedCard onClick={onShowContactModal} title="Request a demo" icon={sendIcon} />
          <GetStartedCard to={twitter} title="Follow Ockam" icon={twitterIcon} />
        </GetStartedGrid>
      </AnimateOnScroll>
    </PageSection>
  );
};

export default GetStartedSection;
