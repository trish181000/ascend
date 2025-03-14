// Scroll Event for Shrinking Hero and Changing Navigation Bar
window.addEventListener('scroll', function() {
    const hero = document.getElementById('hero');
    const header = document.getElementById('header');
  
    // Check if user has scrolled down past a certain point (100px in this case)
    if (window.scrollY > 100) {
      header.classList.add('shrink');
      hero.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
      hero.classList.remove('shrink');
    }
  });
  
  let currentFeature = 1;

function nextFeature(featureNumber) {
    // Hide all features
    document.querySelectorAll(".feature").forEach(feature => {
        feature.classList.remove("active");
    });

    // Show the next feature
    document.getElementById(`feature${featureNumber}`).classList.add("active");
}

// Ensure the first feature is visible on load
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("feature1").classList.add("active");
});
  