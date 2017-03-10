$(function() {
  var container = $('#field');
  
  field.draw(container);
  snake.draw(container);
  rabbit.draw(container);
  
  $('#play').click(function() {
    engine.play(container);
  });
});

