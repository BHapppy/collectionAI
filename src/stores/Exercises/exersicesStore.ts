import { create } from "zustand";
interface FiltersState {
  difficulty: string;
  type: string;
  technology: string;
  appliedFilters: boolean; 
}
const useFiltersStore = create<FiltersState>((set) => ({
  difficulty: "",
  type: "",
  technology: "",
  appliedFilters: false, // Инициализируем appliedFilters как false
  setFilters: (filters: Partial<FiltersState>) =>
    set((state) => ({ ...state, ...filters, appliedFilters: true })), // Обновляем appliedFilters при изменении фильтров
}));
