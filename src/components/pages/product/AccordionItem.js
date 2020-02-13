import React from 'react';
import PropTypes from 'prop-types';
import ChevronDown from 'emotion-icons/fa-solid/ChevronDown';
import ChevronUp from 'emotion-icons/fa-solid/ChevronUp';
import styled from '@emotion/styled';

import ToggleIcon from '../../Collapse/ToggleIcon';
import Text from '../../Text';
import CheckedListElement from '../../CheckedListElement';
import Icon from "../../Icon";
import BreakFlexColumn from "../../BreakFlexColumn";

const Collapse = styled('div')`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
`;

const StyledText = styled(Text)`
  transition: opacity 200ms ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`

const CollapseContentContainer = styled('div')`
  margin-top: 2rem;
`;

const CollapseContent = ({ show, children }) =>
  (show ? (
    <CollapseContentContainer>
      {' '}
      {children}
      {' '}
    </CollapseContentContainer>
  ) : null);

CollapseContent.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

const AccordionItem = ({ identifier, title, onClick, isActive, children }) => {
  return (
    <CheckedListElement>
      <Collapse onClick={() => onClick(identifier)}>
        <StyledText mb={0} fontWeight="bold">
          {title}
        </StyledText>
        <ToggleIcon
          CollapsedIcon={() => <Icon icon={ChevronDown} color='caption' size={16} />}
          UncollapsedIcon={() => <Icon icon={ChevronUp} color='caption' size={16} />}
          ml={2}
          isCollapsed={!isActive}

        />
        <BreakFlexColumn />
        <CollapseContent show={isActive}>{children}</CollapseContent>
      </Collapse>
    </CheckedListElement>
  );
};

AccordionItem.propTypes = {
  identifier: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default AccordionItem;
