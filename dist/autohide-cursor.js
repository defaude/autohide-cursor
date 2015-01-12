(function () {

    "use strict";

    var delay = 1000;
    var timeout;

    prepareConfig();
    bindMouseEvents();
    setTimeout(hideCursor, delay);

    function prepareConfig () {
        var scripts = getTags('script');
        var myScript = scripts[scripts.length - 1];
        var delayAttribute = 'data-autohide-delay';

        if (myScript.hasAttribute(delayAttribute)) {
            delay = myScript.getAttribute(delayAttribute) || delay;
        }
    }

    function bindMouseEvents () {
        document.documentElement.addEventListener('mousemove', function () {
            showCursor();
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(hideCursor, delay);
        }, false);
    }

    function showCursor () {
        document.documentElement.removeAttribute('style');
    }

    function hideCursor () {
        document.documentElement.style.cursor = 'none';
    }

    function getTags (name) {
        return document.getElementsByTagName(name);
    }

}());
