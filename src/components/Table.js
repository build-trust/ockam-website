import styled from '@emotion/styled';
import { darken, lighten } from 'polished';
import { size, typography, space } from 'styled-system';

const borderColor = props => darken(0.05, props.theme.custom.table.accentColor);
const evenRowColor = props =>
  lighten(0.009, props.theme.custom.table.accentColor);

const BaseTable = styled('table')`
  border-radius: ${props => props.theme.radii[1]};
  border-collapse: collapse;
  overflow: hidden;

  td,
  th {
    padding: 0.8rem 2rem;
    border-right: 1px solid ${borderColor};
    :last-child {
      border-right: none;
    }
  }

  th {
    vertical-align: middle;
    font-weight: ${props => props.theme.fontWeights[3]};
    text-align: left;
    background-color: ${props => props.theme.custom.table.accentColor};
    border-bottom: 1px solid ${borderColor};
  }

  tr {
    :nth-child(even) {
      background-color: ${evenRowColor};
    }
  }
`;

const Table = styled(BaseTable)(size, typography, space);

Table.defaultProps = {
  mb: 3,
};

export default Table;
