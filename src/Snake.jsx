import { useEffect, useState } from "react"
import SnakeClass from "./snakeClass"

const Snake = ()=>{
    const [grid, setGrid] = useState(new Array(10).fill(<div className="empty-square"/>).map(row => new Array(10).fill(<div className="empty-square"/>)))
    const snakeObj = new SnakeClass(0)
    const [gameOver,setGameOver] = useState(false)
    let direction = 'ArrowDown'
    let food = {x: Math.floor(Math.random()*9), y: Math.floor(Math.random()*9)}


    function updateGrid(){
        setGrid((grid)=>{
            grid = new Array(10).fill(<div className="empty-square"/>).map(row => new Array(10).fill(<div className="empty-square"/>))
            for(let i = 0; i < snakeObj.body.length; i++){
                grid[snakeObj.body[i].x].splice(snakeObj.body[i].y,1,<div className="snake-body"/>)
            }
            grid[food.x].splice(food.y,1, <div className="food"/>)
            return grid
        })
    }

    let lastRenderTime = 0
    const snakeSpeed = 8


    function main(currentTime) {

        window.addEventListener('keydown', (e)=>{
            direction = e.key
        })
        
        if(snakeObj.body[0].y<=9 && snakeObj.body[0].y>=0 && snakeObj.body[0].x <= 9 && snakeObj.body[0].x >=0){
        window.requestAnimationFrame(main)
        }

        const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
        if (secondsSinceLastRender < 1 / snakeSpeed) return
        
        snakeObj.move(direction)
        if(snakeObj.body[0].x === food.x && snakeObj.body[0].y === food.y){
            food = {x: Math.floor(Math.random()*9), y: Math.floor(Math.random()*9)} 
            snakeObj.grow()
        }

        if(snakeObj.body[0].y<=9 && snakeObj.body[0].y>=0 && snakeObj.body[0].x <= 9 && snakeObj.body[0].x >=0){
            updateGrid()
        }
        else{
            setGameOver(true)
        }
        lastRenderTime = currentTime

      }


      useEffect(()=>{
        setGrid((grid)=>{
            grid = new Array(10).fill(<div className="empty-square"/>).map(row => new Array(10).fill(<div className="empty-square"/>))
            grid[snakeObj.body[0].x].splice(snakeObj.body[0].y,1,<div className="snake-body"/>)
            return grid
        })
        window.requestAnimationFrame(main)
      },[])

        
    return <>{gameOver ? <h1>Game Over</h1> : null}{grid.map((row, RowPos)=>{
        return <div key={RowPos} className="row">{row.map((cell, cellPos)=>{
            return(<h1 key = {cellPos} className="empty-cell">{cell}</h1>)
        })}</div>
    })}</>

}

export default Snake