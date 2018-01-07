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
      var td = $('<td></td>');
      td.on("click", function(){ // Add event Listener to created td
        choosenColor = $('#colorPicker').val();
        $(this).css('background-color', choosenColor);
      })
      tr.append(td); // Create the td inside the rows
    }
  }
}
