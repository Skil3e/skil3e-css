# skil3e-css
CSS utility framework
## CDN
```html
<link rel="stylesheet" href="https://unpkg.com/skil3e-css-v2@latest/dist/skil3e.min.css" crossorigin="anonymous">
```
## NPM
```
npm install skil3e-css
```
### Usage

#### Import all the library.
On your main scss file:
```SCSS
@use "~skil3e-css-v2/src/skil3e";

//or define Variables
@use "~skil3e-css-v2/src/skil3e" with (
  //set all variable changes found on "_globals.scss"
);
```
#### Importing the basic.

On your main scss file:
```SCSS
@use "~skil3e-css-v2/src/basic";

//or define Variables
@use "~skil3e-css-v2/src/basic" with (
  //set all variable changes found on "_globals.scss"
);
```
#### Manual import
```SCSS
@use "~skil3e-css-v2/src/basic";
//Buttons
@use "~skil3e-css-v2/src/components/buttons/button";
@use "~skil3e-css-v2/src/components/buttons/minimal-link";
@use "~skil3e-css-v2/src/components/buttons/fill";
@use "~skil3e-css-v2/src/components/buttons/outline";
//Inputs
@use "~skil3e-css-v2/src/components/forms/inputs";
@use "~skil3e-css-v2/src/components/forms/input-wrappers";
@use "~skil3e-css-v2/src/components/forms/switch";
```
