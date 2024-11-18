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
          variables: { code: { eq: filters.code?.toUpperCase() } },
        }
      : {}
  );

  return (
    <div className="tableContainer" data-testid="table-container">
      <TableHeader />
      <div className="table" data-testid="table-content">
        {!data?.countries.length && !loading ? (
          <div className="noSearchResults" data-testid="no-results-text">
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
