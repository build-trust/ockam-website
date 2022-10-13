import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

type UseTabsWithHashProps = {
  tabsNames: string[];
  sectionName?: string;
};

type UseTabsWithHashReturnType = {
  tabIndex: number;
  handleTabsChange: (index: number) => void;
};

const useTabsWithHash = ({
  tabsNames,
  sectionName,
}: UseTabsWithHashProps): UseTabsWithHashReturnType => {
  const [currentTabName, setCurrentTabName] = useState('');
  const router = useRouter();

  const tabIndex = useMemo(() => {
    const indexOfCurrentTabName = tabsNames?.indexOf(currentTabName);
    return indexOfCurrentTabName < 0 ? 0 : indexOfCurrentTabName;
  }, [currentTabName, tabsNames]);

  const handleScrollToSectionAnchor = useCallback((section: string) => {
    if (typeof document === 'undefined' || !section) return;
    const teamSectionAnchor = document.getElementById(section);
    if (teamSectionAnchor) teamSectionAnchor.scrollIntoView();
  }, []);

  const handleTabsChange = useCallback(
    (index: number) => {
      const tabNameToSetAsCurrent = tabsNames[index];
      setCurrentTabName(tabNameToSetAsCurrent);

      if (typeof window === 'undefined') return;
      window.history.pushState({}, '', `#${tabNameToSetAsCurrent}`);
    },
    [tabsNames]
  );

  useEffect(() => {
    const currentTabNameBasedOnHash = tabsNames.find((value) =>
      router.asPath.includes(`#${value}`)
    );
    setCurrentTabName(currentTabNameBasedOnHash || '');
  }, [router.asPath, tabsNames]);

  useEffect(() => {
    if (!sectionName || !currentTabName) return;
    handleScrollToSectionAnchor(sectionName);
  }, [handleScrollToSectionAnchor, currentTabName, sectionName, tabsNames]);

  return { tabIndex, handleTabsChange };
};

export default useTabsWithHash;
