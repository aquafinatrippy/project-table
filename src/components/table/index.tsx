import { gql, useQuery } from "@apollo/client";

const countries = gql`
  query {
    countries {
      code
      name
    }
  }
`;

export const Table = () => {
  const { data, loading } = useQuery(countries);
  
  console.log(data, loading);
  return <div>table</div>;
};
