class Enemy {
  constructor(image){
      this.image = image
      this.x = (Math.random() * width)
      this.y = -50
      this.width = 80
      this.height = 100
    //   let lose = false;
      // velocity 
  }

  collision(playerInfo) {

		let enemyX = this.x + this.width / 2
		let enemyY = this.y + this.height / 2
		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2
		if (dist(enemyX, enemyY, playerX, playerY) > 50) {
			return false
		} else {
            game.player.score -= 30
            return true
		}

	}

  draw(){
    if (this.x <= 0){
      this.x = 0;
    }
    if (this.x >= 1100){
      this.x = 1120;
    }
      this.y++
      image(this.image, this.x, this.y, this.width, this.height)

    if (this.lives <= 0) {
        noLoop();
    }
      
  }
  // loseGame()


}

