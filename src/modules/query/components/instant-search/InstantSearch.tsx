"use client";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import { ReactNode } from "react";
import { algoliaClient } from "@/lib/algoliaClient";
import { routeToState, stateToRoute } from "@/modules/query/utils/stateToRoute";
import { RouteState, StateToRouteProp } from "@/modules/query/types/stateToRoute";
import { UiState } from "instantsearch.js";
import { algoliaMainIndex } from "@/constants/algoliaMainIndex";

const InstantSearch = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <InstantSearchNext<UiState, RouteState>
        searchClient={algoliaClient}
        indexName={algoliaMainIndex}
        future={{
          preserveSharedStateOnUnmount: true
        }}
        routing={{
          stateMapping: {
            routeToState: (routeState): UiState => {
              return routeToState(routeState);
            },
            stateToRoute: (routeState) => {
              return stateToRoute(routeState as StateToRouteProp);
            }
          }
        }}
      >
        {children}
      </InstantSearchNext>
    </>
  );
};

export default InstantSearch;
