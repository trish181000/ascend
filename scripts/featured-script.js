function openFeature(id) {
    const features = document.querySelectorAll('.feature');
    
    // Collapse all features
    features.forEach(feature => {
      feature.classList.remove('active');
    });

    // Expand the selected one
    const selected = document.getElementById(`feature${id}`);
    selected.classList.add('active');
  }