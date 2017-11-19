Player = function(game,attack,heal){

    Phaser.Sprite.call(this,game,250,310,"unicorn");

    this.anchor.setTo(0.5,1);

    this.life = heal;
    this.attackDamage = attack;

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