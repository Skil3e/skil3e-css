# skil3e-css
CSS utility framework
## CDN
```html
<link rel="stylesheet" href="https://unpkg.com/skil3e-css@latest/dist/skil3e.min.css" crossorigin="anonymous">
```
## NPM
```
npm install skil3e-css
```
### Usage

#### Import all the library.
On your main scss file:
```SCSS
@use "~skil3e-css/src/skil3e";

//or define Variables
@use "~skil3e-css/src/skil3e" with (
  //set all variable changes found on "_globals.scss"
);
```
#### Importing the basic.

On your main scss file:
```SCSS
@use "~skil3e-css/src/basic";

//or define Variables
@use "~skil3e-css/src/basic" with (
  //set all variable changes found on "_globals.scss"
);
```
#### Manual import
```SCSS
@use "basic";
//Buttons
@use "components/buttons/button";
@use "components/buttons/minimal-link";
@use "components/buttons/fill";
@use "components/buttons/outline";
//Inputs
@use "components/forms/inputs";
@use "components/forms/input-wrappers";
@use "components/forms/switch";
```
