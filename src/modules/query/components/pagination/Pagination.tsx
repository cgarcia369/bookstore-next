"use client";
import {
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  Pagination
} from "@/components/ui/pagination/pagination";
import React from "react";
import usePaginationCustom from "./hooks/usePaginationCustom";
import { clsx } from "clsx";
import PaginationBaseLink from "./components/PaginationBaseLink";

const PaginationSearch = () => {
  const {
    pages,
    renderEllipsis,
    beforeEllipsisPages,
    afterEllipsisPages,
    isLastPage,
    isFirstPage,
    createURL,
    currentRefinement
  } = usePaginationCustom();

  return (
    <>
      <Pagination className="mt-2">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={isFirstPage ? "#" : createURL(currentRefinement - 1)}
              className={clsx(isFirstPage && "pointer-events-none")}
            />
          </PaginationItem>
          {renderEllipsis ? (
            <>
              {beforeEllipsisPages!.map((page) => (
                <PaginationBaseLink
                  isActive={currentRefinement === page.value}
                  key={page.value}
                  href={createURL(page.value)}
                  label={page.label}
                />
              ))}
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              {afterEllipsisPages!.map((page) => (
                <PaginationBaseLink
                  isActive={currentRefinement === page.value}
                  key={page.value}
                  href={createURL(page.value)}
                  label={page.label}
                />
              ))}
            </>
          ) : (
            pages.map((page) => (
              <PaginationBaseLink
                isActive={currentRefinement === page.value}
                key={page.value}
                href={createURL(page.value)}
                label={page.label}
              />
            ))
          )}
          <PaginationItem>
            <PaginationNext
              href={isLastPage ? "#" : createURL(currentRefinement + 1)}
              className={clsx(isLastPage && "pointer-events-none")}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default PaginationSearch;
