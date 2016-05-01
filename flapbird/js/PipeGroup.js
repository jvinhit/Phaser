﻿

Game.PipeGroup = function (game, parent) {

    Phaser.Group.call(this, game, parent);

    this.topPipe = new Game.Pipe(this.game, 0, 0, 0);
    this.bottomPipe = new Game.Pipe(this.game, 0, 440, 1);
    this.add(this.topPipe);
    this.add(this.bottomPipe);
    this.hasScored = false;

    this.setAll('body.velocity.x', -200);
};

Game.PipeGroup.prototype = Object.create(Phaser.Group.prototype);
Game.PipeGroup.prototype.constructor = Game.PipeGroup;

Game.PipeGroup.prototype.update = function () {
    this.checkWorldBounds();
};

Game.PipeGroup.prototype.checkWorldBounds = function () {
    if (!this.topPipe.inWorld) {
        this.exists = false;
    }
};


Game.PipeGroup.prototype.reset = function (x, y) {
    this.topPipe.reset(0, 0);
    this.bottomPipe.reset(0, 440);
    this.x = x;
    this.y = y;
    this.setAll('body.velocity.x', -200);
    this.hasScored = false;
    this.exists = true;
};


Game.PipeGroup.prototype.stop = function () {
    this.setAll('body.velocity.x', 0);
};

