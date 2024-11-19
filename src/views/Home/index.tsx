import { useDispatch, useSelector } from "react-redux";
import { FilterBar } from "../../components/Filter-bar";
import { Switch } from "../../components/switch";
import { Table } from "../../components/Table";
import "./style.scss";
import { RootState } from "../../store/store";
import { toggleSwitch } from "../../store/UI/uiSlice";
import { useEffect } from "react";

export const Home = () => {
  const isDarkModeOn = useSelector((state: RootState) => state.ui.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDarkModeOn) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isDarkModeOn]);

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
        <Table />
      </div>
    </div>
  );
};
