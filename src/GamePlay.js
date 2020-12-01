
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
        game.load.image('background', 'assets/images/fondo.png');
        game.load.spritesheet('doraemon', 'assets/images/dor.png', 215, 280, 8);
        game.load.audio('sonido', 'assets/sounds/doraemon.mp3');
    },
    create: function() {
        game.add.sprite(0, 0, 'background');
        this.doraemon = game.add.sprite(-200, 600, 'doraemon');
        this.doraemon.animations.add('walk', [0,1,2,3,4,5,0,1,2,3,4,5],1,true);
        this.doraemon.animations.play("walk");
        sonido.play('', 0, 0.5, true);
        
    },
    update: function() {
        console.log("update");
        this.doraemon.x += 2;if (this.doraemon.x == 1220){this.doraemon = game.add.sprite(-100, 600, 'doraemon');this.doraemon.animations.add('walk', [0,1,2,3,4,5],1,true);this.doraemon.animations.play("walk");}
        
    }
}

var game = new Phaser.Game(1200, 960, Phaser.CANVAS);
var sonido;
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");