import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Scrollbar from '../../Scrollbar';
import TableOfContent from '../TableOfContent';
import EditOnGithubLink from '../../EditOnGithubLink';
import StarGithubRepo from '../../StarGithubRepo';
import SocialBox from '../../SocialBox';
import useSetFullHeightReducedByTopOffset from '../../../hooks/useSetFullHeightReducedByTopOffset';
import ConditionalWrapper from '../../ConditionalWrapper';
import useMatchBreakpoint from '../../../hooks/useMatchBreakpoint';

const checkIsEmptyTableOfContent = items => {
  if (!items || items.length === 0) return true;
  if (items.length > 1) return false;
  return !items.some(lvl1 => lvl1.items && lvl1.items.length > 0);
};

const Container = styled('div')`
  padding-top: 4rem;
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto min-content;
`;

const RightSidebar = ({ tableOfContents, relativePath, dependedRepos }) => {
  const ref = useRef();
  const isEmptyTableOfContent = checkIsEmptyTableOfContent(
    tableOfContents.items
  );
  const isDesktop = useMatchBreakpoint('desktop');
  useSetFullHeightReducedByTopOffset(ref, isDesktop);
  return (
    <Container ref={ref}>
      <ConditionalWrapper
        condition={isDesktop}
        wrapper={children => <Scrollbar>{children}</Scrollbar>}
      >
        <>
          {!isEmptyTableOfContent && (
            <TableOfContent items={tableOfContents.items} />
          )}
          <EditOnGithubLink
            filePath={relativePath}
            dependedRepos={dependedRepos}
          />
          <StarGithubRepo mb={4} />
        </>
      </ConditionalWrapper>
      <SocialBox />
    </Container>
  );
};

RightSidebar.propTypes = {
  tableOfContents: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  relativePath: PropTypes.string.isRequired,
  dependedRepos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

RightSidebar.defaultProps = {
  tableOfContents: {},
};

export default RightSidebar;
