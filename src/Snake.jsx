import { useEffect, useState } from "react"
import SnakeClass from "./snakeClass"

const Snake = ({setGrid})=>{
    const [snakeObj, setSnakeObj] = useState(new SnakeClass(0))
    const [currentCount, setCurrentCount] = useState(0)
    const [direction, setDirection] = useState('ArrowDown')
    const [food, setFood] = useState([Math.floor(Math.random()*9), Math.floor(Math.random()*9)])
    const[message, setMessage] = useState('')
    const incrementCount = ()=>{
        if(snakeObj.head[0][0] >= 0 && snakeObj.head[0][1] >= 0 && snakeObj.head[0][0] < 9 && snakeObj.head[0][1] < 9){
            setTimeout(()=>{setCurrentCount((count)=>count+1)},1000)
        }
        else{
            setMessage('Game Over!')
        }
    }


    window.addEventListener('keydown', (event)=>{
        setDirection(event.key)
    })

    useEffect(()=>{
            incrementCount()

            if(snakeObj.head[0][0] === food[0] && snakeObj.head[0][1] === food[1]){
                setGrid(new Array(10).fill(0).map(row => new Array(10).fill(0)))
                console.log(snakeObj.head[0][0], snakeObj.head[0][1])
                setGrid((grid)=>{
                grid[snakeObj.head[0][0]].splice(snakeObj.head[0][1], snakeObj.length, '*_*')
                snakeObj.grow()
                snakeObj.move(direction)
                return grid
                })
                setFood([Math.floor(Math.random()*9), Math.floor(Math.random()*9)])
            }
            else{
                setGrid(new Array(10).fill(0).map(row => new Array(10).fill(0)))
                console.log(snakeObj.head[0][0], snakeObj.head[0][1])
                setGrid((grid)=>{
                grid[snakeObj.head[0][0]].splice(snakeObj.head[0][1], snakeObj.length, '*_*')
                grid[food[0]].splice(food[1],1,'[]')
                snakeObj.move(direction)
                return grid
                })
            }

        console.log(snakeObj.head[0][0], snakeObj.head[0][1])
        
    },[currentCount])
    return <><h1>Snake Game</h1><h1>{message}</h1></>
}

export default Snake