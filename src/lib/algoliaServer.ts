import { algoliasearch } from "algoliasearch";

export const algoliaServer = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP!,
  process.env.ALGOLIA_SEARCH_SERVER_SECRET!
);
