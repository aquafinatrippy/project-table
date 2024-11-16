import "./index.scss";
import { FilterBar } from "./components/Filter-bar";
import { Table } from "./components/Table";

function App() {
  return (
    <div className="content">
      <FilterBar />
      <Table />
    </div>
  );
}

export default App;
