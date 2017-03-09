$(function() {
  $(document).keydown(function(e) {
    switch(e.which) {
      case 37: // left
        snake.direction = 'left';
      break;

      case 38: // up
        snake.direction = 'up';
      break;

      case 39: // right
        snake.direction = 'right';
      break;

      case 40: // down
        snake.direction = 'down';
      break;

      default: return;
    }
    
    e.preventDefault();
  });
});