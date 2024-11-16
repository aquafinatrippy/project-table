import { ChangeEvent } from "react"; // Correct type import
import { useFilters } from "../../hooks/useFilters";

export const FilterBar = () => {
  const { filters, setFilters } = useFilters();

  const updateSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters({ code: e.target.value });
  };

  console.log(filters);

  return (
    <div>
      <input
        type="text"
        value={filters?.code}
        onChange={updateSearch}
        placeholder="Search..."
      />
    </div>
  );
};
