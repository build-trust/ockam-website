import React from 'react';
import styled from "@emotion/styled";

import AnimateOnScroll from "../../AnimateOnScroll";
import Heading from "../../Heading";
import Text from "../../Text";
import Button from "../../Button";
import Link from "../../Link";
import Icon from "../../Icon";
import {ReactComponent as SlackLogo} from "../../../assets/slack-logo.svg";
import PageSection from "../PageSection";
import ockamLogoMark from "../../../assets/ockam-logo-mark.svg";
import {media} from "../../../utils/emotion";
import useSiteMetadata from "../../../hooks/useSiteMetadata";

const Section = styled(PageSection)`
  position: relative;
  z-index: 1;
  
  &:before {
    transform-origin: center center;
    transform-style: preserve-3D;
    transition: all 500ms cubic-bezier(0.51, 0.92, 0.24, 1.15);
    opacity: 0.13;
    content: '';
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    background-image: url(${ockamLogoMark});
    background-repeat: no-repeat;
    background-size: 81.5rem 76.1rem;
    background-position: right -42rem center;
  }
`;

const NotSuitableContainer = styled('div')`
  text-align: center;
  position: relative;
  z-index: 2;
  ${media.desktop`
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  `};
`

const ButtonsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.phone`
    flex-direction: row;
  `};
`


const NotSuitableSection = () => {
  const { ockamLibraryRepo, slackChannel  } = useSiteMetadata();
  return (
    <Section darkBg py={5}>
      <NotSuitableContainer>
        <AnimateOnScroll slideIn="down">
          <Heading as="h2">That’s not what you’re looking for?</Heading>
          <Text mb={4}>
            Even if one of our open roles in the Ockam core team may not be a fit right now, there will always be room for you in our community. Get involved with the discussion!
          </Text>
        </AnimateOnScroll>
        <AnimateOnScroll slideIn="down" delay={250}>
          <ButtonsContainer>
            <Button variant="primary" as={Link} mb={{ _: 3, sm: 0 }} to={ockamLibraryRepo}>Start building</Button>
            <Button outline="primary" as={Link} to={slackChannel} ml={{sm: 3}}>
              <Icon verticalAlign="text-bottom" icon={SlackLogo} mr={2} size={20} />
              Join Community
            </Button>
          </ButtonsContainer>
        </AnimateOnScroll>
      </NotSuitableContainer>
    </Section>
  );
};

NotSuitableSection.propTypes = {

};

export default NotSuitableSection;
