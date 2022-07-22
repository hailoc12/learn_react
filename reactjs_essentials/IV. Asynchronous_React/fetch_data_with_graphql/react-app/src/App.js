import React from 'react'
import './App.css';
import { useState, useEffect } from "react";

function Lift( { name, elevationGain, status}) {
  return (
    <div>
      <h1>{ name }</h1>
      <p>{ elevationGain } {status}</p>
      
    </div>
  )
}

function App() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

    const query = `
    query {
      allLifts {
        name
        elevationGain
        status
      }
    }
    `;

  const opts = {
    method: "Post", 
    headers: { "Content-Type": "application/json"}, 
    body: JSON.stringify({ query })
  }

  useEffect(
    () => {
      console.log(opts)
      fetch(
        "https://snowtooth.moonhighway.com/", opts
      )
      .then((response) => response.json())
      .then(setData)
      .then(
        () => setLoading(false)
      )
      .catch((error) => {
        setError(error); 
        console.log(error);
      }
      );
    }, 
    []
  );

  if (loading) {return <h1>Loading...</h1>}
  if (error){
    return <pre>{JSON.stringify(error)}</pre>
  }

  if(data)
  {
    return (
      <div>
        {data.data.allLifts.map(
          lift => (
            <Lift name={lift.name} elevationGain={lift.elevationGain} status={lift.status} />
          )
        )}
      </div>
    )
  }

  return (
    <h1>Data</h1>
  )
}

export default App;
