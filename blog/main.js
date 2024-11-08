let prevScrollPos = window.pageYOffset; // Track previous scroll position
const navbar = document.getElementById("navbar");

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    // If user scrolls down, hide navbar
    if (prevScrollPos < currentScrollPos) {
        navbar.classList.add("navbar-hidden");
    } else {
        // If user scrolls up, show navbar
        navbar.classList.remove("navbar-hidden");
    }

    prevScrollPos = currentScrollPos; // Update previous scroll position
};