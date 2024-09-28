'use client'

import React, { useState, useEffect } from "react";
import ExerciseCard from "./ExerciseCard/ExerciseCard";
import { useQuery } from "@tanstack/react-query";
import { fetchExercises, IExercise } from "@/app/api/getExercises/BD(test)";
import { Pagination } from "@/components/ui/pagination";
import { FilterProps } from "@/types/FiltersType/filtersType";
import { create } from "zustand";

const useExercisesStore = create((set) => ({
  exercises: [],
  selectedFilters: [],
  setSelectedFilters: (filters: FilterProps[]) =>
    set({ selectedFilters: filters }),
  setExercises: (exercises: IExercise[]) => set({ exercises }),
}));

const Exercises = () => {
  const { exercises, selectedFilters, setExercises } = useExercisesStore() as {
    exercises: IExercise[];
    selectedFilters: FilterProps[];
    setExercises: (exercises: IExercise[]) => void;
  };
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 3;

  const {
    data: allExercises,
  } = useQuery({
    queryKey: ["allExercises"],
    queryFn: fetchExercises,
  });

  useEffect(() => {
    if (allExercises) {
      setExercises(allExercises);
    }
  }, [allExercises, setExercises]);

  const filteredExercises = exercises.filter((exercise) => {
    return selectedFilters.every((filter: any) => {
      switch (filter.title) {
        case "Difficulty":
          return (
            exercise.difficulty === filter.option1 ||
            exercise.difficulty === filter.option2 ||
            exercise.difficulty === filter.option3
          );
        case "Type":
          return (
            exercise.type === filter.option1 ||
            exercise.type === filter.option2 ||
            exercise.type === filter.option3
          );
        case "Technology":
          return (
            exercise.technology === filter.option1 ||
            exercise.technology === filter.option2 ||
            exercise.technology === filter.option3
          );
        case "Resolved":
          return true;
        default:
          return true;
      }
    });
  });

  const totalPages = Math.ceil(filteredExercises.length / exercisesPerPage);
  const displayedExercises = filteredExercises.slice(
    (currentPage - 1) * exercisesPerPage,
    currentPage * exercisesPerPage,
  );

  const handlePageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPage = parseInt(e.target.value, 10);
    setCurrentPage(newPage);
  };

  return (
    <div>
      {displayedExercises.map((exercise: IExercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
      {totalPages > 1 && (
        <Pagination
          onChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Exercises;
