// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

//Method mapping all products on page
function mapProducts(selector){
    var products = [];

    $(selector).each(function(){
        products.push($(this).text());
    });

    return products;
}

//Listener for searchBox
$(document).ready(function(){

    if($('body').hasClass('products')){
        var productsList = mapProducts('h4');

        $('.searchButton').on('click', function(){
            $(this).siblings('.searchInput')[0].value;
        });

        //Instantiate carousel
        $("#carousel").waterwheelCarousel({
            separation: parseInt($(window).width() * 0.185),
            sizeMultiplier: 0.9,
            clickedCenter: function($clickedItem) {
                var image = new Image();
                image.src = $clickedItem.attr('src');
                image.onload = function(){
                    $('#galleryDetail').append(image).toggleClass('shown');
                };
            }
        });

        $('#galleryDetail').on('click', function(){
            $(this).toggleClass('shown').children('img').remove();
        });
    }
});
