export default class Player {
    constructor(game, gameSize) {
        this.game = game;
        this.size = {x: 15, y: 15};
        this.center = {x: gameSize.x / 2, y: gameSize.y - this.size.x};
    }

    update() {

    }
}