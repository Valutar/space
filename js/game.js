class Game{

    constructor(){
        this.backgroundImage 

    }

    setup(){
        this.player = new Player ()	
        this.background = new Background ()
        this.enemies = []
        this.enemiesImage 
        this.shotImage
        this.laser = []
        this.gameOver = false;


    }

    preload(){
        this.backgroundImage = [
            {src: loadImage('/Assets/star.png'), y: 10, speed: 7},
        ]
        this.playerImage = loadImage ('/Assets/playershuttle.png')

        this.enemiesImage = loadImage ('/Assets/enemyshuttle.png')

        this.shotImage = loadImage ('/Assets/shot.png')

        loseGame() 
            if(this.gameOver == false) {
                textSize(40);
                textAlign(CENTER, CENTER)
                fill('white');
                text('GAME OVER', width / 2, height / 2);
                return;
              }
    
    }

    draw() {
        clear()
        this.background.draw()
        this.player.draw()

        if (frameCount % 120 === 0){
        this.enemies.push(new Enemy(this.enemiesImage))
        }

        this.enemies.forEach(function(enemy) {
			enemy.draw()
		})

        this.enemies = this.enemies.filter(enemy => {
			if (enemy.collision(this.player) || enemy.x < 0) {
				return false
			} else {
				return true
			}

		})


        // if (keyPressed === 32) {
        // this.laser.push(new Laser(this.shotImage))
        // }

        // this.laser.forEach(function(laser){
        //     laser.draw()
        // })

        // this.enemies.forEach(function (enemy) {
		// 	enemy.draw()
		// })       
        // this.enemies = this.enemies.filter((enemy) => {
        // enemy.collision(this.player)
        // })
    }


}