import {useContext, useState, createContext} from 'react';
import './App.css';
import Context from './Context'

// Các bước tạo Context:
// B1. Create context
export const themeContext = createContext();

function App() {
  const [theme,setTheme] = useState("light");

  const handleThemeChange = () => {
    setTheme(theme === "light"?"dark":"light")
  }

  return (
    // B2. Provider
    <themeContext.Provider value={theme}>
       <div >
          <button
          onClick={handleThemeChange} 
          >Toggle Theme</button>
          <Context/>
       </div>
    </themeContext.Provider>
   
  );
}

export default App;
