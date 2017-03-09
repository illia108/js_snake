$(function() {
  $(document).keydown(function(e) {
    switch(e.which) {
      case 37: // left
      break;

      case 38: // up
      break;

      case 39: // right
      break;

      case 40: // down
      break;

      default: return;
    }
    e.preventDefault();
  });
});