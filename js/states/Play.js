let player, enemy, time, buttonAttack, playerHeal, enemyHeal, timer;
let myRound = true;
let action = false;
let myRoundTimer = false;
let roundTime = 20;
let roundTimer;
let enemyDie = false;

let playState = {

    create: function () {

        game.add.sprite(0,0,"background");

        player = new Player(game);
        enemy = new Enemy(game,"enemy","slime",3,5);

        time = game.add.text(640,100,roundTime,{fill:"#fff"});
        playerHeal = game.add.text(250,100,roundTime,{fill:"#f00"});
        enemyHeal = game.add.text(1000,100,roundTime,{fill:"#f00"});

        buttonAttack = game.add.button(game.world.centerX - 95,300,'blue-green',this.attackEnemy,this,2,1,0);

    },

    roundTimer: function () {
        roundTime -= 1;

        time.setText(roundTime);

        if(roundTime === 0){
            myRound = false;
            clearInterval(roundTimer);
        }

    },

    onMyRoundStart: function () {
        roundTime = 20;


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

        myRound = true;
        myRoundTimer = false;
        roundTime = 20;
    },

    attackPlayer: function () {
        dmg = enemy.getDmg();

        player.giveDmg(dmg);

        this.setPlayerRound();
    },

    actionEnd: function () {

        if(enemyDie){
            enemyDie = false;
            // if create sprite and animation enemy, delete this line and add onTweenEnd event setPlayerRound;
            this.setPlayerRound();
            return;
        }


        action = false;
        this.attackPlayer();
    },

    attackEnemy: function () {
        if(myRound){
            let dmg = player.getDmg();

            enemy.giveDmg(dmg);

            if(enemy.getHeal() <= 0){
                this.rollEnemy();
                enemyDie = true;
            }

            roundTime = 20;
            clearInterval(roundTimer);
            myRound = false;
            action = true;
            this.actionEnd();
        }
    },

    rollEnemy: function () {
        // delete enemy
        // noinspection JSAnnotator
        delete enemy;

        switch(level){
            case 1:
                let randomEnemy = Math.floor(Math.random()*4);
                enemy = new Enemy(game,monstersOne[randomEnemy].getSprite(),monstersOne[randomEnemy].getName(),monstersOne[randomEnemy].getAttack(),monstersOne[randomEnemy].getHeal());
                break;
            case 2:
                //let randomEnemy = Math.floor(Math.random()*5);
                break;
            case 3:
                //let randomEnemy = Math.floor(Math.random()*5);
                break;
        }
    }
};
