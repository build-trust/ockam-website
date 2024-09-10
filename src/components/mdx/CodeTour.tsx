'use client';
import { z } from 'zod';
import { Selection, Selectable, SelectionProvider } from 'codehike/utils/selection';
import { Block, HighlightedCodeBlock, parseProps } from 'codehike/blocks';
import { HighlightedCode, Pre, highlight } from 'codehike/code';

// import Content from "./content.md"
// From token-transitions example
import { tokenTransitions } from './transition/TokenTransition';
import { focus } from './transition/Focus';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Heading } from '@chakra-ui/react';
import { CheckIcon, CopyIcon } from '@chakra-ui/icons';

const StyledSelectable = styled(Selectable)`
  padding: 0.5rem 1.25rem 0.5rem 1.25rem;
  margin-bottom: 24px;
  background-color: white;
  border: 4px solid transparent;
  border-right: none;
  opacity: 0.3;
  transition: opacity 0.5s ease-in;

  &[data-selected='true'] {
    opacity: 1;
    border-radius: 4px 0 0 4px;
    border: 4px solid #002b36;
    border-right: none;
  }
`;

const Schema = Block.extend({
  steps: z.array(Block.extend({ code: HighlightedCodeBlock })),
});

const CodeTour: FC = (props) => {
  const uid = Math.random().toString(36).substr(2, 5);
  const data = parseProps(props, Schema);
  const [steps, setSteps] = useState<typeof data.steps>([]);
  useEffect(() => {
    const parseSteps = async () => {
      const ss = await Promise.all(
        data.steps.map(async (s) => {
          const code = await highlight(s.code, 'github-dark');
          s.code = code;
          return s;
        }),
      );
      setSteps(ss);
    };
    parseSteps();
  }, []);
  return (
    <SelectionProvider style={{ display: 'flex', gap: '0', flexDirection: 'row' }}>
      <div
        className="prose prose-invert"
        style={{ flex: '1 1 0%', marginTop: '8rem', marginBottom: '8rem', marginLeft: '0' }}
      >
        {steps.map((step, i) => (
          <StyledSelectable
            key={`${uid}-${i}`}
            index={i}
            selectOn={['click', 'scroll']}
            style={{
              borderColor: 'border-color: rgb(63 63 70)',
              padding: '0.5rem 1.25rem 0.5rem 1.25rem',
              marginBottom: '24px',
              backgroundColor: 'white',
            }}
          >
            <Heading
              as="h2"
              style={{ marginTop: '1rem', fontSize: '1.25rem', lineHeight: '1.75rem' }}
            >
              {step.title}
            </Heading>
            <div>{step.children}</div>
          </StyledSelectable>
        ))}
      </div>
      <div
        style={{
          width: '40vw',
          maxWidth: '36rem',
          backgroundColor: '#002b36',
          borderRadius: '4px',
        }}
      >
        <div style={{ top: '4rem', position: 'sticky', overflow: 'auto' }}>
          <Selection
            from={
              steps &&
              steps.map((step) => (
                // eslint-disable-next-line react/jsx-key
                <Code codeblock={step.code} />
              ))
            }
          />
        </div>
      </div>
    </SelectionProvider>
  );
};

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  return (
    <button
      className="..."
      aria-label="Copy to clipboard"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      style={{ right: '4px', position: 'absolute', top: '2px' }}
    >
      {copied ? <CheckIcon color="white" /> : <CopyIcon color="white" />}
    </button>
  );
};

type CodeProps = {
  codeblock: HighlightedCode;
};
const Code: FC<CodeProps> = ({ codeblock }) => {
  return (
    <div style={{ position: 'relative' }}>
      <CopyButton text={codeblock.code} />
      <Pre
        code={codeblock}
        handlers={[tokenTransitions, focus]}
        style={{
          // maxHeight: '50vh',
          scrollBehavior: 'smooth',
          overflow: 'auto',
          // minHeight: '40rem',
          borderRadius: '6px',
          backgroundColor: '#002b36',
          fontFamily:
            'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
          fontFeatureSettings: 'normal',
          fontVariationSettings: 'normal',
          fontSize: '14px',
          padding: '15px',
        }}
      />
    </div>
  );
};

// const CodeTour = ({ codeblock }: { codeblock: HighlightedCode }) => {
//   return (
//     <Pre
//       code={codeblock}
//       style={{
//         borderRadius: '6px',
//         background: '#002b36',
//         fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, monospace',
//         fontSize: '14px',
//         padding: '15px 40px 15px 40px',
//       }}
//     />
//   )
// }

export default CodeTour;
