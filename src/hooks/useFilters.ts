import { useReactiveVar } from "@apollo/client";
import { makeVar } from "@apollo/client";
import { CountryFilterInput } from "../gql/graphql";

const filterVar = makeVar({});

export const useFilters = () => {
  const filters = useReactiveVar(filterVar);
  const setFilters = (newFilters: CountryFilterInput) => {
    filterVar({ ...filters, ...newFilters });
  };

  return { filters, setFilters };
};
