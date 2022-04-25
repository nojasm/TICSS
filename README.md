# TICSS
TICSS Injects CSS - A very small tool for adding themes to your website!
---
# How does it work?
Download the `ticss.js` and paste it somewhere inside of your project. Then add it to your website using a script tag:
```html
<script src="/js/ticss.js"></script>
```

You then just create a TICSS instance like this
```js
var ticss = new TICSS();
```
and then use the `loadTheme()` function
```js
var ticss = new TICSS();
ticss.loadTheme("/css/themes/theme-1.css");
```
It is just that simple. Of course, TICSS doesn't add unnecessary `link` objects to your `head`, but instead replaces the old ones. Because of this, you maybe need multiple `TICSS` instances if you want to have multiple themes on your website.
