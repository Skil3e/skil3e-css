<p align="center">
  <a href="https://skil3e.github.io/skil3e-css/">
    <img alt="Skil3e CSS" src="https://github.com/Skil3e/skil3e-css/blob/v3-with-docs/docs/src/images/icon.png" width="60" />
  </a>
</p>
<h1 align="center">
  Skil3e CSS
</h1>
<p align="center">
A simple CSS utility framework with dark and light mode.
</p>

[![npm version](https://badge.fury.io/js/skil3e-css.svg)](https://badge.fury.io/js/skil3e-css)

Skil3e-css a simple modular css utility framework. It utilizes the new SASS [at-rules](https://sass-lang.com/documentation/at-rules]) that allows you to use only the parts you need, the way you need them.

## Installation

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/skil3e-css@latest/dist/skil3e.min.css" crossorigin="anonymous">
```

### NPM

Install [dart-sass](https://sass-lang.com/dart-sass).

```
npm install skil3e-css sass
```

If you need to alias [dart-sass](https://sass-lang.com/dart-sass) to node-sass.

```
npm install node-sass@npm:sass
```

## 🚀 Quick start

On your main scss/sass file:

### Use the whole library

```SCSS
@use "~skil3e-css/src/skil3e";
```

### Use only the basics.

```SCSS
@use "~skil3e-css/src/basic";
```

For more detailed documentation check out the [Documentation](https://skil3e.github.io/skil3e-css/).
