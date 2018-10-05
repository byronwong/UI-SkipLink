This project is using: 2018-starter

## Global requirements
To package this (deleting node modules) you can use `npm run package`
- `del-cli` - `npm install --global del-cli`

## Getting started
- `npm i`
- `npm start` - NOTE: we are using `nodemon` to reset the serve on change.
- `npm-run-all --parallel task1 task2` - runs tasks in parallel
- `-s ` - run in silent mode

## Babel 
[Docs](https://babeljs.io/docs/en/babel-cli)
- `npx babel --version` - to check babel is correctly installed
- `npm babel-node` - to run babel on our build scripts including app.js


# Project 
Here are some code examples/ components for some UI patterns.

- Added skip link to skip over navigation 
- Added refocus to update browser focus then navigating to a fragment


## Understanding focus 

### Tab order
Is the natural focusing order of elements based on position in DOM, this of course can also be changed. 

- tabindex -1 = removed from tab order
- tabindex 0 = default DOM order, and makes it focusable
- tabindex of 1+ = will give focus priority this is an anti pattern


### Programing focus
Programable focus using .focus method 
```js 
  document.getElementById('element').focus();
```

### Navigating fragments
using tab index of -1 and focus heading when menu option is clicked, this allows the users focus to keep in sync with the where the page is scrolled.

```html
  <nav id="menu" class="">
    <a href="what-is-vegemite" data-page="what-is-vegemite" class="is-active">What is Vegemite?</a>
    <a href="recipes" data-page="recipes" class="">Recipes</a>
    <a href="ingredients" data-page="ingredients" class="">Ingredients</a>
  </nav>
```

### Skip links

```html 
  <a href="#maincontent" class="skip-link">Skip to main content</a>
  <!-- Note: before nav -->
  <nav></nav>  

  <main tabindex="-1"></main> 
```
Remember that tabindex adds things to the tab order.

```css
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background-color: red;
    color: white;
    padding: 8px;
    z-index: 100;
  }

  .skip-link:focus {
    top: 0;
  }
```



