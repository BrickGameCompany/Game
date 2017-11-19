let cards, cardsAvailable, cardsNotAvailable;
let monsters, monstersOne, monstersTwo, monstersThree, monstersBoss;
let expSprites;
let attack = 3;
let heal = 10;
let level = 1;
let money = 0;

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
        game.load.image("button-back", "./assets/sprites/Back_button.png");
        game.load.image("blue-green","./assets/sprites/blue_button00.png");
        game.load.image("background","./assets/sprites/background.png");
        game.load.image("player","./assets/sprites/horse.png");
        game.load.image("enemy","./assets/sprites/enemy.png");
        game.load.image("blank","./assets/sprites/blank.png");
        game.load.image("pick","./assets/sprites/pick.png");
        game.load.image("ground","./assets/sprites/ground_2.png");
        game.load.image("background_game","./assets/sprites/background_3.png");
        game.load.image("background_menu","./assets/sprites/background_4.png");
        game.load.image("tree_1","./assets/sprites/tree04.png");
        game.load.image("tree_2","./assets/sprites/tree12.png");
        game.load.image("unicorn","./assets/sprites/unicorn.png");
        game.load.image("credits","./assets/sprites/credits.png");
        game.load.image("logo","./assets/sprites/Logo.png");

        //exp
        game.load.image("exp0","./assets/sprites/exp/exp_0.png");
        game.load.image("exp1","./assets/sprites/exp/exp_1.png");
        game.load.image("exp2","./assets/sprites/exp/exp_2.png");
        game.load.image("exp3","./assets/sprites/exp/exp_3.png");
        game.load.image("exp4","./assets/sprites/exp/exp_4.png");

        //items
        game.load.image('crystal','./assets/sprites/cards/crystal_of_winter_card.png');
        game.load.image('freeze','./assets/sprites/cards/freez_card.png');
        game.load.image('hot','./assets/sprites/cards/hot_chocolate_card.png');
        game.load.image('fortress','./assets/sprites/cards/ice_fortress_card.png');
        game.load.image('mace','./assets/sprites/cards/ice_mace_card.png');
        game.load.image('icicle','./assets/sprites/cards/icicle_card.png');
        game.load.image('orange','./assets/sprites/cards/orange_card.png');
        game.load.image('punch','./assets/sprites/cards/snow_punch_card.png');
        game.load.image('cannon','./assets/sprites/cards/snow_cannon_card.png');
        game.load.image('fury','./assets/sprites/cards/snow_fury_card.png');
        game.load.image('jacket','./assets/sprites/cards/snow_jakcet_card.png');
        game.load.image('trap','./assets/sprites/cards/snow_trap_card.png');
        game.load.image('snowball','./assets/sprites/cards/snowball_card.png');
        game.load.image('nose','./assets/sprites/cards/snowman_nose_card.png');
        game.load.image('stick','./assets/sprites/cards/stick_card.png');
        game.load.image('wind','./assets/sprites/cards/wind_card.png');
        game.load.image('boots','./assets/sprites/cards/winter_boots.png');

        //enemys
        game.load.image("goblin","./assets/sprites/enemy/goblin.png");
        game.load.image("ghost","./assets/sprites/enemy/ghost.png");
        game.load.image("skeleton","./assets/sprites/enemy/skeleton.png");
        game.load.image("troll","./assets/sprites/enemy/troll.png");
        game.load.image("slime","./assets/sprites/enemy/slime.png");
        game.load.image("vampir","./assets/sprites/enemy/vampir.png");
        game.load.image("werewolf","./assets/sprites/enemy/werewolf.png");
        game.load.image("lepre","./assets/sprites/enemy/lepre.png");
        game.load.image("bazylisk","./assets/sprites/enemy/bazylisk.png");
        game.load.image("devil","./assets/sprites/enemy/devil.png");
        game.load.image("gremlin","./assets/sprites/enemy/gremlin.png");
        game.load.image("hydra","./assets/sprites/enemy/hydra.png");
        game.load.image("phoenix","./assets/sprites/enemy/phoenix.png");

        //gui
        game.load.image('add','./assets/sprites/gui/add_button.png');
        game.load.image('attack','./assets/sprites/gui/attack_button.png');
        game.load.image('back','./assets/sprites/gui/back.png');
        game.load.image('cost_field','./assets/sprites/gui/coast_field.png');
        game.load.image('dmg_field','./assets/sprites/gui/dmg_field.png');
        game.load.image('empty_field','./assets/sprites/gui/empty_filed.png');
        game.load.image('earned','./assets/sprites/gui/erned.png');
        game.load.image('heal_field','./assets/sprites/gui/heal_field.png');
        game.load.image('money_field','./assets/sprites/gui/money_field.png');
        game.load.image('money_field_blank','./assets/sprites/gui/money_field_blank.png');
        game.load.image('play','./assets/sprites/gui/play_button.png');
        game.load.image('unicorn_field','./assets/sprites/gui/unicorn_field.png');
        game.load.image('you_lose','./assets/sprites/gui/you_lose.png');


        //audio


        //settings
        game.time.desiredFps = 60;

        //json
        //game.load.json('card', 'https://api.myjson.com/bins/ach2z');
        game.load.json('cards','./assets/jsons/cards.json');
        game.load.json('monsters','./assets/jsons/monsters.json');

        //font
        //game.load.script('webfont', 'https://fonts.googleapis.com/css?family=Luckiest+Guy')


    },

    play: function () {
        expSprites = ['exp0','exp1','exp2','exp3','exp4'];

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