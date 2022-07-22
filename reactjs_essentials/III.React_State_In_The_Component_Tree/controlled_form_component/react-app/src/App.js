import React from 'react'
import './App.css';
import { useState } from "react";

function App() {
  const [ title, updateTitle ] = useState("black")
  const [color, updateColor] = useState("#000000")
  const submit = (e) => {
    alert(`${title}, ${color}`)
  }
  return (/* */
    <div className="App">
      <form onSubmit={submit}>
        <input 
          type="text" 
          placeholder="Color title..."
          value={title}
          onChange={(event)=> updateTitle(event.target.value)}
        >
        </input>

        <input 
          type="color"
          value = {color}
          onChange = {(event)=> updateColor(event.target.value)}
        >
        </input>
        <button>Add</button>
      </form>

    </div>
  );
}

export default App;
