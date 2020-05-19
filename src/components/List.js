import styled from '@emotion/styled';
import { space } from 'styled-system';

const List = styled('ul')(
  ({ theme }) => ({
    listStyle: 'initial',
    li: {
      marginBottom: theme.space.xSmall,
      marginTop: theme.space.none,
      marginLeft: theme.space.none,
      paddingLeft: theme.space.none,
      lineHeight: theme.lineHeights.body,
    },
  }),
  space
);

List.defaultProps = {
  paddingLeft: 'medium',
};

export default List;
