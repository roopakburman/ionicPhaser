var Boot = function(game){

};

Boot.prototype = {

	preload: function(){

	},

  	create: function(){

      //scaling options

      this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

//      //have the game centered horizontally
//      this.scale.pageAlignHorizontally = true;
//      this.scale.pageAlignVertically = true;
//      //screen size will be set automatically
//      this.scale.setScreenSize(true);


    // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.state.start("Preload");
	}
}
