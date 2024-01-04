// function toggleDarkMode() {
//     document.body.classList.toggle('dark-mode');
// }
document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading time (10 seconds)
    setTimeout(function() {
        // Hide loading screen
        document.getElementById("loading-screen").style.display = "none";

        // Show main content
        document.getElementById("main-content").style.display = "block";
    }, 10000); // 10000 milliseconds = 10 seconds
});



function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const moonIcon = document.getElementById('moon-icon');
    moonIcon.classList.toggle('ri-moon-fill');
    moonIcon.classList.toggle('ri-sun-fill');
}



document.addEventListener("DOMContentLoaded", function() {
    // Display the warning message
    showWarningMessage();

    // Simulate loading time (10 seconds)
    setTimeout(function() {
        // Hide loading screen
        document.getElementById("loading-screen").style.display = "none";

        // Hide warning message
        hideWarningMessage();

        // Show main content
        document.getElementById("main-content").style.display = "block";
    }, 10000); // 10000 milliseconds = 10 seconds
});