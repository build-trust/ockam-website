import * as React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import darkTheme from '../../theme/prismTheme';

import Pre from './Pre';

const LineNumber = styled('span')`
  display: inline-block;
  width: 3em;
  user-select: none;
  opacity: 0.3;
  text-align: center;
  position: relative;
`;

const CodeBlockContainer = styled('div')`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  .prism-code {
    border-radius: ${props => props.theme.radii[1]};
  }
  font-size: 1.3rem;
  ${props =>
    props.hasLineNumbers &&
    `
    .token-line {
      margin-left: -1.6rem;
      margin-right: -1.6rem;
      padding-right: 1.6rem;
    }
  `}
`;

/** Removes the last token from a code example if it's empty. */
function cleanTokens(tokens) {
  const tokensLength = tokens.length;
  if (tokensLength === 0) {
    return tokens;
  }
  const lastToken = tokens[tokensLength - 1];
  if (lastToken.length === 1 && lastToken[0].empty) {
    return tokens.slice(0, tokensLength - 1);
  }
  return tokens;
}

/* eslint-disable */
const CodeBlock = ({ children: code, className, noLineNumbers = false }) => {
  const lang = className && className.split('-')[1];
  const hasLineNumbers = !noLineNumbers && lang !== `noLineNumbers`;
  return (
    <CodeBlockContainer hasLineNumbers={hasLineNumbers}>
      <Highlight
        {...defaultProps}
        code={code}
        language={lang || 'go'}
        theme={darkTheme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style} p={3} data-linenumber={true}>
            {cleanTokens(tokens).map((line, i) => {
              let lineClass = {};
              let isDiff = false;
              if (
                line[0] &&
                line[0].content.length &&
                line[0].content[0] === '+'
              ) {
                lineClass = { backgroundColor: 'rgba(76, 175, 80, 0.2)' };
                isDiff = true;
              } else if (
                line[0] &&
                line[0].content.length &&
                line[0].content[0] === '-'
              ) {
                lineClass = { backgroundColor: 'rgba(244, 67, 54, 0.2)' };
                isDiff = true;
              } else if (
                line[0] &&
                line[0].content === '' &&
                line[1] &&
                line[1].content === '+'
              ) {
                lineClass = { backgroundColor: 'rgba(76, 175, 80, 0.2)' };
                isDiff = true;
              } else if (
                line[0] &&
                line[0].content === '' &&
                line[1] &&
                line[1].content === '-'
              ) {
                lineClass = { backgroundColor: 'rgba(244, 67, 54, 0.2)' };
                isDiff = true;
              }
              const lineProps = getLineProps({ line, key: i });
              lineProps.style = lineClass;
              const diffStyle = {
                userSelect: 'none',
                MozUserSelect: '-moz-none',
                WebkitUserSelect: 'none',
              };
              let splitToken;
              return (
                <div {...lineProps}>
                  {hasLineNumbers && <LineNumber>{i + 1}</LineNumber>}
                  {line.map((token, key) => {
                    if (isDiff) {
                      if (
                        (key === 0 || key === 1) &
                        (token.content.charAt(0) === '+' ||
                          token.content.charAt(0) === '-')
                      ) {
                        if (token.content.length > 1) {
                          splitToken = {
                            types: ['template-string', 'string'],
                            content: token.content.slice(1),
                          };
                          const firstChar = {
                            types: ['operator'],
                            content: token.content.charAt(0),
                          };
                          return (
                            <React.Fragment>
                              <span
                                {...getTokenProps({ token: firstChar, key })}
                                style={diffStyle}
                              />
                              <span
                                {...getTokenProps({ token: splitToken, key })}
                              />
                            </React.Fragment>
                          );
                        }
                        return (
                          <span
                            {...getTokenProps({ token, key })}
                            style={diffStyle}
                          />
                        );
                      }
                    }
                    return <span {...getTokenProps({ token, key })} />;
                  })}
                </div>
              );
            })}
          </Pre>
        )}
      </Highlight>
    </CodeBlockContainer>
  );
};

/* eslint-enable */

CodeBlock.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  className: PropTypes.string.isRequired,
};

export default CodeBlock;
