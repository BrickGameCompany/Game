let cards, cardsAvailable, cardsNotAvailable;
let monsters, monstersOne, monstersTwo, monstersThree, monstersBoss;
let level = 1;

let initState = {

    preload: function(){


        let loadingLabel = game.add.text(20,150,'loading game data...',{fill:'#fff'});

        //sprites
        game.load.image("kartap","./assets/sprites/CardF.png");
        game.load.image("kartas","./assets/sprites/CardFS.png");
        game.load.image("table","./assets/sprites/table.png");
        game.load.image("left_arrow","./assets/sprites/left.png");
        game.load.image("right_arrow","./assets/sprites/right.png");
        game.load.image("bg", "./assets/sprites/background_menu.jpg");
        game.load.image("button-play","./assets/sprites/menu_button.png");
        game.load.image("button-credits","./assets/sprites/Credits_button.png");
        game.load.image("button-back", "./assets/sprites/Back_button.png");
        game.load.image("cre", "./assets/sprites/Credits.png");
        game.load.image("blue-green","./assets/sprites/blue_button00.png");
        game.load.image("background","./assets/sprites/background.png");
        game.load.image("player","./assets/sprites/horse.png");
        game.load.image("enemy","./assets/sprites/enemy.png");
        game.load.image("blank","./assets/sprites/blank.png");
        game.load.image("pick","./assets/sprites/pick.png");

        //items
        game.load.image("rmeat", "./assets/sprites/items/RawMeat.png");
        game.load.image("glad", "./assets/sprites/items/Gladius.png");
        game.load.image("Armor", "./assets/sprites/items/Armor.png");
        game.load.image("Dagger", "./assets/sprites/items/Dagger.png");
        game.load.image("strenght", "./assets/sprites/items/strenght.png");
        game.load.image("Speed", "./assets/sprites/items/Speed.png");
        game.load.image("Stick", "./assets/sprites/items/Stick.png");
        game.load.image("Weaknes", "./assets/sprites/items/Weaknes.png");
        game.load.image("Mace", "./assets/sprites/items/Mace.png");
        game.load.image("MCrystal", "./assets/sprites/items/MCrystal.png");
        game.load.image("Mbow", "./assets/sprites/items/MBow.png");
        game.load.image("Cannon", "./assets/sprites/items/Cannon.png");
        game.load.image("Witch", "./assets/sprites/items/Witch.png");
        game.load.image("Revolver", "./assets/sprites/items/Revolver.png");
        game.load.image("Shield", "./assets/sprites/items/Shield.png");

        //audio


        //settings
        game.time.desiredFps = 60;

        //json
        //game.load.json('card', 'https://api.myjson.com/bins/ach2z');
        game.load.json('cards','./assets/jsons/cards.json');
        game.load.json('monsters','./assets/jsons/monsters.json');


    },

    play: function () {
        cards = game.cache.getJSON('cards');
        monsters = game.cache.getJSON('monsters');

        cardsAvailable = [];
        cardsNotAvailable = [];

        //adds cards
        for(let i = 0; i < 17; i++){
            if(cards.cards[i].availability === 'true'){
                cardsAvailable.push(new CardPrototype(cards.cards[i].name,cards.cards[i].availability,cards.cards[i].sprite));
            }else{
                cardsNotAvailable.push(new CardPrototype(cards.cards[i].name,cards.cards[i].availability,cards.cards[i].sprite));
            }
        }

        monstersOne = [];
        monstersTwo = [];
        monstersThree = [];
        monstersBoss = [];

        for(let i = 0; i<3; i++){
            monstersOne[i] = new EnemyPrototype(monsters.level_one[i].name,monsters.level_one[i].attack,monsters.level_one[i].heal,monsters.level_one[i].sprite);
        }

        for(let i = 0; i<4; i++){
            monstersTwo[i] = new EnemyPrototype(monsters.level_two[i].name,monsters.level_two[i].attack,monsters.level_two[i].heal,monsters.level_two[i].sprite);
        }

        for(let i = 0; i<4; i++){
            monstersThree[i] = new EnemyPrototype(monsters.level_three[i].name,monsters.level_three[i].attack,monsters.level_three[i].heal,monsters.level_three[i].sprite);
        }

        monstersBoss[0] = new EnemyPrototype(monsters.level_four[0].name,monsters.level_four[0].attack,monsters.level_four[0].heal,monsters.level_four[0].sprite);
        monstersBoss[1] = new EnemyPrototype(monsters.level_four[1].name,monsters.level_four[1].attack,monsters.level_four[1].heal,monsters.level_four[1].sprite);
    },

    create: function () {
        this.play();
        game.state.start('menu');
    }
};