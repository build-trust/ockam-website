import styled from '@emotion/styled';
import { space, color, typography, variant  } from 'styled-system';

const Button = styled('div')(
  props => ({
    padding: "1.4rem 2.5rem",
    borderRadius: props.theme.radii.button,
    fontSize: props.theme.fontSizes.body,
    fontWeight: props.theme.fontWeights.button,
    lineHeight: props.theme.lineHeights.body,
    display: 'inline-block',

  }),
  space,
  color,
  typography,
  variant({
    variants: {
      white: {
        color: 'dark',
        bg: 'white',
      },
      primary: {
        color: 'white',
        bg: 'primary',
      },
    },
  }),
  variant({
    prop: 'size',
    variants: {
      default: {
        fontSize: 3,
        padding: "1.6rem 2.4rem",
        fontWeight: 'button',

      },
      small: {
        fontSize: 2,
        padding: "1.2rem 2.4rem",
        fontWeight: 'button',

      },
      xSmall: {
        fontSize: 1,
        padding: "0.9rem 1.5rem",
        fontWeight: 'buttonSmall',
      },
    },
  })
);

Button.defaultProps = {
  variant: 'primary',
  size: 'default',
};

export default Button;
