import { useSelector } from "react-redux";
import "./index.scss";
import { Home } from "./views/Home";
import { RootState } from "./store/store";
import { useEffect } from "react";

function App() {
  const isDarkModeOn = useSelector((state: RootState) => state.ui.darkMode);
  useEffect(() => {
    if (!isDarkModeOn) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [isDarkModeOn]);

  
  return <Home />;
}

export default App;
