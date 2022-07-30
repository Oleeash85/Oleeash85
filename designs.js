var Height, width, color;

$('#sizeSelector').submit(function(event) {
    event.preventDefault();
    height = $('#gridHeight').val();
    width = $('#gridWidth').val();
    makeGrid(height, width);

})

function makeGrid(a, b) {
    $('tr').remove();

    for (var c = 1; c <= a; c++) {
        $('#pixelCanvas').append('<tr id=table' + c + '></tr');
        for (var d = 1; d <= b; d++) {
            $('#table' + c).append('<td></td>');
        }

    }
    $('td').click(function addcolor() {
        color = $('#colorSelector').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
