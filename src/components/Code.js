import styled from '@emotion/styled';

const Code = styled('code')`
  background: ${props => props.theme.custom.code.backgroundColor};
  color: ${props => props.theme.colors.code};
  font-size: ${props => props.theme.fontSizes.caption};
  border-radius: ${props => props.theme.radii.default};
  padding: 0.5rem 1rem;
  font-weight: 700;
`;

export default Code;
