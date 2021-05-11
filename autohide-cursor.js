export function autohideCursor(delay = 1e3) {

    function showCursor() {
        document.documentElement.removeAttribute('style');
    }

    function hideCursor() {
        document.documentElement.style.cursor = 'none';
    }

    let timeout;

    document.documentElement.addEventListener('mousemove', function () {
        showCursor();
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(hideCursor, delay);
    }, false);

    setTimeout(hideCursor, delay);

}
