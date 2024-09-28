import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FiltersCardProps } from "@/types/FiltersType/filtersType";

function FiltersCard({ filters, onFilterChange }: FiltersCardProps) {
  return (
    <div className="pt-4 grid gap-2 outline-none">
      {filters.map((filter, index) => (
        <>
          <h2>{filter.title}</h2>
          <Select key={index}>
            <SelectTrigger className="w-[200px] bg-slate-700">
              <SelectValue placeholder={filter.placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  value="1"
                  onClick={() => onFilterChange(filter, '1')}
                >
                  {filter.option1}
                </SelectItem>
                <SelectItem
                  value="2"
                  onClick={() => onFilterChange(filter, '2')}
                >
                  {filter.option2}
                </SelectItem>
                <SelectItem
                  value="3"
                  onClick={() => onFilterChange(filter, '3')}
                >
                  {filter.option3}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </>
      ))}
    </div>
  );
}
export default FiltersCard;
