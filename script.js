document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.getElementById("menu-toggle");
    var sideMenu = document.getElementById("side-menu");
    var closeBtn = document.getElementById("close-btn");

    menuToggle.addEventListener("click", function() {
        sideMenu.style.width = "250px";
    });

    closeBtn.addEventListener("click", function() {
        sideMenu.style.width = "0";
    });

    // Close the side menu when clicking outside of it
    window.addEventListener("click", function(event) {
        if (event.target == sideMenu) {
            sideMenu.style.width = "0";
        }
    });
});
