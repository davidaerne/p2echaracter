document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const toggleButton = document.querySelector(".sidebar-toggle");
  const sidebarItems = document.querySelectorAll(".sidebar-item");
  const contentSections = document.querySelectorAll(".content");

  const characterData = {
    build: {
      spells: [
        {
          level: "Cantrips (Heightened Level 3)",
          slots: "Unlimited",
          list: [
            {
              name: "Stabilize",
              description: "Stops a dying creature from losing HP."
            },
            {
              name: "Guidance",
              description: "Grants a +1 bonus to an ally's next attack roll, skill check, or saving throw."
            },
            {
              name: "Light",
              description: "Illuminates an object for 20 feet of bright light."
            }
          ]
        },
        {
          level: "Spell Rank 1",
          slots: "4 Slots",
          list: [
            {
              name: "Heal",
              description: "Restores hit points or damages undead."
            },
            {
              name: "Bless",
              description: "Grants allies within a 30-foot aura a +1 bonus to attack rolls."
            }
          ]
        },
        {
          level: "Spell Rank 2",
          slots: "3 Slots",
          list: [
            {
              name: "Fear",
              description: "Instills a creature with fear, causing them to become frightened."
            },
            {
              name: "Harm",
              description: "Damages a living creature or heals undead."
            }
          ]
        }
      ]
    }
  };

  // Toggle Sidebar Expansion
  toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("expanded");
  });

  // Navigation Menu Click
  sidebarItems.forEach((item) => {
    item.addEventListener("click", () => {
      sidebarItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      const tab = item.dataset.tab;
      contentSections.forEach((section) => {
        section.classList.remove("active");
        if (section.id === tab) section.classList.add("active");
      });
    });
  });

  // Render Spells
  const renderSpells = () => {
    const spellsDiv = document.getElementById("spells-list");
    const spells = characterData.build.spells;
    spellsDiv.innerHTML = spells
      .map(
        (spellLevel) => `
      <div class="spell-section">
        <div class="spell-header" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block';">
          ${spellLevel.level} (${spellLevel.slots})
        </div>
        <div class="spell-body">
          ${spellLevel.list
            .map(
              (spell) => `
            <div>
              <strong>${spell.name}:</strong> ${spell.description}
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `
      )
      .join("");
  };

  // Initialize App
  const initApp = () => {
    renderSpells();
  };

  initApp();
});
