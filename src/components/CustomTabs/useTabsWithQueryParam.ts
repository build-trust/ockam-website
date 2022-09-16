import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

type UseTabsWithQueryParamProps = {
  tabsNames: string[];
  queryName: string;
  sectionName?: string;
};

type UseTabsWithQueryParamReturnType = {
  tabIndex: number;
  handleTabsChange: (index: number) => void;
};

const useTabsWithQueryParam = ({
  tabsNames,
  queryName,
  sectionName,
}: UseTabsWithQueryParamProps): UseTabsWithQueryParamReturnType => {
  const [tabIndex, setTabIndex] = useState(0);
  const router = useRouter();

  const indexOfCategoryBasedOnQuery = useMemo(
    () =>
      tabsNames?.indexOf(router.query[queryName] as string) > -1
        ? tabsNames?.indexOf(router.query[queryName] as string)
        : 0,
    [router.query, queryName, tabsNames]
  );

  const handleScrollToSectionAnchor = useCallback((section: string) => {
    if (typeof document === 'undefined' || !section) return;
    const teamSectionAnchor = document.getElementById(section);
    if (teamSectionAnchor) teamSectionAnchor.scrollIntoView();
  }, []);

  const handleTabsChange = useCallback(
    (index: number): void => {
      router.push(
        {
          query: { [queryName]: tabsNames[index] },
        },
        undefined,
        { shallow: true }
      );
    },
    [router, tabsNames, queryName]
  );

  useEffect(() => {
    setTabIndex(indexOfCategoryBasedOnQuery < 0 ? 0 : indexOfCategoryBasedOnQuery);
  }, [indexOfCategoryBasedOnQuery]);

  useEffect(() => {
    if (router.query[queryName] && sectionName) {
      handleScrollToSectionAnchor(sectionName);
    }
  }, [handleScrollToSectionAnchor, queryName, router.query, sectionName]);

  return { tabIndex, handleTabsChange };
};

export default useTabsWithQueryParam;
