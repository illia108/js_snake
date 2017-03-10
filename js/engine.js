var engine = {
  speed: 300,
  play: function (container) {
    var interval;
    var self = this;
    
    if ($('#play').html() === 'play') {
      $('#play').html('pause');

      self.interval = setInterval(function() {
        snake.move(container);
      }, this.speed);
    } else {
      $('#play').html('play');
      clearInterval(self.interval);
    }
  }
}