import React from 'react';

import DefaultGridSection from '../../DefaultGridSection';
import edgeGraphics from '../../../../assets/product/subpage-edge-diagram.svg';
import { ReactComponent as DoorIcon } from '../../../../assets/door-icon.svg';
import { ReactComponent as LinuxIcon } from '../../../../assets/linux-icon.svg';
import { ReactComponent as PhoneIcon } from '../../../../assets/phone-icon.svg';
import { ReactComponent as DesktopIcon } from '../../../../assets/desktop-icon.svg';
import { ReactComponent as CarIcon } from '../../../../assets/car-icon.svg';
import { ReactComponent as UplinkIcon } from '../../../../assets/uplink-icon.svg';
import Text from '../../../Text';
import IconListItem from '../../../IconLisItem';
import AnimateOnScroll from '../../../AnimateOnScroll';

const DescriptionSection = () => {
  return (
    <AnimateOnScroll slideIn="down" animateOnce>
      <DefaultGridSection
        image={edgeGraphics}
        direction="imageOnRight"
        title="Ockam Edge SDK is tuned for machines with powerful compute, network, and storage capabilities outside of datacenters."
      >
        <Text>
          Ockam Edge SDK will become available in Rust, Golang (Go), Erlang,
          Elixir, Swift and Objective C. Cloud applications can easily connect,
          authenticate, and trust data exchange with distributed networks at the
          edge.
        </Text>
        <IconListItem icon={DoorIcon}>Gateways</IconListItem>
        <IconListItem icon={LinuxIcon}>Linux boxes at the Edge</IconListItem>
        <IconListItem icon={PhoneIcon}>Phones</IconListItem>
        <IconListItem icon={DesktopIcon}>Computers</IconListItem>
        <IconListItem icon={CarIcon}>Cars</IconListItem>
        <IconListItem icon={UplinkIcon}>Satellites</IconListItem>
      </DefaultGridSection>
    </AnimateOnScroll>
  );
};

DescriptionSection.propTypes = {};

export default DescriptionSection;
