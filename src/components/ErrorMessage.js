import styled from '@emotion/styled';

const ErrorMessage = styled.div`
  height: 2rem;
  font-size: ${props => props.theme.fontSizes.small};
  margin-top: 0.3rem;
  color: ${props => props.theme.colors.accent};
`;

export default ErrorMessage;
