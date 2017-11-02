let playState = {

    create: function () {

        require('../utils/player').Player();

        Player.prototype = Object.create(Phaser.Sprite.prototype);
        Player.prototype.constructor = Player;

        Player.prototype.update = function () {

        };
    }
};

module.exports = playState;