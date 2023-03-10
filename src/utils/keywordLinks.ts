import type { Content, ElementContent, Root, RootContent } from 'hast';
import replaceToArray from 'string-replace-to-array';
import type { Plugin, Transformer } from 'unified';
import { map } from 'unist-util-map';

function makeTransformer(options: Options): Transformer<Root, Root> {
  return (tree: Root) => {
    const keywords = options.keywords.map((i) => i.keyword).join('|');
    const regex = new RegExp(`\\b(${keywords})\\b`, 'ig');

    const mappedChildren = tree.children.map(
      (child) =>
        map(child, (node: RootContent, idx, parent) => {
          if (
            node.type !== 'text' ||
            !regex.test(node.value) ||
            (parent?.type === 'element' && parent.tagName === 'a')
          ) {
            return node;
          }

          const children = replaceToArray(node.value, regex, (text: string) => ({
            matchedText: text,
          })).map<ElementContent>((segment: string | { matchedText: string }) => {
            if (typeof segment === 'string') return { type: 'text', value: segment };
            const keyword = options.keywords.find(
              (i) => i.keyword.toLowerCase() === segment.matchedText.toLowerCase()
            );
            return {
              type: 'element',
              tagName: 'a',
              properties: {
                className: 'key-concept',
                href: keyword?.url || '',
              },
              children: [{ type: 'text', value: segment.matchedText }],
            };
          });

          const result: Content = {
            type: 'element',
            tagName: 'span',
            children,
          };

          return result;
        }) as RootContent
    );

    return {
      ...tree,
      children: mappedChildren,
    };
  };
}

/**
 * Plugin to twemoji-fy ordinary emojis in HTML.
 */
type KeywordMap = {
  keyword: string;
  url: string;
};
type Options = {
  keywords: KeywordMap[];
};
const RehypeKeywordLinks: Plugin<[Options], Root, Root> = function (options) {
  return makeTransformer(options);
};

export default RehypeKeywordLinks;
