import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import OpenIcon from 'emotion-icons/octicons/ChevronDown';
import CloseIcon from 'emotion-icons/octicons/ChevronRight';
import isArray from 'lodash/isArray';

import Icon from '../../Icon';
import SidebarMenuItem from '../../Sidebar/SidebarMenuItem';
import capitalize from '../../../utils/capitalize';
import removeStartEndSlugSlash from "../../../utils/removeStartEndSlugSlash";

const NodeLink = styled(SidebarMenuItem)`
  padding-left: 1rem;
  margin-left: 0;
`;

const NodeList = styled.ul`
  border-left: 1px solid
    ${props =>
  (props.deepLevel >= 0 ? props.theme.colors.accentBackground : 'inherit')};
  margin-left: ${props => (props.deepLevel >= 0 ? '1.4rem' : '0')};
  padding-left: 0;
`;

const ButtonChevron = styled.button`
  background: transparent;
  border: 0;
  margin-left: auto;
`;

const getArtificiallyUrl = (url, deepLevel) => {
 return url.split("/").slice(1, deepLevel + 3).join("/")
}

// eslint-disable-next-line complexity
const LearnSidebarMenuNode = ({
  url,
  title,
  name,
  nodes,
  deepLevel,
  location,
}) => {

  const hasChildren = isArray(nodes) && nodes.length !== 0;

  // This `artificiallyUrl` is needed cause nodes without root file (index.md or README.md), generates same
  // url as first child
  const isRootWithSameUrl = hasChildren && url === nodes[0].url;
  const artificiallyUrl = isRootWithSameUrl ? getArtificiallyUrl(url, deepLevel) : false;
  const isActive = location && location.pathname.match(artificiallyUrl || url);

  const trimmedUrl = removeStartEndSlugSlash(artificiallyUrl || url);
  const trimmedPathname = removeStartEndSlugSlash(location.pathname);

  const isSelected = location &&  trimmedPathname === trimmedUrl;

  const isDirectoryNode = nodes && nodes[0] ? nodes[0].url === url : false;
  const directoryTitle = capitalize(name);

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
            <ButtonChevron type="button">
              {isActive ? (
                <Icon icon={OpenIcon} size={16} />
              ) : (
                <Icon icon={CloseIcon} size={16} />
              )}
            </ButtonChevron>
          )}
        </NodeLink>
      )}

      {isActive && hasChildren ? (
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
};

LearnSidebarMenuNode.defaultProps = {
  url: '',
  title: '',
  name: '',
};

export default LearnSidebarMenuNode;
