import React from 'react'
import './App.css';
import { useRef } from "react";

function App() {
  const colorTitle = useRef()
  const colorCode = useRef()

  const submit = (e) => {
    const title = colorTitle.current.value 
    const code = colorCode.current.value 
    alert(`${title}, ${code}`)
    colorTitle.current.value = ''
    colorCode.current.value = ''
  }
  return (
    <div className="App">
      <form onSubmit={submit}>
        <input 
          type="text" 
          placeholder="Color title..."
          ref={colorTitle}>
        </input>

        <input 
          type="color"
          ref={colorCode}
        >
        </input>
        <button>Add</button>
      </form>

    </div>
  );
}

export default App;
