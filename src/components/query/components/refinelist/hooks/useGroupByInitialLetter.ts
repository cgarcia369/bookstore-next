import { useMemo } from "react";
import { RefinementListItem } from "instantsearch.js/es/connectors/refinement-list/connectRefinementList";
import removeAccents from "remove-accents";
type useGroupByInitialLetterProps = {
  items: RefinementListItem[];
};

const useGroupByInitialLetter = ({ items }: useGroupByInitialLetterProps) => {
  const itemsAsObj = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        const firstLetter = removeAccents(item.label.slice(0, 1));
        acc[firstLetter] = acc[firstLetter] || [];
        acc[firstLetter].push(item);
        return acc;
      },
      {} as Record<string, RefinementListItem[]>
    );
  }, [items]);
  const itemsAsArray = useMemo(() => {
    return Object.entries(itemsAsObj)
      .map(([key, value]) => ({
        key: key,
        value: value
      }))
      .slice()
      .sort((a, b) => a.key.localeCompare(b.key));
  }, [itemsAsObj]);
  return {
    itemsAsObj,
    itemsAsArray
  };
};

export default useGroupByInitialLetter;
