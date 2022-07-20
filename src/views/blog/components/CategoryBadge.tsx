import { FunctionComponent, ReactNode } from 'react';
import { Badge, BadgeProps, useTheme } from '@chakra-ui/react';

type CategoryBadgeProps = {
  children: ReactNode;
  isOnTop?: boolean;
} & BadgeProps;

const badgeStyle = {
  w: 'fit-content',
  px: 1,
  py: 1,
  color: 'white',
};

const CategoryBadge: FunctionComponent<CategoryBadgeProps> = ({ children, isOnTop, ...props }) => {
  const { gradients } = useTheme();

  if (isOnTop) {
    return (
      <Badge
        pos="absolute"
        top="1px"
        zIndex={1}
        borderBottomRightRadius="base"
        bgImage={gradients.secondary}
        {...badgeStyle}
        {...props}
      >
        {children || 'No category'}
      </Badge>
    );
  }
  return (
    <Badge borderRadius="base" bgImage={gradients.secondary} {...badgeStyle} {...props}>
      {children || 'No category'}
    </Badge>
  );
};

export default CategoryBadge;
