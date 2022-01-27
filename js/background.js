// https://preview.redd.it/o6q5zfmmc9e71.png?width=660&format=png&auto=webp&s=c6d4a492e1809de580de8d2350682929fbc1c01d

class Background{
    draw(){
        //image(game.backgroundImage[0].src, 0,0 , width, height)
        game.backgroundImage.forEach(function (img) {
        img.y += img.speed
        image(img.src, 0, img.y, width, height)
        image(img.src, 0, img.y - height, width, height)
        
        if (img.y >= height ){
            img.y = 0
        }
    
        })
    }
}
