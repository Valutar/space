class Enemy {
  constructor(image){
      this.image = image
      this.x = (Math.random() * width)
      this.y = 0
      this.width = 80
      this.height = 100
  }

  collision(playerInfo) {

		let enemyX = this.x + this.width / 2
		let enemyY = this.y + this.height / 2
		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2
		if (dist(enemyX, enemyY, playerX, playerY) > 50) {
			return false
		} else {
      this.gameOver = true
		}
	}

  draw(){
  if (this.x <= 0){
      this.x = 0;
  }
  if (this.x >= 400){
      this.x = 420;
  }
      this.y++
      image(this.image, this.x, this.y, this.width, this.height)

      
  }
  // loseGame()


}

