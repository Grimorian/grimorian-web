var main = function() {
    var w = $(window), 
    max = w.height()/2,
    h, 
    top;
    
    w.scroll(function() {
        top = w.scrollTop();
        h = 100 - Math.floor(top/(max/100));
        if(h>= 10) {
            $('#header').css('height', h + '%');
            //$('#header h1').css('opacity', '' + (h-10/100));
        }
    });
};

//$(main);
