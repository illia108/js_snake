var engine = {
  speed: 300,
  score: 0,
  play: function (container) {
    var interval;
    var self = this;
    
    switch ($('#play').html()){
      case 'play':
        $('#play').html('pause');
        $('#output').html('score: ');
        $('#score').html(engine.score);

        self.interval = setInterval(function() {
          snake.move(container);
        }, this.speed);
        break;
      case 'pause':
        $('#play').html('play');
        
        clearInterval(self.interval);
        break;
    }
  },
  gameOver: function(container) {
    $('#play').click();
    
    snake.body = [
      { x: 0, y: field.size - 1 },
      { x: 1, y: field.size - 1 },
      { x: 2, y: field.size - 1 }
    ];
    snake.direction = 'right';
    
    $('#output').html('game over');
    $('#score').html('');
    engine.score = 0;
  }
}