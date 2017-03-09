$(function() {
  var container = $('#field');
  var speed = 500;
  
  field.draw(container);
  snake.draw(container);
  
  $('#play').click(function() {
    startGame(container, speed);
  });
});

function startGame(container, speed) {
  setInterval(function() {
    snake.move(container);
  }, speed);
}