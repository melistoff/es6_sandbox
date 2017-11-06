import Player from "./Player";

export default class Game {
    
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.screen = this.canvas.getContext("2d");
        this.gameSize = {x: this.canvas.width, y: this.canvas.height}
        this.bodies = [new Player(this, this.gameSize)];

        this.gameLoop = () => {
            this.update();
            this.draw(this.screen, this.gameSize);
            requestAnimationFrame(this.gameLoop);
        }

        this.gameLoop();  
      
    }

    darwRect(screen, body) {
        screen.fillRect(body.center.x - body.size.x / 2,
            body.center.y - body.size.y / 2,
            body.size.x, body.size.y);
    }
    
    update() {
        
    }

    draw(screen, gameSize) {
        for (var i = 0; i < this.bodies.length; i++) {
            this.darwRect(screen, this.bodies[i]);            
        }
    }  
    
    
}

