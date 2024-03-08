class SnakeClass {
    constructor(headPos){
        this.head = [[0,0]]
        this.length = 1
    }
    move(direction){
        if(direction === 'ArrowRight'){
            return this.head[0][0] += 1
        }
        else if(direction === 'ArrowLeft'){
            return this.head[0][0] -= 1
        }
        else if(direction === 'ArrowDown'){
            return this.head[0][1] += 1
        }
        else if(direction === 'ArrowUp'){
            return this.head[0][1] -= 1
        }
    }
    grow(){
        return this.head
    }
}

export default SnakeClass