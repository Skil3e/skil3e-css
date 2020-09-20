# skil3e-css  


[![npm version](https://badge.fury.io/js/skil3e-css.svg)](https://badge.fury.io/js/skil3e-css)

Skil3e-css a simple modular css utility framework. It utilizes the new SASS [at-rules](https://sass-lang.com/documentation/at-rules]) that allows you to use only the parts you need, the way you need them.

[Documentation](https://skil3e.github.io/skil3e-css/)

Alias [dart-sass](https://sass-lang.com/dart-sass) to node-sass if needed to compile.
```
npm install node-sass@npm:sass
```
## Instalation
### CDN
```html
<link rel="stylesheet" href="https://unpkg.com/skil3e-css@latest/dist/skil3e.min.css" crossorigin="anonymous">
```
### NPM
```
npm install skil3e-css
```
## Quick Start
On your main scss/sass file:
### Use the whole library
```SCSS
@use "~skil3e-css/src/skil3e";
```
### Use only the basics.
```SCSS
@use "~skil3e-css/src/basic";
```
For more detailed documentation check out the [docs](https://skil3e.github.io/skil3e-css/).
