import styled from '@emotion/styled';
import {
  border,
  color,
  layout,
  typography,
  space,
  variant,
} from 'styled-system';

const Badge = styled('span')(
  space,
  color,
  typography,
  border,
  layout,
  variant({
    variants: {
      default: {
        fontSize: 'caption',
        color: 'badge.defaultText',
        backgroundColor: 'badge.defaultBackground',
        borderColor: 'badge.defaultBorder',
      },
    },
  })
);

Badge.defaultProps = {
  variant: 'default',
  display: 'inline-block',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: 'badge',
  fontWeight: '500',
  px: '0.5rem',
  py: '0.2rem',
};

export default Badge;
