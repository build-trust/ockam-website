import React from 'react';

import DefaultGridSection from '../../DefaultGridSection';
import cloudGraphics from '../../../../assets/product/subpage-cloud-diagram.svg';
import Text from '../../../Text';
import CheckedListItem from '../../../CheckedListItem';
import AnimateOnScroll from "../../../AnimateOnScroll";

const DescriptionSection = () => {
  return (
    <AnimateOnScroll transformY animateOnce>
      <DefaultGridSection
        image={cloudGraphics}
        direction="imageOnRight"
        title="Ockam Cloud SDK is designed to run efficiently in public or private cloud deployments"
      >
        <Text>
          Ockam Cloud SDK will become available in Rust, Golang (Go), Java, Erlang and Elixir. Devices at the edge can easily connect to, authenticate with, and send encrypted data to your cloud service.
        </Text>
        <CheckedListItem>
          Amazon Web Services (AWS)
        </CheckedListItem>
        <CheckedListItem>
          Microsoft Azure
        </CheckedListItem>
        <CheckedListItem>
          Google Cloud
        </CheckedListItem>
        <CheckedListItem>
          Your data center
        </CheckedListItem>
      </DefaultGridSection>
    </AnimateOnScroll>
  );
};

DescriptionSection.propTypes = {};

export default DescriptionSection;
