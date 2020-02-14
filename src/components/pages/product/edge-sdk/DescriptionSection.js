import React from 'react';

import DefaultGridSection from '../../DefaultGridSection';
import edgeGraphics from '../../../../assets/product/subpage-edge-diagram.svg';
import {ReactComponent as DoorIcon} from '../../../../assets/door-icon.svg';
import {ReactComponent as LinuxIcon} from '../../../../assets/linux-icon.svg';
import {ReactComponent as PhoneIcon} from '../../../../assets/phone-icon.svg';
import {ReactComponent as DesktopIcon} from '../../../../assets/desktop-icon.svg';
import {ReactComponent as CarIcon} from '../../../../assets/car-icon.svg';
import {ReactComponent as UplinkIcon} from '../../../../assets/uplink-icon.svg';
import Heading from '../../../Heading';
import Text from '../../../Text';
import IconListItem from "../../../IconLisItem";

const DescriptionSection = () => {
  return (
    <DefaultGridSection
      image={edgeGraphics}
      direction="imageOnRight"
      id="content"
    >
      <Heading as="h2">
        Ockam Edge SDK is tuned for machines with significant resources.
      </Heading>
      <Text>
        Ockam Edge SDK will become available in Rust, Go, Swift and Objective C. Cloud Apps can easily connect, authenticate and trust data exchange with your edge systems.
      </Text>
      <IconListItem icon={DoorIcon}>Gateways</IconListItem>
      <IconListItem icon={LinuxIcon}>Linux boxes at the Edge</IconListItem>
      <IconListItem icon={PhoneIcon}>Phones</IconListItem>
      <IconListItem icon={DesktopIcon}>Computers</IconListItem>
      <IconListItem icon={CarIcon}>Cars</IconListItem>
      <IconListItem icon={UplinkIcon}>Satellites</IconListItem>
    </DefaultGridSection>
  );
};

DescriptionSection.propTypes = {};

export default DescriptionSection;
