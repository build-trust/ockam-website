import { useEffect, useMemo, useState } from 'react';
import isArray from 'lodash/isArray';
import { useRouter } from 'next/router';

type HeadingElement = { innerText?: string; id: string; nodeName: string };
type HeadingItem = {
  id: string;
  title: string;
};
export type HeadingItemWithNestedHeadings = HeadingItem & { items: HeadingItem[] };

type UseHeadingsTreeReturnType = {
  headingsTree: HeadingItemWithNestedHeadings[];
  headingHashesList: string[];
};

const getHeadingsTree = (headingElements: HeadingElement[]): HeadingItemWithNestedHeadings[] => {
  const headingsTree: HeadingItemWithNestedHeadings[] = [];

  headingElements.forEach((heading) => {
    const { innerText: title = '', id, nodeName } = heading;

    if (!id) return;

    if (nodeName === 'H2') {
      headingsTree.push({ id, title, items: [] });
    } else if (nodeName === 'H3' && headingsTree.length > 0) {
      headingsTree[headingsTree.length - 1].items.push({
        id,
        title,
      });
    }
  });

  return headingsTree;
};

const getHeadingHashesListFromHeadingsTree = (items: HeadingItemWithNestedHeadings[]): string[] => {
  if (!isArray(items)) return [];

  return items.reduce((acc: string[], lvl1Item) => {
    acc.push(lvl1Item.id);
    if (lvl1Item.items) {
      lvl1Item.items.forEach((lvl2Item) => {
        acc.push(lvl2Item.id);
      });
    }
    return acc;
  }, []);
};

const useHeadingsTree = ({
  sourceEl,
}: {
  sourceEl?: HTMLElement | null;
}): UseHeadingsTreeReturnType => {
  const router = useRouter();
  const [headingsTree, setHeadingsTree] = useState<HeadingItemWithNestedHeadings[]>([]);
  const headingHashesList = useMemo(
    () => getHeadingHashesListFromHeadingsTree(headingsTree),
    [headingsTree]
  );

  useEffect(() => {
    const source = sourceEl || document;
    const headingElements = Array.from(source.querySelectorAll('h2, h3'));

    const newHeadingsTree = getHeadingsTree(headingElements);
    setHeadingsTree(newHeadingsTree);
  }, [sourceEl, router.asPath]);

  return { headingsTree, headingHashesList };
};

export default useHeadingsTree;
