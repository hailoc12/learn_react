import React from 'react'
import './App.css';
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/docs'>Documentation</Link>
        <Link to='/about'>About</Link>¸˛
        <Link to='/about/history'>History</Link>
      </nav>
    
      <h1>About</h1>
    </div>
  )
}

function History() {
  return (
  <div>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/docs'>Documentation</Link>
      <Link to='/about'>About</Link>
    </nav>
    <h1>History</h1>
  </div>
  )
}

function Documentation() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/docs'>Documentation</Link>
        <Link to='/about'>About</Link>
      </nav>
      <h1>Documentation</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/docs'>Documentation</Link>
        <Link to='/about'>About</Link>
      </nav>
      <h1>Homepage</h1>
    </div>
  )
}

export { App, Documentation, About, History };
