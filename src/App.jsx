import React, { createContext, useState } from "react";
import "./App.css";
import TopMenu from "./components/TopMenu";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import { Outlet } from "react-router-dom";

export const ThemeContext = createContext();

function App() {
  const [selectedTab, setSelectedTab] = useState("About");
  const [darkMode, setDarkMode] = useState(false)
  return (
    <ThemeContext.Provider value={darkMode}>
    <div className={`App  ${darkMode && "darkMode"} `} >
      <TopMenu setDarkMode={setDarkMode} darkMode={darkMode}/>
      <div className="main-section">
        <LeftSideBar darkMode={darkMode}/>
        <Outlet />
        <RightSideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
