import { useReactiveVar } from "@apollo/client";
import { makeVar } from "@apollo/client";

type FilterType = {
  code?: string;
};

const filterVar = makeVar({});

export const useFilters = () => {
  const filters: FilterType = useReactiveVar(filterVar);
  const setFilters = (newFilters: FilterType) => {
    if (!newFilters.code) filterVar({});
    else filterVar({ ...filters, ...newFilters });
  };

  return { filters, setFilters };
};
