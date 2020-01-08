import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ChevronDown as OpenIcon } from 'styled-icons/octicons/ChevronDown';
import { ChevronRight as CloseIcon } from 'styled-icons/octicons/ChevronRight';

import config from '../../../../config';
import Icon from '../../Icon';
import SidebarMenuItem from '../../Sidebar/SidebarMenuItem';

const NodeLink = styled(SidebarMenuItem)`
  padding-left: 1rem;
  margin-left: 0;
`;

const NodeList = styled.ul`
  border-left: 1px solid ${props => (props.deepLevel >= 0 ? props.theme.colors.accentBackground : 'inherit')};
  margin-left: ${props => (props.deepLevel >= 0 ? '1.4rem' : '0')};
  padding-left: 0;
`;

const ButtonChevron = styled.button`
  background: transparent;
  border: 0;
  margin-left: auto;
  margin-right: 0.8rem;
`;

// eslint-disable-next-line complexity
const DocsSidebarMenuNode = ({
  setCollapsed,
  collapsed,
  url,
  title,
  nodes,
  deepLevel,
  location,
}) => {
  const isCollapsed = collapsed[url];
  const collapse = () => {
    setCollapsed(url);
  };
  const hasChildren = nodes.length !== 0;


  const isActive =
    location &&
    (location.pathname === url ||
      location.pathname === config.gatsby.pathPrefix + url);
  const isActivePath = location && location.pathname.match(url);

  const isLinkCollapsible = isCollapsed && hasChildren;
  return (
    <div>
      {title && (
        <NodeLink
          deepLevel={deepLevel}
          isActive={isActive ? '1' : undefined}
          isActivePath={isActivePath ? '1' : undefined}
          onClick={isLinkCollapsible ? collapse : () => {}}
          to={url}
        >
          {title}
          {hasChildren && (
            <ButtonChevron type="button" onClick={collapse}>
              {!isCollapsed ? <Icon icon={OpenIcon} size={16} /> : <Icon icon={CloseIcon} size={16} />}
            </ButtonChevron>
          )}
        </NodeLink>
      )}

      {!isCollapsed && hasChildren ? (
        <NodeList deepLevel={deepLevel}>
          {nodes.map(item => (
            <DocsSidebarMenuNode
              location={location}
              key={item.url}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              title={item.title}
              url={item.url}
              deepLevel={item.deepLevel}
              nodes={item.nodes}
            />
          ))}
        </NodeList>
      ) : null}
    </div>
  );
};

DocsSidebarMenuNode.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  title: PropTypes.string,
  collapsed: PropTypes.shape({}).isRequired,
  deepLevel: PropTypes.number.isRequired,
  url: PropTypes.string,
  setCollapsed: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

DocsSidebarMenuNode.defaultProps = {
  url: '',
  title: '',
};

export default DocsSidebarMenuNode;
