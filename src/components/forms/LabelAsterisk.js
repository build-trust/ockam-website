import styled from '@emotion/styled';

export const LabelAsterisk = styled.span`
  :before {
    content: '*';
    margin-left: 0.4rem;
    color: ${props => props.theme.colors.negative};
  }
`;

export default LabelAsterisk;
