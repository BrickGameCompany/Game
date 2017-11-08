Player = function(game){

    Phaser.Sprite.call(this,game,250,310,"player");

    this.anchor.setTo(0.5,1);

    this.life = 10;
    this.attackDamage = 3;

    game.add.existing(this);
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function (){

};

Player.prototype.giveDmg = function (dmg) {
    this.life -= dmg;
};

Player.prototype.getDmg = function () {
    return this.attackDamage;
};

Player.prototype.getHeal = function () {
    return this.life;
};

Player.prototype.addHeal = function (add) {
    this.life += add;
};