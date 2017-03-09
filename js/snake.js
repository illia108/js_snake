var snake = {
  body: [
    { x: 0, y: 9 },
    { x: 1, y: 9 },
    { x: 2, y: 9 }
  ],
  direction: '',
  draw: function(container) {
    container.find('td').removeClass('snake');
    
    $.each(this.body, function() {
      container.find('tr:eq(' + this.y + ') td:eq(' + (this.x) + ')')
        .addClass('snake');
    });
  },
  push: function(property, element) {
    [].push.call(property, element);
  },
  shift: function(property) {
    [].shift.call(property);
  },
  move: function(container) {
    var head = this.body[this.body.length - 1];
    var step = this.takeStep();
    
    this.push(this.body, { x: head.x + step.shifX, y: head.y + step.shifY });
    this.shift(this.body);
    
    this.draw(container);
  },
  takeStep: function() {
    var step;
    
    switch(this.direction) {
      case 'right':
        step = { shifX: 1, shifY: 0 };
        break;
      case 'left':
        step = { shifX: -1, shifY: 0 };
        break;
      case 'up':
        step = { shifX: 0, shifY: -1 };
        break;
      case 'down':
        step = { shifX: 0, shifY: 1 };
        break;
      default:
        step = { shifX: 1, shifY: 0 };
    }
    
    return step;
  }
}