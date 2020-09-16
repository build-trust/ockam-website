import React from 'react';
import styled from '@emotion/styled';

import Text from '../../Text';
import seamlessImage from '../../../assets/homepage/seamless-image.svg';
import DefaultGridSection from '../DefaultGridSection';

const PreTextContainer = styled('div')`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-family: monospace;
  padding: 18px 90px;
  background-color: ${({ theme }) => theme.colors.codeBlock.lightBackground};
  font-size: 16px;
  line-height: 22px;
`;

const SeamlessConnectedSection = () => {
  return (
    <DefaultGridSection
      image={seamlessImage}
      direction="imageOnLeft"
      gridLgProportions={['3fr', '4fr']}
      title="The Ockam Vision is to build trust between every connected device, every cloud service, everywhere."
    >
      <Text>
        It is inevitable that data and computing power will become ever more
        distributed across the edge and the cloud.
      </Text>
      <Text>
        Building distributed systems of interconnected devices have become
        exceptionally difficult. Old tools, and the best of intentions, have
        been contorted past their breaking point. To ensure data integrity,
        security, and privacy take massive budgets and highly specialized teams
        - which means most connected systems remain negligently vulnerable.
      </Text>
      <Text>
        Millions of application developers need access to simple tools. Hundreds
        of technologies need to be integrated.
      </Text>
      <PreTextContainer>
        Our mission at Ockam is to empower developers to build connections,
        simply.
      </PreTextContainer>
    </DefaultGridSection>
  );
};

export default SeamlessConnectedSection;
