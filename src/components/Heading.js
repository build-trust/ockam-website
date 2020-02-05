import styled from '@emotion/styled';
import { space, color, typography, layout } from 'styled-system';

const Heading = styled('h1')(
  props => ({
    fontSize: props.as
      ? props.theme.fontSizes[props.as]
      : props.theme.fontSizes[0],
    textTransform: props.capitalize ? 'capitalize' : 'none',
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
  lineHeight: 'heading',
  color: 'heading',
  fontFamily: 'heading',
  fontWeight: 'heading',
  capitalize: true,
};

export default Heading;
