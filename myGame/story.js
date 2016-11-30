/* global game phaser game_state */
game_state.story = function() {};


game_state.story.prototype = {
    
    preload: function(){
        	game.load.image('sky', 'assets/sky.png');
        
    },
    
    create: function(){
        game.add.sprite(0, 0, 'sky')
        this.scoreText = game.add.text(16, 16, 'There once was a bunny named Bun Bun.', {
			fontSize: '30px',
			fill: '#000'
		});
		this.cursors = game.input.keyboard.createCursorKeys();
		
		
    },
    
    update: function(){
        if (this.cursors.left.isDown){
            game.state.start('main')
        }
    },
}

game.state.add('story', game_state.story);
game.state.start('story');
