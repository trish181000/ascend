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

  //Back-to-top Button — Show/hide button
  window.onscroll = function () {
    const btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // Scroll to top
  document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


  // Toggle the navigation menu
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('header nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
