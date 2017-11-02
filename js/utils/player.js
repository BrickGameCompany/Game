Player = function(game){

    Phaser.Sprite.call(this,game,250,300,"player");

    this.anchor.setTo(0.5,0.5);

    this.life = 10;
    this.attackDamage = 3;

    game.add.existing(this);
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function (){

};