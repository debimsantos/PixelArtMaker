$(document).ready(function() {
// Added new button ID and script to prevent loading default values
  $('#idSubmit').click(function(e) {

    e.preventDefault();
// Variable for storing user input height & width
    let height = $('#inputHeight').val();
    let width = $('#inputWidth').val();

    makeGrid(width, height);

  });
// Event listener for when user picks color
  $('#pixelCanvas').on('click', 'td', function() {
    let color = $('#colorPicker').val();
// Added css class (tile-color-default) for white
// Toggle to allow user to remove color on tile
    if ($(this).hasClass('tile-color-default')) {
      $(this).removeClass('tile-color-default');
      $(this).css('background-color', color);
    } else {
      $(this).css('background-color', '');
      $(this).addClass('tile-color-default')
    }
  });

});
// Clear canvas values
function reset() {
  $('#pixelCanvas').html('');
}
// Function to build grid based on user input
var makeGrid = function(width, height) {

  reset();

  for (let vline = 1; vline <= height; vline++) {
    $('#pixelCanvas').append('<tr></tr>');
    for (let hline =1; hline <=width; hline++) {
      $('tr:last').append('<td class="tile-color-default"></td>');
    }
  }
};
