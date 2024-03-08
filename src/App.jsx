import { useState, useEffect } from 'react'
import './App.css'
import Snake from './Snake'

import Grid from './Grid'

function App() {

  const [grid, setGrid] = useState(new Array(10).fill(0).map(row => new Array(10).fill(0)))
  
  return (
    <>
      <Snake setGrid = {setGrid} />
      <Grid grid = {grid} setGrid={setGrid}/>
      <button> Start Game</button>
    </>
  )
}

export default App
