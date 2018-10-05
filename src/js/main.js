'use strict';

// Register skip links
// can store element for re-use
// Note: skip link needs a href attr to be focusable or tabindex =0
// If not using href be sure to impliment key press event listeners
if (document.querySelector('.skip-link')) {
  let el = document.querySelector('.skip-link');
  el.addEventListener('click', function(){
    document.querySelector('.main-content').focus();
  });
}

// Register refocuser
// If main nav exists register event
if (document.querySelectorAll('.nav-link').length > 0) {
  let nav = document.querySelector('.main-nav');

  nav.addEventListener('click', function(){
    refocusPage(event);
  });
}

// Sets the focus to the heading of the link
// once the page scroll updates
// this also works for back to top
let refocusPage = function(e) {
  let el = e.target;

  if (el.nodeName === 'A') {
    let elId = el.getAttribute('href');

    // Note element has tabindex -1
    // Note we use querySelector not getElementById
    document.querySelector(elId).focus();
  }
};

