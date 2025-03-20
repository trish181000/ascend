let currentFeature = 1;
const totalFeatures = 3;

function nextFeature(next) {
    // Get all features
    const features = document.querySelectorAll('.feature');

    // Fade out the current feature
    features.forEach(feature => feature.classList.remove('active'));

    // Fade in the next feature
    document.getElementById(`feature${next}`).classList.add('active');

    // Update current feature
    currentFeature = next;
}