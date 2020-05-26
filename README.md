# skil3e-css
CSS utility framework
## CDN
```html
<link rel="stylesheet" href="https://unpkg.com/skil3e-css@1.0.4/dist/skil3e.min.css" crossorigin="anonymous">
```
## NPM
```
npm install skil3e-css
```
### Usage

#### Import all the library.
On your main scss file:
```SCSS
@import "~skil3e-css/src/skil3e";
```
#### Importing the basic.

On your main scss file:
```SCSS
@import "~skil3e-css/src/basic";
```
#### Manual import
```SCSS
@import "~skil3e-css/src/variables";
@import "~skil3e-css/src/basic";

// Optional imports
@import "~skil3e-css/src/ui/shadows";

// 1.Buttons
@import "~skil3e-css/src/ui/buttons/button";
@import "~skil3e-css/src/ui/buttons/minimal-link";
@import "~skil3e-css/src/ui/buttons/fill";
@import "~skil3e-css/src/ui/buttons/outline";

// 2.Forms
@import "~skil3e-css/src/ui/forms/inputs";
@import "~skil3e-css/src/ui/forms/switch";
@import "~skil3e-css/src/ui/forms/input-wrappers";
```
