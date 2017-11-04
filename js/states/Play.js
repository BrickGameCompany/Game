let player, enemy, time, buttonAttack, playerHeal, enemyHeal, timer;
let myRound = false;
let action = false;
let myRoundTimer = true;
let roundTime = 20;
let roundTimer;
let enemyDie = false;

let playState = {

    create: function () {

        game.add.sprite(0,0,"background");

        player = new Player(game);
        enemy = new Enemy(game,"enemy","slime",3,5);
        let tween = game.add.tween(enemy).to({x: 1000},2000);
        tween.onComplete.add(this.setPlayerRound,this);
        tween.start();

        time = game.add.text(640,100,roundTime,{fill:"#fff"});
        playerHeal = game.add.text(250,100,roundTime,{fill:"#f00"});
        enemyHeal = game.add.text(1000,100,roundTime,{fill:"#f00"});

        buttonAttack = game.add.button(game.world.centerX - 95,300,'blue-green',this.attackEnemy,this,2,1,0);

    },

    actionEnd: function () {

        if(enemyDie){
            enemyDie = false;
            // if create sprite and animation enemy, delete this line and add onTweenEnd event setPlayerRound;
            return;
        }


        action = false;
        this.attackPlayer();
    },

    roundTimer: function () {
        roundTime -= 1;

        time.setText(roundTime);

        if(roundTime === 0){
            myRound = false;
            clearInterval(roundTimer);
            this.attackPlayer();
        }

    },

    onMyRoundStart: function () {
        roundTime = 21;


        myRoundTimer = true;
        roundTimer = setInterval(this.roundTimer,1000);
    },

    update: function () {

        if(!myRoundTimer){
            this.onMyRoundStart();
        }

        playerHeal.setText(player.getHeal());
        enemyHeal.setText(enemy.getHeal());

    },


    setPlayerRound: function () {
        enemyDie = false;
        myRound = true;
        myRoundTimer = false;
        roundTime = 21;
    },

    attackPlayer: function () {
        dmg = enemy.getDmg();

        player.giveDmg(dmg);
        this.setPlayerRound();
    },

attackEnemy: function () {
    if(myRound){
        let dmg = player.getDmg();

        enemy.giveDmg(dmg);

        roundTime = 21;
        clearInterval(roundTimer);

        let tween = game.add.tween(player).to({x:800},1000);
            tween.onComplete.add(() => {
                let nextTween = game.add.tween(player).to({x:250},1000)
                nextTween.onComplete.add(this.checkEnemy,this);
                nextTween.start();
            },this);
            tween.start();
        }
    },

// delete enemy
rollEnemy: function () {

        // noinspection JSAnnotator
        enemy.kill();
        switch(level){
            case 1:
                let randomEnemy = Math.floor(Math.random()*4);
                enemy = new Enemy(game,monstersOne[randomEnemy].getSprite(),monstersOne[randomEnemy].getName(),monstersOne[randomEnemy].getAttack(),monstersOne[randomEnemy].getHeal());
                let tween = game.add.tween(enemy).to({x: 1000},2000);
                tween.onComplete.add(this.setPlayerRound,this);
                tween.start();
                break;
            case 2:
                //let randomEnemy = Math.floor(Math.random()*5);
                break;
            case 3:
                //let randomEnemy = Math.floor(Math.random()*5);
                break;
        }
    },

checkEnemy: function () {
        if(enemy.getHeal() <= 0){
            this.rollEnemy();
            enemyDie = true;

        }
        myRound = false;
        action = true;
        if(!enemyDie)
            this.actionEnd();
    }
};
