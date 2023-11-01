// Find the service elements by their class
var serviceElements = document.querySelectorAll('.service');

// Define the corresponding links for each service
var serviceLinks = [
    "https://maps.google.com", // Replace with your Google Maps link
    "mailto:info@yourdomain.com", // Replace with your email address
    "tel:+129439253939" // Replace with your phone number
];

// Add a click event listener to each service element
serviceElements.forEach(function(element, index) {
    element.addEventListener('click', function() {
        // Open the corresponding link in a new tab when the element is clicked
        window.open(serviceLinks[index], '_blank');
    });
});
