Card = function(game, name, sprite){

    Phaser.Sprite.call(this,game,250,450,sprite);

    this.anchor.setTo(0.5,0.5);

    this.name = name;

    game.add.existing(this);
};

Card.prototype = Object.create(Phaser.Sprite.prototype);
Card.prototype.constructor = Card;

Card.prototype.update = function (){

};

Card.prototype.getName = function () {
    return this.name;
};