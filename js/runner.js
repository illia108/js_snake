$(function() {
  var container = $('#field');
  
  field.draw(container);
  snake.draw(container);
  
  setInterval(function() {
    snake.move(container);
  }, 1000);
});