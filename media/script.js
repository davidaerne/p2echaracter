// Fetch character JSON and render content
async function loadCharacterData() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/davidaerne/p2echaracter/main/character.json');
    if (!response.ok) {
      throw new Error('Failed to fetch character data');
    }
    const data = await response.json();
    renderCharacterInfo(data);
    renderSpells(data);
    renderFeats(data);
  } catch (error) {
    console.error('Error loading character data:', error);
  }
}

// Update the HTML dynamically for Character Info
function renderCharacterInfo(data) {
  const infoContainer = document.getElementById('info');
  infoContainer.innerHTML = `
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Class:</strong> ${data.class}</p>
    <p><strong>Level:</strong> ${data.level}</p>
    <p><strong>Stats:</strong></p>
    <ul>
      ${Object.entries(data.stats).map(([stat, value]) => `<li>${stat}: ${value}</li>`).join('')}
    </ul>
  `;
}

// Update the HTML dynamically for Spells
function renderSpells(data) {
  const spellsContainer = document.getElementById('spells-list');
  spellsContainer.innerHTML = `
    <ul>
      ${data.spells.map(spell => `<li>${spell}</li>`).join('')}
    </ul>
  `;
}

// Update the HTML dynamically for Feats
function renderFeats(data) {
  const featsContainer = document.getElementById('feats-list');
  featsContainer.innerHTML = `
    <ul>
      ${data.feats.map(feat => `<li>${feat}</li>`).join('')}
    </ul>
  `;
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  loadCharacterData();
});
