import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { darken, lighten, rgba } from 'polished';

import arrowTopLeftIcon from '../../../assets/homepage/arrow-top-left-icon.svg';
import githubIcon from '../../../assets/homepage/github-icon.svg';
import slackIcon from '../../../assets/homepage/slack-icon.svg';
import sendIcon from '../../../assets/homepage/send-icon.svg';
import { media } from '../../../utils/emotion';
import PageSection from '../PageSection';
import Card from '../../Card/Card';
import CardBody from '../../Card/CardBody';
import Heading from '../../Heading';
import Link from '../../Link';
import Subheading from '../Subheading';

const StyledCard = styled(Card)`
  position: relative;
  transition: all 300ms cubic-bezier(0.51, 0.92, 0.24, 1.15);
  &:before {
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    opacity: 0.6;
    z-index: 2;
    background: url(${arrowTopLeftIcon}) no-repeat;
    transition: all 300ms cubic-bezier(0.51, 0.92, 0.24, 1.15);
  }
  &:hover {
    background-color: ${props =>
      lighten(0.08, props.theme.colors.accentBackground)};
    //transform: scale(1.08);
    box-shadow: 0px 0px 29px 3px
      ${props => rgba(darken(0.2, props.theme.colors.background), 0.2)};
    z-index: 2;
    &:before {
      transform: rotate(45deg) translateX(-50%);
      top: 50%;
      opacity: 1;
    }
  }
`;

const StyledCardBody = styled(CardBody)`
  padding: 3rem 2.5rem;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: padding 300ms cubic-bezier(0.51, 0.92, 0.24, 1.15);
  &:hover {
    padding: 3rem 2rem 3rem 0rem;
  }
`;

const GesStartedGrid = styled.div`
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

const HeadingOption = styled(Heading)`
  margin-left: 1.6rem;
`;

const GetStartedCard = ({ children, to, onClick }) => (
  <StyledCard as={to ? Link : 'div'} to={to} onClick={onClick}>
    <StyledCardBody>{children}</StyledCardBody>
  </StyledCard>
);

GetStartedCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

GetStartedCard.defaultProps = {
  to: '',
  onClick() {},
};

const GetStartedSection = () => {
  const openContactModal = () => {};

  return (
    <PageSection>
      <Subheading textAlign="center" mb={5}>
        Get started with ockam
      </Subheading>
      <GesStartedGrid>
        <GetStartedCard to="https://github.com/ockam-network/ockam">
          <img src={githubIcon} alt="github icon" />
          <HeadingOption as="h5" mb={0}>
            Github
          </HeadingOption>
        </GetStartedCard>
        <GetStartedCard to="https://join.slack.com/t/ockam-community/shared_invite/enQtNDk5Nzk2NDA2NDcxLWQ0MjcyZWZjOWVlNGE5M2M3YjBkMjFkODZmODIwZWJmOTY3MThjNmU0ODc0ZDk4MjBjOGZmZDIzY2FhYTY4YTg">
          <img src={slackIcon} alt="github icon" />
          <HeadingOption as="h5" mb={0}>
            Join Community
          </HeadingOption>
        </GetStartedCard>
        <GetStartedCard onClick={openContactModal}>
          <img src={sendIcon} alt="github icon" />
          <HeadingOption as="h5" mb={0}>
            Request a demo
          </HeadingOption>
        </GetStartedCard>
        <GetStartedCard to="https://twitter.com/Ockam_io">
          <img src={sendIcon} alt="github icon" />
          <HeadingOption as="h5" mb={0}>
            Follow Ockam
          </HeadingOption>
        </GetStartedCard>
      </GesStartedGrid>
    </PageSection>
  );
};

GetStartedSection.propTypes = {};

export default GetStartedSection;
