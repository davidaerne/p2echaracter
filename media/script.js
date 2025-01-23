document.addEventListener('DOMContentLoaded', () => {
  // Fetch and display character information
  fetch('character.json')
    .then(response => response.json())
    .then(characterData => {
      const infoDiv = document.getElementById('info');
      infoDiv.innerHTML = `
        <p><strong>Name:</strong> ${characterData.name}</p>
        <p><strong>Class:</strong> ${characterData.class}</p>
        <p><strong>Level:</strong> ${characterData.level}</p>
        <!-- Add more character details as needed -->
      `;
    })
    .catch(error => console.error('Error loading character data:', error));

  // Fetch and display spells
  fetch('spells.json')
    .then(response => response.json())
    .then(spellsData => {
      const spellsListDiv = document.getElementById('spells-list');
      const characterSpells = spellsData.filter(spell => 
        characterData.spells.includes(spell.name)
      );
      spellsListDiv.innerHTML = characterSpells.map(spell => `
        <div class="spell">
          <h3>${spell.name}</h3>
          <p><strong>Level:</strong> ${spell.level}</p>
          <p><strong>Description:</strong> ${spell.description}</p>
        </div>
      `).join('');
    })
    .catch(error => console.error('Error loading spells data:', error));
});
