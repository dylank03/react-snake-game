class SnakeClass {
    constructor(headPos){
        this.body = [{x:0, y:0}]
    }
    move(direction){
        if(direction === 'ArrowRight'){
            this.body[0].x += 1
        }
        else if(direction === 'ArrowLeft'){
            return this.body[0].x -= 1
        }
        else if(direction === 'ArrowDown'){
                this.body[0].y += 1
        }
        else if(direction === 'ArrowUp'){
            return this.body[0].y -= 1
        }
        // for(let i = 0; i < this.body.length; i++){
        //     console.logo(this.body[i+1]) = console.log({...this.body[i]})
        // }
    }
    grow(){
        return this.body.push(this.body[this.body.length-1])
    }
}

export default SnakeClass