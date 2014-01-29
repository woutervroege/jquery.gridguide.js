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
            columnwidth: 800,
            bordercolor: "red",
            backgroundcolor: "rgba(255, 0, 0, .1)"
        }, options);
        settings.gridwidth = settings.columns * settings.columnwidth + (settings.gutter * (settings.columns-1));

        var grid = $('<div class="grid"></div>');
        grid.css({
            "z-index": 10,
            "width": settings.gridwidth + "px",
            "height": $(window).height() + "px",
            "position": "fixed",
            "left": "50%",
            "top": "0",
            "margin-left": "-" + (settings.gridwidth / 2) + "px"
        })
        $(ELEM).append($(grid));
        for(var i=0;i<settings.columns;i++) {
            $(grid).append(
                $('<div></div>').css({
                    "width": settings.columnwidth + "px",
                    "height": "100%",
                    "display": "inline-block",
                    "position": "absolute",
                    "left": ((settings.columnwidth + settings.gutter) * i) + "px",
                    "vertical-align": "top",
                    "background": settings.backgroundcolor
                })
            )
        }

    };


}( jQuery ));