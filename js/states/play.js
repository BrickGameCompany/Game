let player, enemy, time, buttonAttack, playerHeal, enemyHeal, timer;
let myRound = true;
let action = false;
let myRoundTimer = false;
let roundTime = 20;
let roundTimer;
let level = 1;

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


        action = false;
        this.attackPlayer();
    },

    attackEnemy: function () {
        if(myRound){
            let dmg = player.getDmg();

            enemy.giveDmg(dmg);

            roundTime = 20;
            clearInterval(roundTimer);
            myRound = false;
            action = true;
            this.actionEnd();
        }
    }
};
