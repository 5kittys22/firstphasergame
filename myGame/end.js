/* global game phaser game_state */
game_state.end = function() {};

game_state.end.prototype = {
    
    preload: function(){
        	game.load.image('sky', 'assets/sky.png');
        	
    },
    
    create: function(){
        game.add.sprite(0, 0, 'sky')
        this.scoreText = game.add.text(16, 16, 'Congradulations you just helped Bun Bun collect all of his \n carrots. \n The aliens have now left and the carrots are safe. \n Bun Bun says thank you and now he can eat all he wants.', {
			fontSize: '30px',
			fill: '#000'
		});
		
    },
    update: function(){
        
    }
}

game.state.add('end', game_state.end);