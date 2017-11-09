let tablica = 0;
let bl = 1;
let pickNumber = 0;
let pickHand = [5];
let pickButton = [];
let nameArray = [];
let deck = [];
let readyAdd = true;

let cardState = {

    create: function () {

        game.add.sprite(0,0,'background_menu');
        buttonPlay = game.add.button(550,10,'button-play',this.go,this,2,1,0);

        buttonLeft = game.add.button(70,460,'left_arrow',this.back);
        buttonRight = game.add.button(1078,460,'right_arrow',this.up);

        game.add.sprite(203,90,'table');

        for(let i=pickNumber; i < pickNumber+5; i++){
            pickHand[i%5] = cardsAvailable[i%5];
        }

         // for(let i =0; i <5;i++) {
         //     pickButton[i] = game.add.button(230 + (i * 168), 410, pickHand[i].getSprite(), this.pickOne,this);
         //     if (i === 4)
         //          readyAdd = true;
         // }
        pickButton[0] = game.add.button(230 + (0 * 168), 410, pickHand[0].getSprite(), this.pickOne,this);
        pickButton[1] = game.add.button(230 + (1 * 168), 410, pickHand[1].getSprite(), this.pickTwo,this);
        pickButton[2] = game.add.button(230 + (2 * 168), 410, pickHand[2].getSprite(), this.pickThree,this);
        pickButton[3] = game.add.button(230 + (3 * 168), 410, pickHand[3].getSprite(), this.pickFour,this);
        pickButton[4] = game.add.button(230 + (4 * 168), 410, pickHand[4].getSprite(), this.pickFive,this);

        this.button = [];
    },

    update: function () {

    },

    go: function () {
    	if(deck.length == 5 && nameArray.length == 5){
        game.state.start("play")
        	}
    	else{
    	game.add.text(750,35,"You did`t pick 5 cards",{fill: '#f00'});
    	}
    },

    pickOne: function () {
        console.log("jestem tutaj");
        if(readyAdd){
            name = pickHand[0].getName();
            if(nameArray.indexOf(name)>= 0){

            }else{
                if(deck.length === 5){

                }else{
                    deck.push(pickHand[0]);
                    nameArray.push(pickHand[0].getName());
                    this.drawSelect();
                }
            }
            console.log(deck,nameArray);
        }
    },
    pickTwo: function () {
        console.log("jestem tutaj");
        if(readyAdd){
            name = pickHand[1].getName();
            if(nameArray.indexOf(name)>= 0){

            }else{
                if(deck.length === 5){

                }else{
                    deck.push(pickHand[1]);
                    nameArray.push(pickHand[1].getName());
                    this.drawSelect();
                }
            }
            console.log(deck,nameArray);
        }
    },
    pickThree: function () {
        console.log("jestem tutaj");
        if(readyAdd){
            name = pickHand[2].getName();
            if(nameArray.indexOf(name)>= 0){

            }else{
                if(deck.length === 5){

                }else{
                    deck.push(pickHand[2]);
                    nameArray.push(pickHand[2].getName());
                    this.drawSelect();
                }
            }
            console.log(deck,nameArray);
        }
    },
    pickFour: function () {
        console.log("jestem tutaj");
        if(readyAdd){
            name = pickHand[3].getName();
            if(nameArray.indexOf(name)>= 0){

            }else{
                if(deck.length === 5){

                }else{
                    deck.push(pickHand[3]);
                    nameArray.push(pickHand[3].getName());
                    this.drawSelect();
                }
            }
            console.log(deck,nameArray);
        }
    },
    pickFive: function () {
        console.log("jestem tutaj");
        if(readyAdd){
            name = pickHand[4].getName();
            if(nameArray.indexOf(name) >= 0){

            }else{
                if(deck.length === 5){

                }else{
                    deck.push(pickHand[4]);
                    nameArray.push(pickHand[4].getName());
                    this.drawSelect();
                }
            }
            console.log(deck,nameArray);
        }
    },


    back: function () {
        if(pickNumber >= 5){
            pickNumber -= 5;

            for(let i=pickNumber; i < pickNumber+5; i++){
                if(cardsAvailable[pickNumber + (i%5)] === null){
                    pickHand[i%5] = new Blank();
                }else
                    pickHand[i%5] = cardsAvailable[pickNumber+(i%5)];
            }

            for(let i=0; i<5;i++){
                try {
                    pickButton[i].loadTexture(pickHand[i].getSprite());
                }catch (e){
                    pickButton[i].loadTexture("blank");
                }
            }

            console.log(pickHand);
        }
    },

    up:function () {
        if(pickNumber + 5 < cardsAvailable.length-1){
            pickNumber +=5;

            for(let i=pickNumber; i < pickNumber+5; i++){
                if(cardsAvailable[pickNumber + (i%5)] === null){
                    pickHand[i%5] = new Blank();
                }else
                    pickHand[i%5] = cardsAvailable[pickNumber+(i%5)];
            }

            for(let i=0; i<5;i++){
                try {
                    pickButton[i].loadTexture(pickHand[i].getSprite());
                }catch (e){
                    pickButton[i].loadTexture("blank");
                }
            }

            console.log(pickHand);
        }
    },

    drawSelect: function () {
        for(let j = 0; j < this.button.length;j++){
            this.button[j].kill();
        }

        this.button = [];
        for(let i = 0; i < deck.length; i++){
        this.button[i] = game.add.button(230 + (i * 168),111,deck[i].getSprite(),()=>{
            deck.splice(i,1);
            nameArray.splice(i,1);
            this.drawSelect();
            console.log(deck,nameArray);
        });
        }
    }

};
