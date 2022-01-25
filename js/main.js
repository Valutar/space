const game = new Game();

function preload() {
    game.preload()
}

function setup(){
    createCanvas(500,800);
    game.setup();
}

function draw() {
    game.draw()

}

function keyPressed(){
    game.player.keyPressed 
}
