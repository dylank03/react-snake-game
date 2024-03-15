import { useState, useEffect } from 'react'
import './App.css'
import Snake from './Snake'

function App() {

  return (
    <>
      <h1>Snake Game</h1>
      <Snake/>
      <button> Start Game</button>
    </>
  )
}

export default App
