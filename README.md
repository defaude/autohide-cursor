# autohide-cursor

Tiny no-dependency library that will automatically hide the cursor after a given time of mouse inactivity. No build
tools, no bundlers, nothing.

## Direct usage

The easiest way to get this is to import the `index.js` module - this will load the `autohideCursor` function and start
it with the default delay of 1 second:

```html
<script type="module" src="https://unpkg.com/@defaude/autohide-cursor/index.js"></script>
```

When you want to control the delay (or when/how the function is called), import the function directly:

```html
<script type="module">
    import {autohideCursor} from "https://unpkg.com/@defaude/autohide-cursor";
    autohideCursor(1234);
</script>
```

## Installation as npm package

This is published as npm package, so you can just

```
npm install @defaude/autohide-cursor
```

and use it in your code

```js
import { autohideCursor } from '@defaude/autohide-cursor';

// ... and whenever you want start hiding the cursor
autohideCursor(); // or pass the delay explicitly
```
