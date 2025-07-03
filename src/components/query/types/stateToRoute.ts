export type StateToRouteRefineListProp = {
  "booksCategories.category.name"?: Array<string>;
  "authorsBooks.author.name"?: Array<string>;
};
export type StateToRouteRangeProp = {
  price: string;
};

export type StateToRouteProp = {
  books_index: {
    refinementList?: StateToRouteRefineListProp;
    range?: StateToRouteRangeProp;
  };
};
export type RouteState = {
  q?: string;
  category?: string | undefined;
  authors?: string | undefined;
  price?: string;
};
