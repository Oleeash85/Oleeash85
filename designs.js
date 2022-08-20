const size = document.getElementById('#sizeSelector');
const height = document.getElementById('#gridHeight');
const width = document.getElementById('#gridHeight');
const color = document.querySelector('#colorSelector');
const canvas = document.getElementById('#pixelCanvas');


$('size').submit(function(event) {
    event.preventDefault();
    height.val();
    width.val();
    makeGrid(height, width);
})

function makeGrid(x, y) {
    document.createElement('tr').remove();

    for (var c = 0; c < y; c++) {
        document.getElementById('#pixelCanvas').append('<tr id=table' + c + '></tr');
        for (var d = 0; d < y; d++) {
            document.getElementById('#table' + c).append('<td></td>');
        }

    }

    addEventListener('td').click(function color() {
        color = document.getElementById('#colorSelector').val();

        if (document.getElementById('#pixelCanvas').attr('style')) {
            (document.getElementById('#pixelCanvas').removeAttribute('style'))

        } else {
            $(this).attr('style', 'background-color:' + color);
        }

    })
    
}
