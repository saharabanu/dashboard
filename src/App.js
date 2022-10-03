import Dashboard from "./components/Dashboard/Dashboard/Dashboard";

import { createContext, useContext, useState } from 'react';
import ReactSwitch from "react-switch";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "light"));
  };
  return (
   
     <ThemeContext.Provider value={{ theme, setTheme }}>
     <div id={theme}>
     <Dashboard/>
     <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
     </div>
     </ThemeContext.Provider>
     
    
  );
}

export default App;
