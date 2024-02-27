const maxWidth = 1022;
const pageMargin = 75;

// Adapt screen size for all pages
export function appResponsive() {
    document.querySelectorAll(".main-container").forEach(element => {
        appPadding(element);
        appWidth(element);
    });
}

// Set page padding
function appPadding(container) {
    var screenWidth = window.innerWidth;
    var targetPadding = (screenWidth > (maxWidth + pageMargin * 2)) ? (screenWidth - maxWidth) / 2 : pageMargin;
    container.style.padding = `0px ${targetPadding}px`;
};

// Set page width
function appWidth(container) {
    var screenWidth = window.innerWidth;
    var targetWidth = (screenWidth > (maxWidth + pageMargin * 2)) ? maxWidth : (screenWidth - pageMargin * 2);
    container.style.width = `${targetWidth}px`;
};