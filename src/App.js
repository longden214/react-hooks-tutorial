import './App.css';

import { useState } from "react";
import Content from './Content';

function App() {
  const [btnToggle,setBtnToggle] = useState(false);

  return (
    <div className="App">
      <button type="button" onClick={() => (setBtnToggle(!btnToggle))}>Toggle</button>
      {btnToggle && <Content/>}
      
    </div>
  );
}

export default App;
