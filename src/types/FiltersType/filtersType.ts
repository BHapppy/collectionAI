export interface FilterProps {
  title: string;
  placeholder: string;
  option1: string;
  option2: string;
  option3: string;
}

export interface FiltersCardProps {
  filters: FilterProps[];
  onFilterChange: (filter: FilterProps, value: string) => void;
}
