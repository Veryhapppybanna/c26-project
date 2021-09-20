class board{
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        };
        
        this.body = Bodies.rectangle(x, y, width, height, options);

        this.width = width;
        this.height = height;
        this.image = loadimage("./assets/board.png")

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.positiion;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
    }
}