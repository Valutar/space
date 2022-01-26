class Obstacle {
    constructor(image){
        this.image = image
        this.x = (Math.random() * width)
        this.y = -30
        this.width = 50
        this.height = 60
        this.score = 0
    }
  
    collision(playerInfo) {
  
          let obstacleX = this.x + this.width / 2
          let obstacleY = this.y + this.height / 2
          let playerX = playerInfo.x + playerInfo.width / 2
          let playerY = playerInfo.y + playerInfo.height / 2
          if (dist(obstacleX, obstacleY, playerX, playerY) > 50) {
              return false
          } else {
              game.player.score += 10
              console.log(game.player.score)
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
    }
  
  
}