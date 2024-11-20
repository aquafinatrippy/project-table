import { Row } from "./Row";
import "./style.scss";
import { SkeletonLoader } from "../Skeleton";
import { Country } from "../../types/countries";

type TableProps = {
  data: Country[];
  loading: boolean;
};

const NoResults = () => (
  <div className="noSearchResults" data-testid="no-results-text">
    <p>No search results</p>
  </div>
);

const LoadingSkeletons = () => (
  <>
    {[...Array(10)].map((_, i) => (
      <SkeletonLoader key={i} />
    ))}
  </>
);

const TableContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="table-container" data-testid="table-container">
    <div className="table-header">
      <Row name="Name" code="Code" />
    </div>
    <div className="table" data-testid="table-content">
      {children}
    </div>
  </div>
);

export const Table = ({ data, loading }: TableProps) => {
  if (loading) {
    return (
      <TableContainer>
        <LoadingSkeletons />
      </TableContainer>
    );
  }

  if (!data?.length) {
    return (
      <TableContainer>
        <NoResults />
      </TableContainer>
    );
  }

  return (
    <TableContainer>
      {data.map(({ code, name }) => (
        <Row key={code} name={name} code={code} />
      ))}
    </TableContainer>
  );
};
