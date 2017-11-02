exports.Player = function(game){

    Phaser.Sprite.call(this,game,50,50,"player");

    this.anchor.setTo(0.5,0.5);

    this.life = 10;
    this.attackDamage = 3;

    game.add.existing(this);
};

