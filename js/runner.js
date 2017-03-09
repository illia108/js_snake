$(function() {
  var container = $('#field');
  var speed = 500;
  
  field.draw(container);
  snake.draw(container);
  
  $('#play').click(function() {
    var interval;
    playGame(container, speed);
  });
});

function playGame(container, speed) {
  if ($('#play').html() === 'play') {
    $('#play').html('pause');

    interval = setInterval(function() {
      snake.move(container);
    }, speed);
  } else {
    $('#play').html('play');
    clearInterval(interval);
  }
}