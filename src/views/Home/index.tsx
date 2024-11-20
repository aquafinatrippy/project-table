import { useDispatch, useSelector } from "react-redux";
import { FilterBar } from "../../components/Filter-bar";
import { Switch } from "../../components/Switch";
import { Table } from "../../components/Table";
import "./style.scss";
import { RootState } from "../../store/store";
import { toggleSwitch } from "../../store/UI/uiSlice";
import { useQuery } from "@apollo/client";
import { GetCountriesDocument } from "../../gql/graphql";
import { useFilters } from "../../hooks/useFilters";

export const Home = () => {
  const dispatch = useDispatch();
  const isDarkModeOn = useSelector((state: RootState) => state.ui.darkMode);
  const { filters } = useFilters();
  const { data, loading } = useQuery(GetCountriesDocument, {
    variables: Object.keys(filters).length
      ? { code: { eq: filters.code?.toUpperCase() } }
      : {},
  });

  return (
    <div className="home-container">
      <div className="theme-switch">
        <Switch
          offIcon="wb_sunny"
          onIcon="brightness_3"
          isOn={isDarkModeOn}
          handleToggle={() => dispatch(toggleSwitch())}
        />
      </div>
      <div className="content">
        <FilterBar />
        <Table data={data?.countries || []} loading={loading} />
      </div>
    </div>
  );
};
