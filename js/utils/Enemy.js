Enemy = function (game, sprite, name, attack, heal) {

    Phaser.Sprite.call(this,game,2000,310,sprite);

    this.anchor.setTo(0.5,1);

    this.name = name;
    this.life = heal;
    this.attackDamage = attack;

    game.add.existing(this);

};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function (){

};

Enemy.prototype.giveDmg = function (dmg) {
    this.life -= dmg;
};

Enemy.prototype.getDmg = function () {
    return this.attackDamage;
};

Enemy.prototype.getHeal = function () {
    return this.life;
};

function EnemyPrototype(name, attack, heal, sprite) {
    this.name = name;
    this.attack = attack;
    this.heal = heal;
    this.sprite = sprite;

    this.getName = function () {
        return this.name;
    };

    this.getSprite = function () {
        return this.sprite;
    };

    this.getAttack = function () {
        return this.attack;
    };

    this.getHeal = function () {
        return this.heal;
    };
}