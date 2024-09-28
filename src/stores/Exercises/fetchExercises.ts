import { create } from "zustand";
import { FilterProps } from "@/types/FiltersType/filtersType";
import { IExercise } from "@/app/api/getExercises/BD(test)";
const useExercisesStore = create((set) => ({
  exercises: [] as IExercise[],
  selectedFilters: [],
  setSelectedFilters: (filters: FilterProps[]) =>
    set({ selectedFilters: filters }),
  setExercises: (exercises: IExercise[]) => set({ exercises }),
}));
