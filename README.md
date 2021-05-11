# autohide-cursor

Tiny no-dependency library that will automatically hide the cursor after a given time of mouse inactivity. No build
tools, no bundlers, nothing.

## Installation

This is a ECMAScript Module. You can either install it via npm or simply take it from unpkg.

todo: put in some URLs here :)

## Usage

If you're fine with the 1 seconds default delay, simply do:

```html
<script type="module" src="index.js"></script>
```

If you want to control the delay yourself, you can import `autohideCursor` function directly and pass your custom value:

```html
<script type="module">
    import {autohideCursor} from "./autohide-cursor.js";
    autohideCursor(1234);
</script>
```
