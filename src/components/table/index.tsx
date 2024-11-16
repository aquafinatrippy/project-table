import { useQuery } from "@apollo/client";
import { GetCountriesDocument } from "../../gql/graphql";
import { Row } from "./Row";
import "./style.scss";
import { useFilters } from "../../hooks/useFilters";
import { TableHeader } from "./Header";
import { SkeletonLoader } from "../Skeleton";

export const Table = () => {
  const { filters } = useFilters();
  const { data, loading } = useQuery(
    GetCountriesDocument,
    Object.keys(filters).length
      ? {
          variables: { code: { eq: filters.code } },
        }
      : {}
  );

  return (
    <div>
      <TableHeader />
      <div className="table">
        {!data?.countries.length && !loading ? (
          <div className="noSearchResults">
            <p>No search results</p>
          </div>
        ) : (
          <></>
        )}
        {loading
          ? [...Array(10)].map((_, i) => <SkeletonLoader key={i} />)
          : data?.countries.map(({ code, name }) => (
              <Row key={code} name={name} code={code} />
            ))}
      </div>
    </div>
  );
};
