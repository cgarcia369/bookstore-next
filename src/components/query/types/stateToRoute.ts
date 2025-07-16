export type StateToRouteRefineListProp = {
  "booksCategories.category.name"?: Array<string>;
  "authorsBooks.author.name"?: Array<string>;
};
export type StateToRouteRangeProp = {
  price: string;
};
export type StateToRouteRatingProp = {
  avgRating: number;
};

export type StateToRouteProp = {
  books_index: {
    query?: string;
    refinementList?: StateToRouteRefineListProp;
    range?: StateToRouteRangeProp;
    ratingMenu?: StateToRouteRatingProp;
  };
};
export type RouteState = {
  q?: string;
  category?: string | undefined;
  authors?: string | undefined;
  price?: string;
  rating?: string;
};
