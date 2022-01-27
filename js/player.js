class Player {

    constructor(){
        // this.velocity = 0
        this.width = 100;
        this.height = 110;
        this.x = 600;
        this.y = 900 - this.height;
        this.score = 0;
        this.lose = false;

    }

    draw() {
        if(this.y >= 800 - this.height){
            this.y = 800 - this.height;
        } // theo also for top but not necessary
        if (this.x <= 0){
            this.x = 0;
        }
        if (this.x >= 1100){
            this.x = 1100;
        }
        image(game.playerImage, this.x, this.y, this.width, this.height)

        if (keyIsDown(39)){
            this.x += 4;
        }
        if (keyIsDown(37)){
            this.x -= 4;
        }
        if (keyIsDown(38)){
            this.y -= 4;
        }
        if (keyIsDown(40)){
            this.y += 4;
        }
        fill(255); 
        textSize(30);
        text('Score:', 1000, 50)
         text(this.score, 1100, 50)


    
        
    }



}