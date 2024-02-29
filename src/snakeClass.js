class SnakeClass {
    constructor(headPos){
        this.headX = 0
        this.headY = 0
    }
    move(direction){
        if(direction === 'ArrowRight'){
            return this.headX += 1
        }
        else if(direction === 'ArrowLeft'){
            return this.headX-= 1
        }
        else if(direction === 'ArrowDown'){
            return this.headY += 1
        }
        else if(direction === 'ArrowUp'){
            return this.headY -= 1
        }
    }
}

export default SnakeClass