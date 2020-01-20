import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import {useTheme} from "emotion-theming";
import {parseToRgb} from "polished";

import Heading from "../Heading";

import ToggleIcon from "./ToggleIcon";

const Container = styled(animated.div)`
  background-color: ${props => (props.isCollapsed ? 'transparent' : props.theme.colors.accentBackground)};
  border-bottom: 1px solid ${props => (props.isCollapsed ? props.theme.colors.accentBackground : 'transparent')};

`;

const Header = styled('div')`
  padding: 2.4rem 4rem 2.4rem 4rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
`;

const Content = styled(animated.div)`
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  padding-bottom: 2.4rem;
`;

const AnimatedContentWrapper = styled(animated.div)`
  overflow: hidden;
`;
const getRefClientHeight = (ref) => ref && ref.current && ref.current.clientHeight;
const isNumericCollapsed = isCollapsed => (!isCollapsed ? 1 : 0);

const Collapse = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const theme = useTheme();
  const ref = useRef();

  const viewHeight = getRefClientHeight(ref);

  const rgbaObject = parseToRgb(theme.colors.accentBackground);
  const interpolateRgba = (alpha) => `rgba(${rgbaObject.red}, ${rgbaObject.green}, ${rgbaObject.blue}, ${alpha})`;
  const toggleCollapse = () => setIsCollapsed( prevState => !prevState);

  const numericIsCollapsed = isNumericCollapsed(isCollapsed);

  const { height, opacity, backgroundAlpha } = useSpring({
    from: { height: 0, opacity: 0, backgroundAlpha: 0 },
    to: { height: !isCollapsed ? viewHeight : 0, opacity: numericIsCollapsed, backgroundAlpha: numericIsCollapsed},
  });

  return (
    <Container isCollapsed={isCollapsed} style={{backgroundColor: backgroundAlpha.interpolate(interpolateRgba)}}>
      <Header onClick={toggleCollapse}>
        <Heading as='h5' mb={0}>{title}</Heading>
        <ToggleIcon isCollapsed={isCollapsed} />
      </Header>
      <AnimatedContentWrapper style={{ opacity, height }}>
        <Content ref={ref}>
          {children}
        </Content>
      </AnimatedContentWrapper>

    </Container>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Collapse;
