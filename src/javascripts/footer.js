// Get the offset position of the navbar
var widthLarge = 1300; //px

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
export function footerResponsive() {
  if (window.innerWidth > widthLarge) {
    for (const elem of document.querySelectorAll('.footer-large')) {
      elem.style.display = 'flex';
    }
    for (const elem of document.querySelectorAll('.footer-mid')) {
      elem.style.display = 'none';
    }
  } else {
    for (const elem of document.querySelectorAll('.footer-large')) {
      elem.style.display = 'none';
    }
    for (const elem of document.querySelectorAll('.footer-mid')) {
      elem.style.display = 'flex';
    }
  }
}