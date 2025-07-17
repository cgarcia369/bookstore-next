import { useEffect } from "react";
import { useRange } from "react-instantsearch-core";
import { useForm } from "react-hook-form";

export type usePersonalizedRangeProps = {
  attribute: string;
};
const usePersonalizedRange = ({ attribute }: usePersonalizedRangeProps) => {
  const originalRange = useRange({
    attribute
  });
  const { range, start } = originalRange;
  const { min, max } = range;

  const valueMin = !start[0] || start[0] === -Infinity ? min : start[0];
  const valueMax = !start[1] || start[1] === Infinity ? max : start[1];

  const form = useForm({
    defaultValues: {
      min: valueMin!,
      max: valueMax!
    }
  });
  const watchMin = form.watch("min");
  const watchMax = form.watch("max");

  useEffect(() => {
    if (watchMax === 0 && watchMin === 0) {
      form.setValue("min", valueMin!);
      form.setValue("max", valueMax!);
    }
  }, [valueMax, valueMin, watchMax, watchMin]);

  return {
    ...originalRange,
    form,
    watchMax,
    watchMin
  };
};

export default usePersonalizedRange;
