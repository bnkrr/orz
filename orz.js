
degree = 0;
flag = 1;

function rotate(degree) {
    if (degree >= 30) {
        flag = -1;
    } else if (degree <= 0) {
        flag = 1;
    }
    degree += flag;
    
    $("#o").css({
                '-webkit-transform': 'rotate(' + degree + 'deg)',
                '-moz-transform': 'rotate(' + degree + 'deg)',
                '-ms-transform': 'rotate(' + degree + 'deg)',
                '-o-transform': 'rotate(' + degree + 'deg)',
                'transform': 'rotate(' + degree + 'deg)',
    });
    setTimeout(function() { rotate(degree); },30);
}

rotate(degree);
