// This is where you can add any interactivity, such as form validation, toggles, etc.
// document.addEventListener('DOMContentLoaded', function() {
//     // Example: Alert when someone clicks on a service
//     document.querySelectorAll('.services li').forEach(function(item) {
//         item.addEventListener('click', function() {
//             alert('You clicked on ' + item.textContent);
//         });
//     });
// });

// script.js
document.addEventListener('DOMContentLoaded', function () {
    const posterImage = document.getElementById('posterImage');

    // Define the image sources for each section
    const images = {
        programming: 'image/code&calcCollective.png', // Replace with actual image paths
        webdesign: 'image/code&calcCollective.png',
        academics: 'image/code&calcCollective.png'
    };

    // Add click event listeners to each list item
    document.getElementById('programming').addEventListener('click', function () {
        posterImage.src = images.programming;
        posterImage.style.display = 'block';
    });

    document.getElementById('webdesign').addEventListener('click', function () {
        posterImage.src = images.webdesign;
        posterImage.style.display = 'block';
    });

    document.getElementById('academics').addEventListener('click', function () {
        posterImage.src = images.academics;
        posterImage.style.display = 'block';
    });
});

 // Get current date, month and year
        var currentDate = new Date().getDate();
        var currentMonth = new Date().toLocaleString('default', { month: 'long' }); // Full month name
        var currentYear = new Date().getFullYear();

        // Update HTML elements with the current date and month
        document.getElementById('currentDate').textContent = currentDate;
        document.getElementById('currentMonth').textContent = currentMonth;
        document.getElementById('currentYear').textContent = currentYear;