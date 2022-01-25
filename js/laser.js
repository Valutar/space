class Laser {
    constructor(image){
        this.image = image
        this.x = 200
        this.y = 700
        this.width = 50
        this.height = 50
    }

    draw(){
        this.y--
        image(this.image, this.x, this.y, this.width, this.height) 
    }
}