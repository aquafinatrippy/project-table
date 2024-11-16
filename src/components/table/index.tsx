import { useQuery } from "@apollo/client";
import { GetCountriesDocument } from "../../gql/graphql";
import { Loading } from "../Loading";
import { Row } from "./Row";
import "./style.scss";
import { useFilters } from "../../hooks/useFilters";

export const Table = () => {
  const { filters } = useFilters();
  console.log(filters);
  const { data, loading } = useQuery(
    GetCountriesDocument,
    Object.keys(filters).length
      ? {
          variables: { code: { eq: filters.code } },
        }
      : {}
  );

  if (loading) return <Loading />;

  return (
    <div className="table">
      {data?.countries.map(({ code, name }) => (
        <Row key={code} name={name} code={code} />
      ))}
    </div>
  );
};
