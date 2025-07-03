"use client";
import { liteClient } from "algoliasearch/lite";

export const algoliaClient = liteClient(
  process.env.NEXT_PUBLIC_ALGOLIA_APP!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_CLIENT_SECRET!
);
