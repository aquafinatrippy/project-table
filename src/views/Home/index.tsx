import { FilterBar } from "../../components/Filter-bar";
import { Table } from "../../components/Table";
import './style.scss'

export const Home = () => {
  return (
    <div className="content">
      <FilterBar />
      <Table />
    </div>
  );
};
