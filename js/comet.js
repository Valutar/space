class Comet{
    constructor(image){
        this.image = image
        this.x = (Math.random() * width)
        this.y = -75
        this.width = 150
        this.height = 150
    }
  
    collision(playerInfo) {
  
          let meteoriteX = this.x + this.width / 2
          let meteoriteY = this.y + this.height / 2
          let playerX = playerInfo.x + playerInfo.width / 2
          let playerY = playerInfo.y + playerInfo.height / 2
          if (dist(meteoriteX, meteoriteY, playerX, playerY) > 50) {
            game.player.lose = false
            console.log(game.player.lose)
          } else {
            game.player.lose = true 
            this.losescreen() 
            noLoop()
            console.log(game.player.lose)
          } 
    }
  
    draw(){
    if (this.x <= 0){
        this.x = 0;
    }
    if (this.x >= 1050){
        this.x = 1050;
    }
        this.y+= 7
        image(this.image, this.x, this.y, this.width, this.height)
    }

    losescreen(){
        image(game.gameoverImage, 0, -150, 1200, 950);
        textFont('Impact')
        stroke('rgb(100%,0%,10%)');
        strokeWeight(4);
        fill(255)
        textSize(80)
        text(`Score: ${game.player.score}`, 430,630)

    }
}