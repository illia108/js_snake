var snake = {
  body: [
    { x: 0, y: field.size - 1 },
    { x: 1, y: field.size - 1 },
    { x: 2, y: field.size - 1 }
  ],
  direction: 'right',
  draw: function(container) {
    container.find('td').removeClass('snake');
    
    $.each(this.body, function() {
      container.find('tr:eq(' + this.y + ') td:eq(' + this.x + ')')
        .addClass('snake');
    });
  },
  move: function(container) {
    var head = this.body[this.body.length - 1];
    var step = this.takeStep();
    
    if (this.isBlock(container, head, step)) {
      engine.gameOver(container);
    } else {
      [].push.call(this.body, { x: head.x + step.shiftX, y: head.y + step.shiftY });
      [].shift.call(this.body);
    }
    
    this.eat(head, container);
    this.draw(container);
  },
  isBlock: function(container, head, step) {
    var nextCell = { x: head.x + step.shiftX, y: head.y + step.shiftY };
    var size = field.size - 1;
    
    if (nextCell.x > size || nextCell.x < 0 || nextCell.y > size || nextCell.y < 0 ||
        container.find('tr:eq(' + nextCell.y + ') td:eq(' + nextCell.x + ')')
        .hasClass('snake')) {
      return true;
    } else {
      return false;
    }
  },
  takeStep: function() {
    var step;
    
    switch(this.direction) {
      case 'right':
        step = { shiftX: 1, shiftY: 0 };
        break;
      case 'left':
        step = { shiftX: -1, shiftY: 0 };
        break;
      case 'up':
        step = { shiftX: 0, shiftY: -1 };
        break;
      case 'down':
        step = { shiftX: 0, shiftY: 1 };
        break;
      default:
        step = { shiftX: 1, shiftY: 0 };
    }
    
    return step;
  },
  eat: function(head, container) {
    if (head.x === rabbit.position.x && head.y === rabbit.position.y) {
      [].unshift.call(this.body, { x: rabbit.position.x, y: rabbit.position.y });
      rabbit.draw(container);
      engine.score += 1;
      $('#score').html(engine.score);
    }
  }
}