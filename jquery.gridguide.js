/*
    * @package jquery.gridguide.js
    * @copyright (©) 2014 Wouter Vroege <wouter AT woutervroege DOT nl>
    * @author Wouter Vroege <wouter AT woutervroege DOT nl>
*/

(function ( $ ) {

    $.fn.gridguide = function(options) {

        var ELEM = this;

        var settings = $.extend({
            columns: 2,
            gutter: 10,
            width: 800,
            bordercolor: "red",
            backgroundcolor: "rgba(255, 0, 0, .1)"
        }, options);
        settings.colwidth = ((settings.width - ((settings.columns-1) * settings.gutter)) / settings.columns);

        var grid = $('<div class="grid"></div>');
        grid.css({
            "z-index": 10,
            "width": settings.width + "px",
            "height": $(window).height() + "px",
            "position": "fixed",
            "left": "50%",
            "top": "0",
            "margin-left": "-" + ((settings.width / 2)+2) + "px",
            "border-color": settings.bordercolor,
            "border-style": "solid",
            "border-left-width": "1px",
            "border-right-width": "1px",
            "border-top-width": "0",
            "border-bottom-width": "0",
        })
        $(ELEM).append($(grid));
        for(var i=0;i<settings.columns;i++) {
            $(grid).append(
                $('<div></div>').css({
                    "width": settings.colwidth + "px",
                    "height": "100%",
                    "display": "inline-block",
                    "position": "absolute",
                    "left": ((settings.colwidth + settings.gutter) * i) + "px",
                    "vertical-align": "top",
                    "border-left": (i==0) ? 0 : "1px solid " + settings.bordercolor,
                    "border-right": (i==settings.columns-1) ? 0 : "1px solid " + settings.bordercolor,
                    "background": settings.backgroundcolor
                })
            )
        }

    };


}( jQuery ));