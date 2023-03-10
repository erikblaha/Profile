$(document).ready(function() {
    // Add event listener to Home link
    $('.nav-link.home').on('click', function() {
      $('#slideshow').carousel(0); // Move slideshow to first slide
    });
  
    // Add event listener to About link
    $('.nav-link.about').on('click', function() {
      $('#slideshow').carousel(1); // Move slideshow to second slide
    });
  
    // Add event listener to Projects link
    $('.nav-link.projects').on('click', function() {
      $('#slideshow').carousel(2); // Move slideshow to third slide
    });
  
    // Add event listener to Contact link
    $('.nav-link.contact').on('click', function() {
      $('#slideshow').carousel(3); // Move slideshow to fourth slide
    });
  });
  