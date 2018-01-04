// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


//Call method when Button is clicked
$('#sizePicker').submit(function(e){
  e.preventDefault();
  makeGrid();
});

function makeGrid() {
  var gridHeight = $('#input_height').val();
  var gridWidth = $('#input_width').val();
  var choosenColor = $('#colorPicker').val();
  var table = $('#pixel_canvas');
  createTable(table, gridHeight, gridWidth);
}

function createTable(table, height, width){
  table.empty(); // Before creating the table, wipe the old one
  for (var i = 0; i < height; i++) {
    var tr = $('<tr></tr>');
    table.append(tr);
    for (var j = 0; j < width; j++) {
      tr.append('<td></td>');
    }
  }
}
