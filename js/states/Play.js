let player, enemy, time, buttonAttack, playerHealText, enemyHealText, timer, healBarPlayer, healBarEnemy;
let myRound = false;
let action = false;
let myRoundTimer = true;
let roundTime = 20;
let roundTimer;
let enemyDie = false;
let exp = 0;
let expBar;
let handDeck = [];
let dmgMe = 0, dmgMeMinus = 0, bonusDmg = 0;
let blockEnemy = false;

let playState = {

    create: function () {
        game.add.sprite(0,0,'background_game');
        game.add.sprite(0,0,"ground");

        game.add.sprite(510,20,'tree_2');
        game.add.sprite(1190,20,'tree_2');

        expBar = game.add.sprite(35,385,'exp0');

        this.cards = [];

        player = new Player(game);
        enemy = new Enemy(game,"enemy","slime",3,5);
        let tween = game.add.tween(enemy).to({x: 1000},2000);
        tween.onComplete.add(this.setPlayerRound,this);
        tween.start();

        game.add.sprite(0,45,'tree_1');

        time = game.add.text(640,100,roundTime,{fill:"#fff"});
        playerHealText = game.add.text(250,5,roundTime,{fill:"#f00"});
        enemyHealText = game.add.text(1000,5,roundTime,{fill:"#f00"});

        buttonAttack = game.add.button(game.world.centerX - 95,375,'blue-green',this.attackEnemy,this,2,1,0);

        for(let i=0; i<2;i++){ this.addCard()}

        healBarEnemy = game.add.graphics(0,0);
        healBarPlayer = game.add.graphics(0,0);
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
        roundTimer = setInterval(this.roundTimer.bind(this), 1000);
    },

    update: function () {

        if(!myRoundTimer){
            this.onMyRoundStart();
        }

        enemy.zeroHeal();

        let enemyHeal = enemy.getHeal();
        let playerHeal = player.getHeal();

        if(playerHeal <= 0){
            game.state.start('lose');
        }

        playerHealText.setText(player.getHeal());
        enemyHealText.setText(enemy.getHeal());

        if(playerHeal > 150)
            playerHeal = 150;

        if(enemyHeal > 150)
            enemyHeal = 150;

        healBarPlayer.clear();
        healBarPlayer.lineStyle(2, 0x000000);
        healBarPlayer.beginFill(0xBC1100);
        healBarPlayer.drawRect(140,40,2*playerHeal,50);
        healBarPlayer.endFill();

        healBarEnemy.clear();
        healBarEnemy.lineStyle(2, 0x000000);
        healBarEnemy.beginFill(0xBC1100);
        healBarEnemy.drawRect(840,40,2*enemyHeal,50);
        healBarEnemy.endFill();
    },


    setPlayerRound: function () {
        enemyDie = false;
        myRound = true;
        myRoundTimer = false;
        roundTime = 21;
    },

    attackPlayer: function () {
        dmg = enemy.getDmg();

        if(!blockEnemy){


            let tween = game.add.tween(enemy).to({x:400},1000);
            tween.onComplete.add(() => {
                if(dmgMe > 0)
                    dmg = dmg / dmgMe;
                console.log(dmg);
                if(dmgMeMinus > 0)
                    dmg = dmg - dmgMeMinus;
                console.log(dmg);
                let nextTween = game.add.tween(enemy).to({x:1000},1000);
                nextTween.onComplete.add(()=>{
                    blockEnemy = false;
                    dmgMe = 0;
                    dmgMeMinus = 0;
                    this.setPlayerRound();
                },this);
                nextTween.start();
            },this);
            tween.start();
            player.giveDmg(dmg);
        }

    },

    attackEnemy: function () {
    if(myRound){
        let dmg = player.getDmg();


        roundTime = 21;
        clearInterval(roundTimer);

        let tween = game.add.tween(player).to({x:800},1000);
            tween.onComplete.add(() => {
                enemy.giveDmg(dmg + bonusDmg);
                bonusDmg = 0;
                let nextTween = game.add.tween(player).to({x:250},1000);
                nextTween.onComplete.add(this.checkEnemy,this);
                nextTween.start();
            },this);
            tween.start();
        }
    },

    cardAttackEnemy: function () {

        roundTime = 21;
        clearInterval(roundTimer);
        this.checkEnemy();
    },

    // delete enemy
    rollEnemy: function () {
        let randomEnemy, tween;
        // noinspection JSAnnotator
        enemy.kill();
        switch(level){
            case 1:
                randomEnemy = Math.floor(Math.random()*3);
                console.log(monstersOne[randomEnemy].sprite);
                enemy = new Enemy(game,monstersOne[randomEnemy].getSprite(),monstersOne[randomEnemy].getName(),monstersOne[randomEnemy].getAttack(),monstersOne[randomEnemy].getHeal());
                tween = game.add.tween(enemy).to({x: 1000},2000);
                tween.onComplete.add(this.setPlayerRound,this);
                tween.start();
                break;
            case 2:
                //let randomEnemy = Math.floor(Math.random()*4);
                randomEnemy = Math.floor(Math.random()*4);
                enemy = new Enemy(game,monstersTwo[randomEnemy].getSprite(),monstersTwo[randomEnemy].getName(),monstersTwo[randomEnemy].getAttack(),monstersTwo[randomEnemy].getHeal());
                tween = game.add.tween(enemy).to({x: 1000},2000);
                tween.onComplete.add(this.setPlayerRound,this);
                tween.start();
                break;
            case 3:
                //let randomEnemy = Math.floor(Math.random()*4);
                randomEnemy = Math.floor(Math.random()*4);
                enemy = new Enemy(game,monstersThree[randomEnemy].getSprite(),monstersThree[randomEnemy].getName(),monstersThree[randomEnemy].getAttack(),monstersThree[randomEnemy].getHeal());
                tween = game.add.tween(enemy).to({x: 1000},2000);
                tween.onComplete.add(this.setPlayerRound,this);
                tween.start();
                break;
        }
    },

    checkEnemy: function () {
        if(enemy.getHeal() <= 0){
            exp += 1;
            this.checkLevel();
            //add aniamtion level
            if(!(level === 3 && exp === 0 || level === 4))
                this.rollEnemy();
            this.addCard();
            enemyDie = true;
        }
        myRound = false;
        action = true;
        if(!enemyDie)
            this.actionEnd();
    },

    wictory: function () {
        if(enemy.getName === "slime" && enemy.getHeal <= 0){
            game.state.start("wictory");
        }

    },

    checkLevel: function () {
        if(exp >= 4){
            this.levelUp();
        }
        expBar.loadTexture(expSprites[exp]);
    },

    levelUp: function () {
        exp = 0;
        level += 1;

        if(level === 3){
            enemy.kill();
            enemy = new Enemy(game,monstersBoss[0].getSprite(),monstersBoss[0].getName(),monstersBoss[0].getAttack(),monstersBoss[0].getHeal());
            tween = game.add.tween(enemy).to({x: 1000},2000);
            tween.onComplete.add(this.setPlayerRound,this);
            tween.start();
        }
        if(level === 4){
            enemy.kill();
            enemy = new Enemy(game,monstersBoss[1].getSprite(),monstersBoss[1].getName(),monstersBoss[1].getAttack(),monstersBoss[1].getHeal());
            tween = game.add.tween(enemy).to({x: 1000},2000);
            tween.onComplete.add(this.setPlayerRound,this);
            tween.start();
        }
    },

    addCard: function () {
        if(handDeck.length === 5){
            console.log("tutaj");
        }else{
            let randomCard = Math.floor(Math.random()*4);
            handDeck.push(deck[randomCard]);
            console.log(handDeck);
            this.drawCard();
        }
    },

    drawCard:function () {
        //x = 385, +169   y = 456 px
        for(let j = 0; j < this.cards.length;j++){
            this.cards[j].kill();
        }

        this.cards = [];

        for(let i = 0; i < handDeck.length; i++){
            console.log("jestem tutaj");
            this.cards[i] = game.add.button(385 + (i * 169),456,handDeck[i].getSprite(),()=>{
                if(myRound){
                    switch (handDeck[i].getName()){
                        case "Snowman nose":
                            this.snowmanNose();
                            break;
                        case "Orange":
                            this.orange();
                            break;
                        case "Snow jacket":
                            this.snowJacket();
                            break;
                        case "Snowball":
                            this.snowBall();
                            break;
                        case "Snow fury":
                            this.snowFury();
                            break;
                        case "Winter boots":
                            this.winterBoots();
                            break;
                        case "Stick":
                            this.stick();
                            break;
                        case "Freeze":
                            this.freeze();
                            break;
                        case "Ice mace":
                            this.iceMace();
                            break;
                        case "Crystal of winter":
                            this.crystalOfWinter();
                            break;
                        case "Snow cannon":
                            this.snowCannon();
                            break;
                        case "Wind":
                            this.wind();
                            break;
                        case "Snow trap":
                            this.snowTrap();
                            break;
                        case "Ice fortress":
                            this.iceFortress();
                            break;
                        case "Icicle":
                            this.icicle();
                            break;
                        case "Hot chocolate":
                            this.hotChocolate();
                            break;
                        case "Snow punch":
                            this.snowPunch();
                            break;

                    }
                    handDeck.splice(i,1);
                    this.drawCard();
                }
            });
        }
    },

    snowmanNose: function () {
        console.log('nose');
        enemy.giveDmg(8);
        this.cardAttackEnemy();
    },

    orange: function () {
        console.log('orange');
        player.addHeal(3);
    },

    snowJacket: function () {
        console.log('jacket');
        dmgMe = 2;
        this.cardAttackEnemy();
    },

    snowBall: function () {
        console.log('ball');
        enemy.giveDmg(6);
        this.cardAttackEnemy();
    },

    snowFury: function () {
        console.log('fury');
        bonusDmg = 5;
    },

    winterBoots: function () {
        console.log('boots');
        this.iceFortress();
    },

    stick: function () {
        console.log('stick');
        enemy.giveDmg(5);
        this.cardAttackEnemy();
    },

    freeze: function () {
        console.log('freeze');
        dmgMeMinus = -3;
    },

    iceMace: function () {
        console.log('iceMace');
        enemy.giveDmg(12);
        this.cardAttackEnemy();
    },

    crystalOfWinter: function () {
        console.log('crystalOfWinter');
        bonusDmg = 10;
    },

    snowTrap: function () {
        console.log('trap');
        this.snowJacket();
    },

    snowCannon: function () {
        console.log('cannon');
        enemy.giveDmg(15);
        this.cardAttackEnemy();
    },

    iceFortress: function () {
        console.log('fortress');
        blockEnemy = true;
    },

    icicle: function () {
        console.log('icicle');
        enemy.giveDmg(4);
        this.cardAttackEnemy();
    },

    snowPunch: function () {
        console.log('punch');
        enemy.giveDmg(5);
        this.cardAttackEnemy();
    },

    wind: function () {
        console.log('wind');
        this.addCard();
    },

    hotChocolate: function () {
        console.log('hot chocolate');
        player.addHeal(10);
    },
};
