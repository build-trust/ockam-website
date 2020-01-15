import styled from '@emotion/styled';
import { space, color, typography, border, variant  } from 'styled-system';

const Button = styled('button')(
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
  border,
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
        padding: "1.5rem 2.4rem",
        fontWeight: 'button',

      },
      small: {
        fontSize: 2,
        padding: "1rem 2.4rem",
        fontWeight: 'button',

      },
      xSmall: {
        fontSize: 1,
        padding: "0.9rem 1.5rem",
        fontWeight: 'buttonSmall',
      },
    },
  }),
  variant({
    prop: 'outline',
    variants: {
      primary: {
        bg: 'transparent',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'dirtyPrimary',
        color: 'primary',
      },
      white: {
        bg: 'transparent',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'dirtyWhite',
        color: 'white',
      },
    },
  })

);

Button.defaultProps = {
  variant: 'primary',
  size: 'default',
};

export default Button;
