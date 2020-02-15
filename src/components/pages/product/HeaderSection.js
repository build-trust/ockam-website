import React from 'react';
import styled from '@emotion/styled';

import Text from '../../Text';
import Heading from '../../Heading';
import heroProductGraphics from '../../../assets/product/hero-product.svg';
import heroProductMobileGraphics from '../../../assets/product/hero-product-mobile.svg';
import { media } from '../../../utils/emotion';
import { ReactComponent as ChipIcon} from '../../../assets/chip-icon.svg';
import { ReactComponent as ServerIcon} from '../../../assets/server-icon.svg';
import { ReactComponent as CloudIcon} from '../../../assets/cloud-icon.svg';
import { ReactComponent as RouterIcon} from '../../../assets/router-icon.svg';
import { ReactComponent as ListIcon} from '../../../assets/list-icon.svg';
import { ReactComponent as HandsIcon} from '../../../assets/hands-icon.svg';
import { ReactComponent as SupportIcon} from '../../../assets/support-icon.svg';
import IconListItem from '../../IconLisItem';

import HeaderProductGrid from './HeaderProductGrid';

const HeroHeading = styled(Heading)`
  ${media.desktop`
    font-size: 3.9rem;
  `};
`;

const HeaderSection = () => {
  return (
    <HeaderProductGrid
      image={heroProductGraphics}
      mobileImage={heroProductMobileGraphics}
    >
      <HeroHeading
        as="h1"
        fontSize={[5, 6, 8]}
        textAlign={{
          lg: 'left',
        }}
      >
        Building Connected Systems You Can Trust Is Hard
      </HeroHeading>
      <Text
        mt={4}
        color="primary"
        textAlign={{
          lg: 'left',
        }}
      >
        Ockam’s enterprise-grade products make it easy
      </Text>
      <div>
        <Text textAlign={{ desktop: 'left'}} fontWeight='bold'>Software Development Kits</Text>
        <IconListItem icon={CloudIcon}>Cloud Servers</IconListItem>
        <IconListItem icon={ServerIcon}> Linux Boxes at the Edge</IconListItem>
        <IconListItem icon={ChipIcon}>Embedded and IoT Devices</IconListItem>

        <Text textAlign={{ desktop: 'left'}} mt={4} fontWeight='bold'>Hosted Cloud Services</Text>
        <IconListItem icon={RouterIcon}>Ockam Router</IconListItem>
        <IconListItem icon={ListIcon}> Ockam Registry</IconListItem>

        <Text textAlign={{ desktop: 'left'}} mt={4} fontWeight='bold'>Professional Services</Text>
        <IconListItem icon={HandsIcon}>Enterprise Support</IconListItem>
        <IconListItem icon={SupportIcon}>Custom Services</IconListItem>
      </div>
    </HeaderProductGrid>
  );
};

HeaderSection.propTypes = {};

export default HeaderSection;
