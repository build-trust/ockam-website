import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { media } from '../../../../utils/emotion';
import influxHero from '../../../../assets/product/hero-influx.svg';
import influxBox from '../../../../assets/product/influx-box.svg';
import influxBoxMobile from '../../../../assets/product/influx-box-mobile.svg';
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
  padding: 0 3rem;
  margin-bottom: 5rem;
  ${media.tablet`
    width: 50%;
    padding-right: 0;
    margin-bottom: 0;
  `}
`;

const ImageBox = styled('div')`
  display: flex;
  margin: 5rem 0;
  background: transparent url(${influxBoxMobile}) no-repeat center center;
  background-size: contain;
  min-height: 48rem;
  ${media.tablet`
    margin: 9.6rem 0;
    background: transparent url(${influxBox}) no-repeat center center;
    background-size: contain;
    min-height: 20rem;
  `};
  width: 100%;
  max-width: 110rem;
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

const ImageBoxContainer = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
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

const DescriptionSection = () => {
  return (
    <SpacingContainer>
      <Container>
        <DescriptionContainer>
          <AnimateOnScroll>
            <Subheading>
              Ockam and InfluxData solve unique challenges for IoT data.
            </Subheading>
            <TitleWrapper>
              <Heading linked as="h2" textAlign={{ _: 'center', lg: 'left' }}>
                InfluxDB and Telegraf <br />
                Add-ons for Ockam
              </Heading>
            </TitleWrapper>
            <Text>IoT data is unique:</Text>
            <ListContainer>
              <ListItem icon={MessageIcon}>
                IoT devices typically produce time series data. InfluxDB is
                structured and optimized to store and query time-stamped data.
              </ListItem>
              <ListItem icon={HandsIcon}>
                IoT devices create streams of data. Ockam's protocols guarantee
                authentication between each IoT device and your instance of
                InfluxDB, regardless of where-in-the-world either sits.
              </ListItem>
              <ListItem icon={FingerPrint}>
                Ensure security and confidentiality of your IoT data when you
                create and manage cryptographic keys in your IoT devices with
                Ockam.
              </ListItem>
            </ListContainer>
          </AnimateOnScroll>
        </DescriptionContainer>
        <ImageContainer>
          <AnimateOnScroll slideIn="down">
            <Image src={influxHero} />
          </AnimateOnScroll>
        </ImageContainer>
      </Container>
      <ImageBoxContainer>
        <ImageBox />
      </ImageBoxContainer>
    </SpacingContainer>
  );
};

DescriptionSection.propTypes = {};

export default DescriptionSection;
