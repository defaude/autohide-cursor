![Dependencies powered by David](https://david-dm.org/defaude/autohide-cursor.svg)
___

# autohide-cursor
Tiny no-dependency library that will automatically hide the cursor after a given time of mouse inactivity.

## Installation
Simply use bower to grab the latest version:

    bower install autohide-cursor

## Usage
Add a script tag to your HTML that loads autohide-cursor.min.js. You can configure the delay with a
data-attributes on the script tag itself. This is optional, though. Please do *not* use the async attribute :).

    <script src="autohide-cursor.min.js" data-autohide-delay="800"></script>

By default, autohide-cursor will hide the cursor whenever the user did not move the mouse for **1000 milliseconds**.
As soon as the user moves the mouse again, the cursor is visible again.

## Build
Build the minified version (with source map) into the dist directory:

    grunt

Developer mode with livereload (press CTRL+C in the console to cancel):

    grunt dev
