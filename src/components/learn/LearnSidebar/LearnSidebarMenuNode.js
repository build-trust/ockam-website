import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import OpenIcon from 'emotion-icons/octicons/ChevronDown';
import CloseIcon from 'emotion-icons/octicons/ChevronRight';
import isArray from 'lodash/isArray';
import { rgba } from 'polished';

import Icon from '../../Icon';
import SidebarMenuItem from '../../Sidebar/SidebarMenuItem';
import capitalize from '../../../utils/capitalize';
import removeStartEndSlugSlash from '../../../utils/removeStartEndSlugSlash';

const NodeLink = styled(SidebarMenuItem)`
  padding-left: 1rem;
  margin-left: 0;
  :hover {
    color: ${props => props.theme.colors.link.hover};
    svg {
      color: ${props => props.theme.colors.icon};
    }
  }
`;

const NodeList = styled.ul`
  border-left: 1px solid
    ${props =>
      props.deepLevel >= 0 ? props.theme.colors.accentBackground : 'inherit'};
  margin-left: ${props => (props.deepLevel >= 0 ? '1.4rem' : '0')};
  padding-left: 0;
`;

const ButtonChevron = styled.button`
  background: transparent;
  border: 0;
  margin-left: auto;
  padding: 0.4rem 0.4rem;
  cursor: auto;
  :hover {
    ${({ theme }) => `
      background-color: ${rgba(theme.colors.icon, 0.24)};
      border-radius: ${theme.radii.button};
      cursor: pointer;
    `}
  }
`;

const getArtificiallyUrl = (url, deepLevel) => {
  return url
    .split('/')
    .slice(1, deepLevel + 3)
    .join('/');
};

// eslint-disable-next-line complexity
const LearnSidebarMenuNode = ({
  url,
  title,
  name,
  nodes,
  deepLevel,
  location,
  expandedNodes,
  onToggle,
  hideNode,
  expandNode,
  parentHasSameUrl,
}) => {
  const hasChildren = isArray(nodes) && nodes.length !== 0;

  // This `artificiallyUrl` is necessary cause nodes without root file (index.md or README.md), generates same
  // url as first child
  const isRootWithSameUrl = hasChildren && url === nodes[0].url;
  const artificiallyUrl = isRootWithSameUrl
    ? getArtificiallyUrl(url, deepLevel)
    : false;
  const isActive = useMemo(
    () => location && location.pathname.match(artificiallyUrl || url),
    // Since location is coming straight up from Gatsby we know that is memoized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location.pathname, artificiallyUrl, url]
  );
  const isExpandedNode = expandedNodes.some(item => item === url);

  const trimmedUrl = removeStartEndSlugSlash(artificiallyUrl || url);
  const trimmedPathname = removeStartEndSlugSlash(location.pathname);

  const isSelected = location && trimmedPathname === trimmedUrl;

  const isDirectoryNode = nodes && nodes[0] ? nodes[0].url === url : false;
  const directoryTitle = capitalize(name);

  const handleToggle = e => onToggle(e, url);

  useEffect(() => {
    if (parentHasSameUrl) return;
    if (isActive) {
      expandNode(url);
    } else {
      hideNode(url);
    }
  }, [parentHasSameUrl, isActive, expandNode, url, hideNode]);

  return (
    <div>
      {title && (
        <NodeLink
          deepLevel={deepLevel}
          isSelected={isSelected ? '1' : undefined}
          isActivePath={isActive ? '1' : undefined}
          to={url}
        >
          {isDirectoryNode ? directoryTitle : title}
          {hasChildren && (
            <ButtonChevron type="button" onClick={handleToggle}>
              {isExpandedNode ? (
                <Icon icon={OpenIcon} size={16} />
              ) : (
                <Icon icon={CloseIcon} size={16} />
              )}
            </ButtonChevron>
          )}
        </NodeLink>
      )}

      {isExpandedNode && hasChildren ? (
        <NodeList deepLevel={deepLevel}>
          {nodes.map(item => (
            <LearnSidebarMenuNode
              location={location}
              key={item.url}
              title={item.title}
              name={item.name}
              url={item.url}
              deepLevel={item.deepLevel}
              nodes={item.nodes}
              expandedNodes={expandedNodes}
              onToggle={onToggle}
              hideNode={hideNode}
              expandNode={expandNode}
              parentHasSameUrl={isRootWithSameUrl}
            />
          ))}
        </NodeList>
      ) : null}
    </div>
  );
};

LearnSidebarMenuNode.propTypes = {
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.string,
  deepLevel: PropTypes.number.isRequired,
  url: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  expandedNodes: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggle: PropTypes.func.isRequired,
  hideNode: PropTypes.func.isRequired,
  expandNode: PropTypes.func.isRequired,
  parentHasSameUrl: PropTypes.bool,
};

LearnSidebarMenuNode.defaultProps = {
  url: '',
  title: '',
  name: '',
  parentHasSameUrl: false,
};

export default LearnSidebarMenuNode;
