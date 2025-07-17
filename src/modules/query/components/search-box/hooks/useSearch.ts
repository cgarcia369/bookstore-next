import { useForm } from "react-hook-form";
import { KeyboardEvent, useMemo } from "react";
import { useSearchBox } from "react-instantsearch-core";
const useSearch = () => {
  const { refine, clear, query } = useSearchBox();
  const form = useForm({
    defaultValues: {
      search: query
    }
  });

  const watchValue = form.watch("search");
  const showClear = useMemo(() => !!watchValue, [watchValue]);

  const handleClearInput = () => {
    form.setValue("search", "");
    clear();
  };

  const handleSubmit = (searchTerm: string) => {
    refine(searchTerm);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    handleSubmit(watchValue);
  };

  return {
    handleClearInput,
    handleSubmit,
    handleKeyDown,
    showClear,
    form
  };
};

export default useSearch;
