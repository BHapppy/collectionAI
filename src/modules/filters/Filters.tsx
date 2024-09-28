'use client'
import React, { useState } from "react";
import FiltersCard from "./filters_card/FiltersCard";
import styles from "./filters.module.scss";
import { FilterProps, FiltersCardProps } from "@/types/FiltersType/filtersType";
import axios from "axios";
const Filters: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<FilterProps[]>([]);

  const filters = [
    {
      title: "Filter 1",
      placeholder: "Select Difficulty",
      option1: "Junior",
      option2: "Middle",
      option3: "Senior",
    },
    {
      title: "Filter 1",
      placeholder: "Select Type",
      option1: "Task",
      option2: "Question",
      option3: "Test",
    },
    {
      title: "Filter 1",
      placeholder: "Select Technology",
      option1: "JS",
      option2: "CSS",
      option3: "HTML",
    },
    {
      title: "Filter 1",
      placeholder: "Select Resolved",
      option1: "Making it work",
      option2: "Resolved",
      option3: "Unresolved",
    },
  ];

  const handleFilterChange = (filter: FilterProps, value: string) => {
    setSelectedFilters((prevFilters) => {
      if (value) {
        return [...prevFilters, filter];
      } else {
        return prevFilters.filter((e) => e !== filter);
      }
    });
  };

  const handleApplyFilters = () => {
    axios.post("api/getExercises", { filters: selectedFilters });
  };

  return (
    <div className={styles.form}>
      <h2>Filters</h2>
      <FiltersCard filters={filters} onFilterChange={handleFilterChange} />
      <div className={styles.nameForm}></div>
      <button
        className={styles.button}
        onClick={() => {
          handleApplyFilters();
        }}
      >
        Apply
      </button>
    </div>
  );
};

export default Filters;
