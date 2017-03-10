var field = {
  size: 12  ,
  makeRow: function() {
    var row = '<tr>';
    
    for (var i = 0; i < this.size; i++) {
      row += '<td></td>';
    }
    
    return row += '</tr>';
  },
  setCellSize: function() {
    if ($(window).width() > $(window).height()) {
      $('td').width($(window).height() / this.size / 2).height($(window).height() / this.size / 2);
    } else {
      $('td').width($(window).width() / this.size / 2).height($(window).width() / this.size / 2);
    }
    
  },
  draw: function(container) {
    container.children().remove();
    
    for (var i = 0; i < this.size; i++) {
      container.append(this.makeRow());
    }
    
    this.setCellSize();
  }
}