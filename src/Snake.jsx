import { useEffect, useState } from "react"
import SnakeClass from "./snakeClass"

const Snake = ({setGrid})=>{
    const [snakeObj, setSnakeObj] = useState(new SnakeClass(0))
    const [currentCount, setCurrentCount] = useState(0)
    const [direction, setDirection] = useState('ArrowDown')
    const[message, setMessage] = useState('')
    const incrementCount = ()=>{
        if(snakeObj.headX >= 0 && snakeObj.headY >= 0 && snakeObj.headX < 9 && snakeObj.headY < 9){
            setTimeout(()=>{setCurrentCount((count)=>count+1)},1000)
        }
        else{
            setMessage('Game Over!')
        }
    }

    console.log(snakeObj.headX)
    console.log(snakeObj.headY)

    window.addEventListener('keydown', (event)=>{
        setDirection(event.key)
    })


    useEffect(()=>{
        incrementCount()
        
        setGrid((grid)=>{
          const gridCopy =  [...grid]
          console.log(snakeObj.headX)
          gridCopy[snakeObj.headX].splice(snakeObj.headY,1,'*_*')
          return gridCopy
        })

        snakeObj.move(direction)

        
        
    },[currentCount])
    return <><h1>{currentCount}</h1><h1>{message}</h1></>
}

export default Snake