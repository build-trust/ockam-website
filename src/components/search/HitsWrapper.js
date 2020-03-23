import styled from "@emotion/styled";
import {lighten} from "polished";

export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  height: 70vh;
  z-index: 2;
  position: absolute;
  right: 0;
  top: 100%;
  min-width: 50rem;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.search.resultBoxBorder};
  box-shadow: 0 3px 8px 0 ${props => props.theme.colors.search.resultBoxShadow};
  
  background: white;
  border-radius: ${props => props.theme.radii.default};
  .ais-Hits-item {
    border:0;
    margin: 0;
    padding: 0;
  }
  .ais-Highlight {

  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  mark {
    color: ${props => props.theme.colors.accent};
    background: ${props => lighten(0.4, props.theme.colors.accent)};
    border-radius:  ${props => props.theme.radii.default};
  
  }

  h3 {
    margin-bottom: 0.5em;
    font-weight: 500;
    font-size: 1.4rem;
  }
`;

export default HitsWrapper;
