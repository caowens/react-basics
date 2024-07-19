import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Greeting() {
  return (
    <h2>Welcome to React!</h2>
  );
}

function App() {

  return (
    <div>
      <h1>Hello, World!</h1>
      <Greeting />
    </div>
  )
}

export default App
