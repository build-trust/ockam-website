import styled from '@emotion/styled';
import { space, color, typography, border, layout, variant } from 'styled-system';

const statesForButtonVariant = {
  'primary': (theme) => `
      &:hover {
      box-shadow: 0 12px 24px -10px ${theme.colors.button.primaryShadow};
      color: ${theme.colors.white};
    }
    &:focus {
      border: 1px solid ${theme.colors.button.primaryActive};
      box-shadow: 0 0 4px 1px ${theme.colors.primary};
    }`,
  'white': (theme) => `
    &:active {
      background-color: ${theme.colors.button.whiteActiveBackground};
    }
    &:hover {
      color: ${theme.colors.dark};
    }
  `,
  'secondary': (theme) => `
  &:hover {
    border: 1px solid ${theme.colors.button.secondaryHover};
    color: ${theme.colors.button.secondaryText};
  }
  &:active {
    border: 1px solid ${theme.colors.button.secondaryActive}
  }
  `,

};

const Button = styled('button')(
  props => ({
    padding: '1.4rem 2.5rem',
    borderRadius: props.theme.radii.button,
    fontSize: props.theme.fontSizes.body,
    fontWeight: props.theme.fontWeights.button,
    lineHeight: props.theme.lineHeights.body,
    display: 'inline-block',
    width: props.width,
  }),
  space,
  color,
  typography,
  border,
  layout,
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
      secondary: {
        color: 'button.secondaryText',
        bg: 'secondary',
        border: "1px solid transparent",
      },
    },
  }),
  variant({
    prop: 'size',
    variants: {
      default: {
        fontSize: 2,
        padding: '1.2rem 2.4rem',
        fontWeight: 'button',
      },
      small: {
        fontSize: 1,
        padding: '0.9rem 1.5rem',
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
  width: 'auto',
};

const defaultButton = styled(Button)`
  transition: all 150ms ease-in-out;
  ${props => props.variant && statesForButtonVariant[props.variant](props.theme)};

`;

export default defaultButton;
