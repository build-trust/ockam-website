import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { media } from '../../../../utils/emotion';
import kafkaHero from '../../../../assets/product/hero-graphic.svg';
import kafkaCar from '../../../../assets/product/kafka-car.svg';
import kafkaBox from '../../../../assets/product/kafka-box.svg';
import kafkaBoxMobile from '../../../../assets/product/kafka-box-mobile.svg';
import AnimateOnScroll from '../../../AnimateOnScroll';
import Heading from '../../../Heading';
import Subheading from '../../Subheading';
import Text from '../../../Text';
import IconListItem from '../../../IconLisItem';
import BaseImage from '../../../Image';
import { ReactComponent as MessageIcon } from '../../../../assets/message-icon.svg';
import { ReactComponent as HandsIcon } from '../../../../assets/hands-icon.svg';
import { ReactComponent as FingerPrint } from '../../../../assets/fingerprint-icon.svg';

const SpacingContainer = styled('div')`
  margin-top: 9rem;
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
  display: flex;
  flex-direction: column;
  width: 100%;
  ${media.tablet`
    width: 40%;
  `}
`;

const ImageContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 5rem;
  ${media.tablet`
    width: 60%;
    margin-bottom: 0;
    padding-left: 2rem;
  `}
`;

const ImageBox = styled('div')`
  display: flex;
  margin: 5rem 0;
  background: transparent url(${kafkaBoxMobile}) no-repeat center center;
  background-size: contain;
  min-height: 74rem;
  ${media.tablet`
    margin: 9.6rem 0;
    background: transparent url(${kafkaBox}) no-repeat center center;
    background-size: contain;
    min-height: 20rem;
  `}
  width: 100%;
  max-width: 114rem;
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

const ImageBoxContainer = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  padding: 0 2rem;
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
  max-height: 8rem;
  ${media.tablet`
    max-height: 100%;
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
  icon: PropTypes.string.isRequired,
};

const HeaderSection = () => {
  return (
    <SpacingContainer>
      <Container>
        <DescriptionContainer>
          <AnimateOnScroll>
            <Subheading>
              Ockam and Confluent deliver event streams everywhere.
            </Subheading>
            <TitleWrapper>
              <Heading linked as="h2" textAlign={{ _: 'center', lg: 'left' }}>
                Kafka Add-on for Ockam
              </Heading>
            </TitleWrapper>
            <Text>
              There is a lot to consider when your application relies on event
              streams in a distributed environment:
            </Text>
            <ListContainer>
              <ListItem icon={MessageIcon}>
                Kafka is a fantastic tool to manage real-time event streams.
                Your applications need to be able to send secure, private, and
                trusted event messages between each other.
              </ListItem>
              <ListItem icon={HandsIcon}>
                Applications today are spread between the edge and the cloud.
                Ockam's protocols guarantee autentication across distributed
                workloads that are connected across different networks.
              </ListItem>
              <ListItem icon={FingerPrint}>
                Ensure security and confidentiality when you create and manage
                cryptographic keys in your application environments with Ockam.
              </ListItem>
            </ListContainer>
          </AnimateOnScroll>
        </DescriptionContainer>
        <ImageContainer>
          <AnimateOnScroll slideIn="down">
            <Image src={kafkaCar} />
          </AnimateOnScroll>
          <AnimateOnScroll slideIn="down">
            <Image src={kafkaHero} />
          </AnimateOnScroll>
        </ImageContainer>
      </Container>
      <ImageBoxContainer>
        <ImageBox />
      </ImageBoxContainer>
    </SpacingContainer>
  );
};

HeaderSection.propTypes = {};

export default HeaderSection;
