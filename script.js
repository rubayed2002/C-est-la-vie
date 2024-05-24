document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var modal = document.getElementById("loginRegisterModal");

    // Get the button that opens the modal
    var btn = document.getElementById("userIcon");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Get the tabs and form contents
    var loginTab = document.getElementById("loginTab");
    var registerTab = document.getElementById("registerTab");
    var loginForm = document.getElementById("loginForm");
    var registerForm = document.getElementById("registerForm");

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Handle tab switching
    loginTab.onclick = function() {
        loginTab.classList.add("active");
        registerTab.classList.remove("active");
        loginForm.classList.add("active");
        registerForm.classList.remove("active");
    }

    registerTab.onclick = function() {
        registerTab.classList.add("active");
        loginTab.classList.remove("active");
        loginForm.classList.remove("active");
        registerForm.classList.add("active");
    }

    // Show login form by default
    loginForm.classList.add("active");
});
document.addEventListener("DOMContentLoaded", function() {
    // Get the search icon, search bar, and close button
    var searchIcon = document.querySelector(".header-icon img[alt='Search']");
    var searchBar = document.querySelector(".search-bar");
    var closeSearchBtn = document.querySelector(".close-search");

    // When the search icon is clicked, toggle the search bar visibility
    searchIcon.onclick = function() {
        searchBar.style.display = searchBar.style.display === "block" ? "none" : "block";
    };

    // When the close button is clicked, close the search bar
    closeSearchBtn.onclick = function() {
        searchBar.style.display = "none";
    };

    // When clicking outside of the search bar or the search icon, close it
    window.addEventListener("click", function(event) {
        if (!searchBar.contains(event.target) && event.target !== searchIcon) {
            searchBar.style.display = "none";
        }
    });
});


