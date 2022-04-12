import { useEffect } from 'react';

/**
 * Scrolls the page to the top on mount.
 */
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export default useScrollToTop;
