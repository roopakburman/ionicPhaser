var Preload = function(game){};

Preload.prototype = {

	preload: function(){
			this.game.load.image('blue', 'img/assets/gemBlue.png');
			this.game.load.image('red', 'img/assets/gemRed.png');
			this.game.load.image('yellow', 'img/assets/gemYellow.png');
			this.game.load.image('green', 'img/assets/gemGreen.png');
			this.game.load.image('purple', 'img/assets/gemPurple.png');
	},

	create: function(){
		this.game.state.start("Main");
	}
}
