import { SortDirections } from "../components/sort/enums/sort.enums";
import { AlgoliaSortItem } from "../components/sort/types/sort.types";

export const SORT_ITEMS: AlgoliaSortItem[] = [
  {
    label: "Mejor valorados",
    defaultDirection: SortDirections.ASC,
    isSelectedByDefault: true,
    algoliaIndex: "books_index_rating_desc",
    route: "best"
  },
  {
    label: "Precio: mayor a menor",
    algoliaIndex: "books_index_price_desc",
    route: "price_desc"
  },
  {
    label: "Precio: menor a mayor",
    algoliaIndex: "books_index_price_asc",
    route: "price_asc"
  },
  {
    label: "Fecha de publicación: nueva a antigua",
    algoliaIndex: "books_index_date_desc",
    route: "published_date_desc"
  },
  {
    label: "Fecha de publicación: antigua a nueva",
    algoliaIndex: "books_index_date_asc",
    route: "published_date_asc"
  }
];
