"use client";
import React from "react";
import { Slider } from "@/components/ui/slider/slider";
import PanelItemWrapper from "../panel/components/PanelItemWrapper";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form/form";
import { Input } from "@/components/ui/input/input";
import { isBetween } from "@/utils/number/isBetween";
import usePersonalizedRange, { usePersonalizedRangeProps } from "./hooks/usePersonalizedRange";

type RangeProps = {
  title: string;
} & Pick<usePersonalizedRangeProps, "attribute">;

const Range = ({ attribute, title }: RangeProps) => {
  const {
    watchMin,
    watchMax,
    form,
    range: { min, max },
    canRefine,
    refine
  } = usePersonalizedRange({ attribute });

  if (!min || !max) return null;

  return (
    <PanelItemWrapper title={title}>
      <div className="flex flex-row justify-between text-sm">
        <p>Min: {watchMin}</p>
        <p>Max: {watchMax}</p>
      </div>
      <Slider
        data-testid="slider"
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
                      disabled={!canRefine}
                      onChange={(event) => {
                        if (!event.target.value || !isBetween(Number(event.target.value), min, max)) return;
                        refine([Number(event.target.value), Number(watchMax)]);
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
                      disabled={!canRefine}
                      onChange={(event) => {
                        if (!event.target.value || !isBetween(Number(event.target.value), min, max)) return;
                        refine([Number(watchMin), Number(event.target.value)]);
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
