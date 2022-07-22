import React from 'react'
import './App.css';
import { useReducer } from "react";

function App() {
  const [checked, setCheckbox] = useReducer(
    (checked) => !checked,
    true, () => true 
  );

  return (
    <div className="App">
      <input 
        type="checkbox" 
        value={checked} 
        onClick={setCheckbox}
      />
      <label>{ checked ? "Checked":"Unchecked"}</label>
    </div>
  );
}

export default App;
