var rabbit = {
  position: { x: null, y: null },
  draw: function(container) {
    container.find('td').removeClass('rabbit');
    
    this.position.x = Math.floor((Math.random() * 10));
    this.position.y = Math.floor((Math.random() * 10));
    
    if (this.checkPosition()) {
      container.find('tr:eq(' + this.position.y + ') td:eq(' + this.position.x + ')')
      .addClass('rabbit');
    } else {
      this.draw(container);
    }
  },
  checkPosition: function() {
    var self = this;
    var result = true;
    
    $.each(snake.body, function() {
      if (this.x === self.position.x && this.y === self.position.y) {
        return result = false;
      }
    });
    
    return result;
  }
}