import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"

function App() {
  const [ emotion, setEmotion ] = useState("Happy")
  const [ secondEmotion, setSecondEmotion ] = useState("Tired")
  useEffect(
    () => {
      console.log(`Im feeling ${emotion}`)
    }, 
    [emotion]
  )

  useEffect(
    () => {
      console.log(`My secondary feeling is ${secondEmotion}`)
    }, 
    [secondEmotion]
  )

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>    
      <button onClick={() => setEmotion("Sad")}>
        Sad
      </button>
      <button onClick={() => setEmotion("Excited")}>
        Excited
      </button>
      <h2>Secondary emotion is {secondEmotion}</h2>
      <button onClick={() => setSecondEmotion("Grateful")}>
        Grateful
      </button>
    </div>
  );
}

export default App;
