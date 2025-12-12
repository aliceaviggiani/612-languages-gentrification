// Compare section toggles
const compareModeInputs = document.querySelectorAll('input[name="compare-mode"]');
const metroSelection = document.getElementById('metro-selection');
const metroInputs = document.querySelectorAll('input[name="metro"]');
const baseMap = document.getElementById('base-map');
const mapLayers = document.querySelectorAll('.map-layer');

// Show/hide metro selection based on mode
compareModeInputs.forEach(input => {
  input.addEventListener('change', (e) => {
    if (e.target.value === 'languages') {
      metroSelection.style.display = 'flex';
    } else {
      metroSelection.style.display = 'none';
    }
  });
});

// Change base map when metro changes
metroInputs.forEach(input => {
  input.addEventListener('change', (e) => {
    const metro = e.target.value;
    const metroMap = {
      'chicago': 'chicago_5',
      'dallas': 'dallas_3',
      'los-angeles': 'la_5',
      'new-york': 'ny_1'
    };
    baseMap.src = `images/1-cbsa-base/${metroMap[metro]}.svg`;
    
    // Update layer images
    updateLayers(metro);
  });
});

// Update layer images based on selected metro
function updateLayers(metro) {
  const layers = ['asian', 'eng', 'indo', 'slavic', 'spa', 'w_eu'];
  const metroPrefix = {
    'chicago': 'chicago',
    'dallas': 'dallas',
    'los-angeles': 'la',
    'new-york': 'ny'
  };
  
  mapLayers.forEach(layer => {
    layer.addEventListener('click', () => {
      // Remove active class from all
      mapLayers.forEach(l => l.classList.remove('active'));
      
      // Add active to clicked
      layer.classList.add('active');
      
      // Show the clicked layer on top of base map
      activeLayer.src = layer.src;
      activeLayer.style.display = 'block';
    });
  });

  // Layer click to overlay on base map
  mapLayers.forEach((layer, index) => {
    layer.src = `images/2-cbsa-lisa/${metroPrefix[metro]}_lisa_${layers[index]}_1.svg`;
  });
    
    // Hide active layer when metro changes
    activeLayer.style.display = 'none';
    mapLayers.forEach(l => l.classList.remove('active'));
}