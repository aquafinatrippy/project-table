import { ChangeEvent } from "react"; // Correct type import
import { useFilters } from "../../hooks/useFilters";
import { Input } from "../Input";
import "./style.scss";

export const FilterBar = () => {
  const { filters, setFilters } = useFilters();

  const updateSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const code: string = e.target.value.toUpperCase();
    setFilters({ code });
  };

  return (
    <div className="filterBar">
      <h3>Filter</h3>
      <div>
        <Input
          onChange={updateSearch}
          label="Country code"
          value={filters?.code || ""}
        />
      </div>
    </div>
  );
};
