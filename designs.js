// Declare Variables
var choosenColor;
var gridHeight;
var gridWidth;

//Call method when Button is clicked
$('#sizePicker').submit(function(e){
  e.preventDefault();
  makeGrid();
});

function makeGrid() {
  choosenColor = $('#colorPicker').val(); // Get the choosen color
  gridHeight = $('#input_height').val(); // Get the grid height
  gridWidth = $('#input_width').val(); // Get the grid width
  var table = $('#pixel_canvas');
  createTable(table, gridHeight, gridWidth);
}

function createTable(table, height, width){
  table.empty(); // Before creating the table, wipe the old one
  for (var i = 0; i < height; i++) {
    var tr = $('<tr></tr>'); // Create the rows
    table.append(tr);
    for (var j = 0; j < width; j++) {
      tr.append('<td></td>'); // Create the td inside the rows
    }
  }

  // Event Listener for td, if it gets clicked, change the color
  $( "td" ).click(function() {
    $(this).css('background-color', choosenColor);
  });
}
