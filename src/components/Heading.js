import styled from '@emotion/styled';
import { space, color, typography, layout  } from 'styled-system';

const Heading = styled('h1')(
  props => ({
    fontWeight: props.theme.fontWeights.heading,
    fontFamily: props.theme.fonts.heading,
    color: props.theme.colors.heading,
    lineHeight: props.theme.lineHeights.heading,
    fontSize: props.as ? props.theme.fontSizes[props.as] : props.theme.fontSizes[0],
  }),
  space,
  color,
  typography,
  layout
);

Heading.displayName = 'Heading';

Heading.defaultProps = {
  mt: 0,
  mb: 3,
};

export default Heading;
