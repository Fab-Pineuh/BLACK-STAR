// handle-race-selection.js
document.getElementById('race-select').addEventListener('change', function(event) {
    const race = event.target.value;
    // Ici, vous pouvez ajouter la logique pour afficher la fiche de personnage spécifique à la race
    // Par exemple, charger un template Handlebars avec les données de la race
    if (race) {
      // Afficher la fiche de personnage pour la race sélectionnée
      console.log(`La race ${race} a été sélectionnée.`);
    }
  });
  