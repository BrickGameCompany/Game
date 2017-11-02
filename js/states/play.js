let myRound = true;
let action = false;
let myRoundTimer = false;
let roundTime = 45;
let roundTimer;

let playState = {

    create: function () {

        player = new Player(game);

        time = game.add.text(640,100,roundTime,{fill:"#fff"});

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
        roundTime = 45;

        console.log("tu jestem");

        myRoundTimer = true;
        roundTimer = setInterval(this.roundTimer,1000);
    },

    update: function () {

        if(!myRoundTimer){
            this.onMyRoundStart();
        }


    }
};
