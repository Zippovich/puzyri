function rand(min, max) {
    if( max ) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return Math.floor(Math.random() * (min + 1));
    }
}

function move(el, side) {
    if (parseInt(el.css('top')) < -el.width()) {
        el.remove();
    }
    else {
        var niWidth = parseInt(el.css('width'));
        if (side == 1) {
            el.animate({
                'left': parseInt(el.css('left')) - niWidth / 2,
                'top': parseInt(el.css('top')) - niWidth / 4
            }, 600, function() {
                move($(this), 2);
            });
        }
        else {
            el.animate({
                'left': parseInt(el.css('left')) + niWidth / 2,
                'top': parseInt(el.css('top')) - niWidth / 4
            }, 600, function() {
                move($(this), 1);
            });
        }
    }
}

$(function() {
    $('body').click(function(e) {
        var X = e.pageX,
            Y = e.pageY;
        var newImg = $('<img src="images/puzyr.png" alt="" style="position: absolute; left: ' + X +'px; top: ' + Y + 'px; width: 0; height: 0">');
        $(this).append(newImg);
        var niWidth = rand(50,200);
        newImg.animate({
            'width': niWidth,
            'height': niWidth,
            'left': parseInt(X) - niWidth / 2,
            'top': parseInt(Y) - niWidth / 2
        }, 300, function() {
            move($(this), rand(1,2));
        });
    });
});