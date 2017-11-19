let loseState = {
    create: function () {
        money = level * 4 + exp;

        game.add.sprite(0,0,'background_menu');
        game.add.sprite(555,55,'you_lose');
        game.add.sprite(555,222,'earned');
        game.add.sprite(555,290,'money_field_blank');
        game.add.text(655,300,money,{fill:"#FFCC00"});

        game.add.button(555,440,'back',()=>{game.state.start('menu')},this);
    },
};