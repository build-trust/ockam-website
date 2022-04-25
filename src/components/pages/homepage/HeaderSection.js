import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { media } from '../../../utils/emotion';
import AnimateOnScroll from '../../AnimateOnScroll';
import Heading from '../../Heading';
import Subheading from '../Subheading';
import Text from '../../Text';
import IconListItem from '../../IconLisItem';
import BaseImage from '../../Image';
import homepageHeaderImage from '../../../assets/homepage/header-section-image.svg';
import { ReactComponent as MessageIcon } from '../../../assets/message-icon.svg';
import { ReactComponent as HandsIcon } from '../../../assets/hands-icon.svg';
import { ReactComponent as FingerPrint } from '../../../assets/fingerprint-icon.svg';

const SpacingContainer = styled('div')`
  margin-top: 9rem;
  margin-bottom: 9rem;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ListContainer = styled('div')`
  margin-right: 3rem;
`;

const DescriptionContainer = styled('div')`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  ${media.tablet`
    width: 50%;
    text-align: left;
  `}
`;

const ImageContainer = styled('div')`
  width: 100%;
  margin-bottom: 5rem;
  padding: 0 3rem;
  ${media.tablet`
    width: 50%;
    margin-bottom: 0;
    padding-left: 2rem;
  `}
`;

const Container = styled('div')`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  max-width: 100%;
  ${media.tablet`
    flex-direction: row;
  `}
  ${media.ultraWide`
      width: 114rem;
      max-width: 114rem;
  `};
`;

const TitleWrapper = styled('div')`
  grid-area: title;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: -1.5rem;
`;

const Image = styled(BaseImage)`
  width: 100%;
  ${media.tablet`
    max-height: 100%;
    height: 54rem;
    max-width: 100%;
    width:54rem;
  `}
`;

const ListItem = ({ children, icon, ...rest }) => (
  <IconListItem
    containerStyle={{ marginBottom: '2rem' }}
    icon={icon}
    iconStyle={{ marginTop: 1 }}
    {...rest}
  >
    {children}
  </IconListItem>
);

ListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  icon: PropTypes.func.isRequired,
};

const HeaderSection = () => {
  return (
    <SpacingContainer>
      <Container>
        <DescriptionContainer>
          <AnimateOnScroll>
            <Subheading>Ockam makes it as simple as it should be.</Subheading>
            <TitleWrapper>
              <Heading linked as="h2" textAlign={{ _: 'center', lg: 'left' }}>
                Build connected systems you can trust.
              </Heading>
            </TitleWrapper>
            <Text>
              Your customers expect security and data privacy from your
              products. Ockam’s developer tools enable you to:
            </Text>
            <ListContainer>
              <ListItem icon={MessageIcon}>
                Send end-to-end encrypted messages through your connected
                system,
              </ListItem>
              <ListItem icon={HandsIcon}>
                Establish authenticated channels between endpoints regardless of
                the transports or network hops,
              </ListItem>
              <ListItem icon={FingerPrint}>
                Create and manage cryptographic keys, unique device identifiers,
                and verifiable credentials in your connected environments.
              </ListItem>
            </ListContainer>
          </AnimateOnScroll>
        </DescriptionContainer>
        <ImageContainer>
          <AnimateOnScroll slideIn="down">
            <Image src={homepageHeaderImage} />
          </AnimateOnScroll>
        </ImageContainer>
      </Container>
    </SpacingContainer>
  );
};

HeaderSection.propTypes = {};

export default HeaderSection;
