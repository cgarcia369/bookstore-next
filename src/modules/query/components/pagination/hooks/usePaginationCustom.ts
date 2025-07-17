import { usePagination } from "react-instantsearch-core";
import { useMemo } from "react";

type usePaginationCustomProps = Parameters<typeof usePagination>[0];

const usePaginationCustom = (props?: usePaginationCustomProps) => {
  const pagination = usePagination(props);
  const { pages } = pagination;

  const renderEllipsis = pages.length > 10;

  const fixedPages = useMemo(
    () =>
      pages.map((x) => ({
        label: x + 1,
        value: x
      })),
    [pages]
  );

  const beforeEllipsisPages = useMemo(() => {
    if (!renderEllipsis) return undefined;
    return fixedPages.slice(0, 4);
  }, [fixedPages, renderEllipsis]);

  const afterEllipsisPages = useMemo(() => {
    if (!renderEllipsis) return undefined;
    return fixedPages.slice(-4);
  }, [fixedPages, renderEllipsis]);

  return {
    ...pagination,
    renderEllipsis,
    pages: fixedPages,
    beforeEllipsisPages,
    afterEllipsisPages
  };
};

export default usePaginationCustom;
