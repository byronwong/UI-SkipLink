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
    <nav class="main-nav">
      <ul>
        <li><a class="nav-link" href="#chp1">Chapter 1</a></li>
        <li><a class="nav-link" href="#chp2">Chapter 2</a></li>
        <li><a class="nav-link" href="#chp3">Chapter 3</a></li>
        <li><a class="nav-link" href="#chp4">Chapter 4</a></li>
      </ul>
    </nav>
```

### Skip links
When the skip link is focused it comes into view.

- using a `href` attribute makes it easy to implement, however you still can use this with a tabindex of 0 and key event handling. 
- Notice the `skip link` comes before the `nav` so that in the tab order it is first.

```html 
    <a class="skip-link"  href="#maincontent" tabindex="0">Skip navigation</a>
    <nav class="main-nav">
      <ul>
        <li><a class="nav-link" href="#chp1">Chapter 1</a></li>
        <li><a class="nav-link" href="#chp2">Chapter 2</a></li>
        <li><a class="nav-link" href="#chp3">Chapter 3</a></li>
        <li><a class="nav-link" href="#chp4">Chapter 4</a></li>
      </ul>
    </nav>
```

```css
.skip-link {
  position: absolute;
  top: 4px;
  left: -500px;
}

.skip-link:focus {
  left: 4px;
}
```



