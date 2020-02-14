import React from 'react';

import DefaultGridSection from '../../DefaultGridSection';
import cloudGraphics from '../../../../assets/product/subpage-cloud-diagram.svg';
import Heading from '../../../Heading';
import Text from '../../../Text';
import CheckedListItem from '../../../CheckedListItem';

const DescriptionSection = () => {
  return (
    <DefaultGridSection
      image={cloudGraphics}
      direction="imageOnRight"
      id="content"
    >
      <Heading as="h2">
        Ockam Cloud SDK is designed to run efficiently in public or private cloud deployments
      </Heading>
      <Text>
        Ockam Cloud SDK will become available in Rust, Go, Erlang and Elixir. Devices at the edge can easily connect to, authenticate with and send encrypted data to your cloud service.
      </Text>
      <CheckedListItem>
        AWS
      </CheckedListItem>
      <CheckedListItem>
        Azure
      </CheckedListItem>
      <CheckedListItem>
        Google Cloud
      </CheckedListItem>
      <CheckedListItem>
        Your data center
      </CheckedListItem>
    </DefaultGridSection>
  );
};

DescriptionSection.propTypes = {};

export default DescriptionSection;
