import { useEffect, useState } from "react"
import SnakeClass from "./snakeClass"
import InstructionsPopup from "./InstructionsPopup";


const Snake = ()=>{
    const [grid, setGrid] = useState(new Array(10).fill(<div className="empty-square"/>).map(row => new Array(10).fill(<div className="empty-square"/>)))
    const snakeObj = new SnakeClass(0)
    const [gameOver,setGameOver] = useState(false)
    const [score, setScore] = useState(snakeObj.body.length)
    let direction = ''
    let food = {x: Math.floor(Math.random()*9), y: Math.floor(Math.random()*9)}


    function updateGrid(){
        setGrid((grid)=>{
            grid = new Array(10).fill(<div className="empty-square"/>).map(row => new Array(10).fill(<div className="empty-square"/>))
            grid[food.x].splice(food.y,1, <div className="food"/>)
            for(let i = 0; i < snakeObj.body.length; i++){
                grid[snakeObj.body[i].x].splice(snakeObj.body[i].y,1,<div className="snake-body"/>)
            }
            return grid
        })
    }

    function generateFood(){
        if(!snakeObj.body.some((segment)=>segment.x === food.x && segment.y === food.y)){
            return food
        }
        food = {x: Math.floor(Math.random()*9), y: Math.floor(Math.random()*9)}
        generateFood()
    }

    let lastRenderTime = 0
    const snakeSpeed = 8
    const oppositeDirections = {'ArrowDown' : 'ArrowUp', 'ArrowUp': 'ArrowDown', 'ArrowRight': 'ArrowLeft', 'ArrowLeft': 'ArrowRight'}
    const validDirections = ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight']


    function main(currentTime) {

        
        if(snakeObj.body[0].y<=9 && snakeObj.body[0].y>=0 && snakeObj.body[0].x <= 9 && snakeObj.body[0].x >=0 && !snakeObj.body.slice(1).some((segment)=> segment.x === snakeObj.body[0].x && segment.y === snakeObj.body[0].y)){
            window.requestAnimationFrame(main)
        }

        const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
        if (secondsSinceLastRender < 1 / snakeSpeed) return
        
        setScore(snakeObj.body.length)
        window.addEventListener('keydown', (e)=>{
            e.preventDefault()
            if(e.key !== oppositeDirections[snakeObj.direction] && validDirections.includes(e.key)){
                direction = e.key
            }
        })

        if(snakeObj.body[0].x === food.x && snakeObj.body[0].y === food.y){
            generateFood()
            snakeObj.grow()
        }
        
        snakeObj.move(direction)
        if(snakeObj.body[0].y<=9 && snakeObj.body[0].y>=0 && snakeObj.body[0].x <= 9 && snakeObj.body[0].x >=0 && !snakeObj.body.slice(1).some((segment)=> segment.x === snakeObj.body[0].x && segment.y === snakeObj.body[0].y)){
            updateGrid()
        }
        else{
            setGameOver(true)
        }
        lastRenderTime = currentTime

      }


    function startGame(){
        setGameOver(false)
        setGrid((grid)=>{
            grid = new Array(10).fill(<div className="empty-square"/>).map(row => new Array(10).fill(<div className="empty-square"/>))
            grid[snakeObj.body[0].x].splice(snakeObj.body[0].y,1,<div className="snake-body"/>)
            return grid
        })
        window.requestAnimationFrame(main)
    }
        
    return <>{gameOver && <h1 className="game-over">Game Over!</h1>}<h2 className="score">{String(score).padStart(3, '0')}</h2><div className="grid">{grid.map((row, RowPos)=>{
        return <div key={RowPos} className="row">{row.map((cell, cellPos)=>{
            return(<h1 key = {cellPos} className="empty-cell">{cell}</h1>)
        })}</div>
    })}</div><div className="start-btn"><button onClick = {startGame}>Start Game</button><InstructionsPopup/></div></>

}

export default Snake