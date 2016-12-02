/* global game phaser game_state */
game_state.story = function() {};


game_state.story.prototype = {
    
    preload: function(){
        	game.load.image('sky', 'assets/sky.png');
        
    },
    
    create: function(){
        game.add.sprite(0, 0, 'sky')
        this.scoreText = game.add.text(16, 16, 'There once was a bunny named Bun Bun. \n He loved to eat carrots. \n Aliens took his carrots and now he sad. \n The aliens are giving Bun Bun a chance to get his carrots. \n The only way to get them back is to catch them. \n Help Bun Bun to get his carrots by using the arrow keys. \n Jump on platforms to help get all the carrots. \n Remember that the carrots are everywhere. \n To start push the left button.', {
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
