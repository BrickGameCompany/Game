let upgradeState = {

    create:function () {
        game.add.sprite(0,0,"background_menu");

        game.add.sprite(545,33,'unicorn_field');

        game.add.sprite(378,223,'dmg_field');
        game.add.sprite(378,297,'heal_field');

        game.add.sprite(603,223,'empty_field');
        game.add.sprite(603,303,'empty_field');

        this.text_attack = game.add.text(608,225,attack,{fill: "#1EA7E1"});
        this.text_heal = game.add.text(606,302,heal,{fill: "#1EA7E1"});

        game.add.sprite(745,216,'cost_field');
        game.add.sprite(745,299,'cost_field');

        game.add.text(761,223,'2',{fill:"#FFCC00"});
        game.add.text(761,305,'2',{fill:"#FFCC00"});

        game.add.sprite(1054,20,'money_field');
        game.add.sprite(1054,100,'money_field_blank');

        this.moneyValue = game.add.text(1140,108,money,{fill: "#FFCC00"});

        buttonPlay = game.add.button(545,561,'play',()=>{game.state.start('card')},this);

        this.buttonAddAttack = game.add.button(673,223,'add',this.addAttack,this);
        this.buttonAddHeal = game.add.button(673,303,'add',this.addLife,this);
    },

    addAttack: function () {
        if(money >= 2){
            money -= 2;
            attack += 5;
            this.text_attack.setText(attack);
            this.moneyValue.setText(money);
        }
    },

    addLife: function () {
        if(money >= 2){
            money -= 2;
            heal += 5;
            this.text_heal.setText(heal);
            this.moneyValue.setText(money);
        }
    }

};