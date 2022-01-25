class Player {

    constructor(){
        // this.velocity = 0
        this.width = 100;
        this.height = 110;
        this.x = 200;
        this.y = 900 - this.height;
        this.laser = image
        this.laserX = 250;
        this.laserY = 80;


    }

    draw() {
        if(this.y >= 800 - this.height){
            this.y = 800 - this.height;
        } // theo also for top but not necessary
        if (this.x <= 0){
            this.x = 0;
        }
        if (this.x >= 400){
            this.x = 400;
        }
        image(game.playerImage, this.x, this.y, this.width, this.height)

        if (keyIsDown(39)){
            this.x += 5;
        }
        if (keyIsDown(37)){
            this.x -= 5;
        }
        if (keyIsDown(38)){
            this.y -= 5;
        }
        if (keyIsDown(40)){
            this.y += 5;
        }
        // keyPressed() 
        // if (keyCode === 32){
        // image(game.shotImage, this.laserX, this.laserY, 15, 40)
        // } 
        // this.laserY -= 5
 

        // function keyPressed(){ 
        //     if (keyCode === 32){
        //     image(game.shotImage, 100,100,15,40 )
        //  }
        // }
    }

    // shoot -> when press key then shoots straight
    // when player moves blast starts where player is


}