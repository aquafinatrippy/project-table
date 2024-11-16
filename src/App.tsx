import "./index.scss";
import { FilterBar } from "./components/filter-bar";
import { Table } from "./components/table";

function App() {
  return (
    <div className="content">
      <FilterBar />
      <Table />
    </div>
  );
}

export default App;
