// Resize images
export function homeResizeImgs() {
    // Get dimensions
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight - 84;
    const numCols = (containerWidth > 1300) ? 5 : (containerWidth > 1160) ? 4 : (containerWidth > 660) ? 3 : 2;

    // Resize height and width based on number of rows and columns
    const imgWidth = Math.floor(containerWidth / numCols);
    const imgHeight = containerHeight / Math.ceil(containerHeight / (imgWidth / 4 * 3)); 

    // Get and change class tag
    for (const element of document.querySelectorAll(".background-imgs")) {
        element.style.width = `${imgWidth}px`;
        element.style.height = `${imgHeight}px`;
    };
}

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
export function homeOnScroll() {
    // Get the offset position of the navbar and video thumbnail
    var offetSticky = 20;
    var offsetThumbnail = 835;

    if (window.scrollY < offetSticky) {
        document.getElementById("thumbnail-video").classList.remove("mask");
    } else if (window.scrollY < offsetThumbnail) {
        document.getElementById("thumbnail-video").classList.add("mask");
        document.getElementById("homepage-thumbnail").classList.remove("hide");
    } else {
        document.getElementById("homepage-thumbnail").classList.add("hide");
    }
}