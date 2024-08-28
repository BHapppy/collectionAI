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

interface FilterProps {
  title: string
  placeholder: string;
  option1: string;
  option2: string;
  option3: string;
}

interface FiltersCardProps {
  filters: FilterProps[];
}

function FiltersCard({ filters }: FiltersCardProps) {
  return (
    <div className="pt-5 grid gap-2">
      {filters.map((filter, index) => (
        <>
          <h2>{filter.title}</h2>
          <Select key={index}>
            <SelectTrigger className="w-[200px] bg-slate-700">
              <SelectValue placeholder={filter.placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">{filter.option1}</SelectItem>
                <SelectItem value="2">{filter.option2}</SelectItem>
                <SelectItem value="3">{filter.option3}</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </>
      ))}
    </div>
  );
}
export default FiltersCard
