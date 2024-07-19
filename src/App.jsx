import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>
}

function App() {

  return (
    <div>
      <h1>Hello World!</h1>
      <Greeting name="Alice" />
    </div>
  )
}

export default App
