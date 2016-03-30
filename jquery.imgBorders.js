// Here is the javascript code to convert into a JQuery plugin.

// It finds all elements on the document that have the same class and then adds a border to all images with the same class on mouseover and removes borders on mouseout.
$.fn.imgBorders = function(){
    $(document).on({
        mouseenter: function () {
            className = $(this).attr('class');
            var elements = $("."+className);
            elements.map(function(item) {
                $(this).css("border","2px solid #39FF14")
            });
        },
        mouseleave: function () {
            className = $(this).attr('class');
            var elements = $("."+className);
            elements.map(function(item) {
                $(this).css("border","2px solid transparent")
            });
        }
    }, 'img');
};
