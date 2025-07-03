"use client";
import React from "react";
import { useRange } from "react-instantsearch-core";
import { Slider } from "@/components/ui/slider";
import PanelItemWrapper from "../panel/components/PanelItemWrapper";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/components/form/form";
import { Input } from "@/components/ui/components/input/input";
import { isBetween } from "@/utils/number/isBetween";

type RangeProps = {
  attribute: string;
  title: string;
};

const Range = ({ attribute, title }: RangeProps) => {
  const { range, refine, start, canRefine } = useRange({
    attribute
  });
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

  if (!min || !max) return null;

  return (
    <PanelItemWrapper title={title}>
      <div className="flex flex-row justify-between text-sm">
        <p>Min: ${watchMin}</p>
        <p>Max: ${watchMax}</p>
      </div>
      <Slider
        disabled={!canRefine}
        min={min}
        max={max}
        value={[watchMin, watchMax]}
        onValueChange={([start, end]) => {
          form.setValue("min", start);
          form.setValue("max", end);
        }}
        onValueCommit={([start, end]) => {
          refine([start, end]);
        }}
      />
      <form className="flex flex-row gap-x-2">
        <Form {...form}>
          <FormField
            control={form.control}
            name="min"
            render={() => {
              const register = form.register("min");
              return (
                <FormItem>
                  <FormControl>
                    <Input
                      className="grow"
                      placeholder={"Min"}
                      {...register}
                      onChange={(event) => {
                        if (!event.target.value || !isBetween(Number(event.target.value), min, max)) return;
                        refine([Number(event.target.value), watchMax]);
                        register.onChange(event);
                      }}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <span className="my-auto">Hasta</span>
          <FormField
            control={form.control}
            name="max"
            render={() => {
              const register = form.register("max");
              return (
                <FormItem>
                  <FormControl>
                    <Input
                      className="grow"
                      placeholder={"Max"}
                      {...register}
                      onChange={(event) => {
                        if (!event.target.value || !isBetween(Number(event.target.value), min, max)) return;
                        refine([watchMin, Number(event.target.value)]);
                        register.onChange(event);
                      }}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />
        </Form>
      </form>
    </PanelItemWrapper>
  );
};

export default Range;
