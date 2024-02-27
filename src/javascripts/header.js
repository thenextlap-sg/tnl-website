// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
export function headerSticky() {
  // Get all header elements
  var elements = "#nav-container, #sidebar-container, #nav-menu, #nav-logo, #tnl-logo, #dropdown-content, #nav-cta"

  // Get the offset position of the navbar
  var offetSticky = 25;

  if (window.scrollY > offetSticky) {
    for (const elem of document.querySelectorAll(elements)) {
      elem.classList.add("sticky");
    }
  } else {
    for (const elem of document.querySelectorAll(elements)) {
      elem.classList.remove("sticky");
    }
  }
}

// Change symbol and open/close sidebar menu on click
export function headerOnclick() {
  headerToggleSymbol();
  headerToggleMenu(false);
}

// Change open/close sidebar on resizing window
export function headerResponsive() {
  var widthLarge = 960; //px
  headerToggleMenu(window.innerWidth > widthLarge);
}

// Change the menu symbol to close symbol
function headerToggleSymbol() {
  const menuButton = document.getElementById("nav-menu");
  menuButton.classList.toggle("mouse-down");
}

// Change the display properties to show/hide
function headerToggleMenu(state) {
  const menuButton = document.getElementById("nav-menu");
  const sidebar = document.getElementById("sidebar-container");

  if (state || menuButton.classList.contains("mouse-down")) {
      sidebar.style.display = 'block';
  } else { 
      sidebar.style.display = 'none';
  }
}