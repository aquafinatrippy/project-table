import { useReactiveVar } from "@apollo/client";
import { makeVar } from "@apollo/client";
import { GetCountriesQueryVariables } from "../gql/graphql";

const filterVar = makeVar({});

export const useFilters = () => {
  const filters: { code?: string } = useReactiveVar(filterVar);
  const setFilters = (newFilters: GetCountriesQueryVariables) => {
    if (!newFilters.code) filterVar({});
    else filterVar({ ...filters, ...newFilters });
  };

  return { filters, setFilters };
};
