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
  
  