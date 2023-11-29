// blackstar_load-races.js
async function loadRaces() {
  try {
    const response = await fetch('/races/black-star_races.json'); // Assurez-vous que le chemin est correct
    const races = await response.json();

    const selectElement = document.getElementById('race-select');
    Object.keys(races).forEach(raceKey => {
      const option = document.createElement('option');
      option.value = raceKey;
      option.textContent = races[raceKey].description;
      selectElement.appendChild(option);
    });
  } catch (error) {
    console.error('Erreur lors du chargement des races:', error);
  }
}

// Appeler loadRaces au chargement de la page ou à l'initiation de la création de personnage
document.addEventListener('DOMContentLoaded', loadRaces);
