//Card class for game
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

//Card class for save cards
function CardPrototype(name, availability, sprite) {
    this.name = name;
    this.availability = availability;
    this.sprite = sprite;

    this.getName = function () {
        return this.name;
    };

    this.getSprite = function () {
        return this.sprite;
    };
}

//Card class for state "select cards"
CardMenu = function(game, name, sprite, number){

    Phaser.Sprite.call(this,game,230 + (number * 168),410,"kartap");

    this.name = name;

    game.add.existing(this);
};

CardMenu.prototype = Object.create(Phaser.Sprite.prototype);
CardMenu.prototype.constructor = CardMenu;

CardMenu.prototype.update = function (){

};

CardMenu.prototype.getName = function () {
    return this.name;
};

function Blank() {
    this.sprite = "blank";

    this.getSprite = function () {
        return this.sprite;
    };
}