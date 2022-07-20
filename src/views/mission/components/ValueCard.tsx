import { FunctionComponent, SVGAttributes } from 'react';
import { Box, Flex, Text, Icon, useBreakpointValue, useTheme } from '@chakra-ui/react';

import { DashedLineDivider } from '@components/LineDivider';
import Card from '@components/Card';
import GreenIconWrapper from '@components/GreenIconWrapper';
import BorderDot from '@components/BorderDot';

type TimeLineItemProps = {
  icon: FunctionComponent<SVGAttributes<SVGElement>>;
  title: string;
  texts: string[];
  itemPosition: 'left' | 'right';
};

const ValueCard: FunctionComponent<TimeLineItemProps> = ({
  icon,
  title,
  texts,
  itemPosition = 'left',
}) => {
  const { gradients } = useTheme();
  const inOnMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex
      justifyContent={{ base: 'center', lg: itemPosition === 'right' ? 'flex-start' : 'flex-end' }}
      w="full"
      position="relative"
      py={{ lg: 6 }}
    >
      {/* TODO: Change line dividers and dot implementations */}

      <DashedLineDivider withDot />

      <DashedLineDivider display={{ base: 'block', lg: 'none' }} h="72px" top="16px" />
      <BorderDot
        display={{ base: 'block', lg: 'none' }}
        zIndex={1}
        left="calc(50% - 8.5px)"
        top="72px"
      />

      <Box position="relative" w={{ lg: '50%' }} px={{ lg: 10 }} pt={{ base: 26, lg: 0 }}>
        <Card
          {...(inOnMobile ? {} : { speachBubbleTriangle: itemPosition })}
          boldBorderGradient={gradients.primary}
          p={6}
        >
          <Flex align="center" mb={5}>
            <GreenIconWrapper mr={6}>
              <Icon as={icon} color="white" w={6} h={6} />
            </GreenIconWrapper>

            <Text fontWeight="bold" fontSize="2xl" color="brand.900">
              {title}
            </Text>
          </Flex>

          {texts.map((text) => (
            <Text key={text} fontSize={{ base: 'lg', lg: 'xl' }} _notLast={{ mb: 2 }}>
              {text}
            </Text>
          ))}
        </Card>
      </Box>
    </Flex>
  );
};

export default ValueCard;
