import styled from '@emotion/styled';

const Container = styled.nav`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  padding: ${props => (props.isCollapsedHeader ? '0.8rem 0' : '1.5rem 0')};
  position: relative;
  width: inherit;
  color: ${props => props.theme.colors.menuText};
`;

export default Container;
