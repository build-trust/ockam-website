import { FunctionComponent, SVGAttributes } from 'react';
import { Flex, Heading, Icon, Text } from '@chakra-ui/react';

import GreenIconWrapper from '@components/GreenIconWrapper';
import CTALink from '@components/CTALink';

type ContactExtensiveActionsCardProps = {
  title: string;
  icon: FunctionComponent<SVGAttributes<SVGElement>>;
  text: string;
  actionText: string;
  actionLink: string;
  isExternal?: boolean;
};

const ContactExtensiveActionsCard: FunctionComponent<ContactExtensiveActionsCardProps> = ({
  title,
  icon,
  text,
  actionText,
  actionLink,
  isExternal,
}) => (
  <Flex
    direction="column"
    maxW="lg"
    pos="relative"
    _notFirst={{
      borderLeftWidth: { base: 0, lg: '1px' },
      borderTopWidth: { base: '1px', lg: 0 },
      borderColor: 'gray.200',
      pl: { base: 0, lg: 9 },
      pt: { base: 8, lg: 0 },
    }}
    _notLast={{
      pr: { lg: 9 },
    }}
  >
    <Flex align="center" mb={5}>
      <GreenIconWrapper mr={5}>
        <Icon as={icon} w={6} h={6} color="white" />
      </GreenIconWrapper>

      <Heading as="h3" fontSize="xl">
        {title}
      </Heading>
    </Flex>

    <Text mb={7}>{text}</Text>

    <CTALink text={actionText} href={actionLink} isExternal={isExternal} />
  </Flex>
);

export default ContactExtensiveActionsCard;
