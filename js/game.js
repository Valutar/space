class Game{

    constructor(){
        this.backgroundImage 

    }

    setup(){
        this.player = new Player ()	
        this.background = new Background ()
        this.enemies = []
        this.enemiesImage 
        this.obstacles = []
        this.dragonballImage
        this.meteorites = []
        this.meteoriteImage
        this.gameoverImage

    }

    preload(){
        this.backgroundImage = [
            {src: loadImage('assets/star.png'), y: 10, speed: 8},
        ]
        this.playerImage = loadImage ('assets/mastership.png')

        this.enemiesImage = loadImage ('assets/enemyshuttle.png')

        this.dragonballImage = loadImage ('assets/XDZT.gif')

        this.meteoriteImage = loadImage ('assets/meteorite.png')

        this.gameoverImage = loadImage ('assets/gameover.png')



    }

    draw() {
        clear()
        this.background.draw()
        this.player.draw()

        if (frameCount % 30 === 0){
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

        if (frameCount % 90 === 0){
            this.obstacles.push(new Obstacle(this.dragonballImage))
            }
    
        this.obstacles.forEach(function(obstacle) {
            obstacle.draw()
        })
    
        this.obstacles = this.obstacles.filter(obstacle => {
        if (obstacle.collision(this.player) || obstacle.x < 0) {
            return false
            } else {
           return true
            }
    
        })

        if (frameCount % 390 === 0){
            this.meteorites.push(new Comet(this.meteoriteImage))
        }
        
        this.meteorites.forEach(function(comet) {
            comet.draw()
        })
        
        this.meteorites = this.meteorites.filter(comet => {
            if (comet.collision(this.player) || comet.x < 0) {
                return false
            } else {
                return true
                    }
        })


    }

     
    

}

