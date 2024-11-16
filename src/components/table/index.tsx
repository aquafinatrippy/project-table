import { useQuery } from "@apollo/client";
import { GetCountriesDocument } from "../../gql/graphql";
import { Loading } from "../Loading";
import { Row } from "./Row";
import "./style.scss";

export const Table = () => {
  const { data, loading } = useQuery(GetCountriesDocument);

  if (loading) return <Loading />;
  return (
    <div className="table">
      {data?.countries.map(({ code, name }) => (
        <Row key={code} name={name} code={code} />
      ))}
    </div>
  );
};
