import { Form, FormControl, FormField, FormItem } from "@/components/ui/components/form/form";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/components/input/input";
import { useDebounce } from "react-use";

type RefineListSearchProps = {
  onSearch: (value: string) => void;
};

const RefineListSearch = ({ onSearch }: RefineListSearchProps) => {
  const form = useForm({
    defaultValues: {
      search: ""
    }
  });

  const search = form.watch("search");

  useDebounce(
    () => {
      onSearch(search);
    },
    500,
    [search]
  );

  return (
    <>
      <form>
        <Form {...form}>
          <FormField
            control={form.control}
            name="search"
            render={() => (
              <FormItem>
                <FormControl>
                  <Input placeholder={"Buscar..."} {...form.register("search")} />
                </FormControl>
              </FormItem>
            )}
          />
        </Form>
      </form>
    </>
  );
};

export default RefineListSearch;
