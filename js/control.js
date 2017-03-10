$(function() {
  $(document).keydown(function(e) {
    switch(e.which) {
      case 13: // enter
        $('#play').click();
        break;
      case 37: // left
        snake.direction = snake.direction === 'right' ?  'right' : 'left';
      break;

      case 38: // up
        snake.direction = snake.direction === 'down' ?  'down' : 'up';
      break;

      case 39: // right
        snake.direction = snake.direction === 'left' ?  'left' : 'right';
      break;

      case 40: // down
        snake.direction = snake.direction === 'up' ?  'up' : 'down';
      break;

      default: return;
    }
    
    e.preventDefault();
  });
});