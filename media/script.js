document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const toggleButton = document.querySelector(".sidebar-toggle");
  const sidebarItems = document.querySelectorAll(".sidebar-item");
  const contentSections = document.querySelectorAll(".content");

  const characterData = {
    build: {
      name: "Orindral",
      class: "Alchemist",
      level: 5,
      ancestry: "Samsaran",
      heritage: "Oracular Samsaran",
      spells: [
        { level: "Cantrips", list: ["Stabilize", "Guidance", "Light"] },
        { level: "1st Level", list: ["Heal", "Bless", "Soothe"] }
      ],
      feats: ["Nudge the Scales", "Reach Spell"],
      skills: { Acrobatics: "+5", Arcana: "+7", Perception: "+9" },
      recipes: [
        {
          name: "Remove Curse Alchemical Elixir",
          level: 4,
          effects:
            "Allows the drinker to attempt a new saving throw against a curse.",
          components: "Shimmering Nightshade, Silver Dust, Moonlight Essence."
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

  // Render Character Info
  const renderCharacterInfo = () => {
    const infoDiv = document.getElementById("info");
    const char = characterData.build;
    infoDiv.innerHTML = `
      <p><strong>Name:</strong> ${char.name}</p>
      <p><strong>Class:</strong> ${char.class}</p>
      <p><strong>Level:</strong> ${char.level}</p>
      <p><strong>Ancestry:</strong> ${char.ancestry}</p>
      <p><strong>Heritage:</strong> ${char.heritage}</p>
    `;
  };

  // Render Spells
  const renderSpells = () => {
    const spellsDiv = document.getElementById("spells-list");
    const spells = characterData.build.spells;
    spellsDiv.innerHTML = spells
      .map(
        (spell) => `
      <h3>${spell.level}</h3>
      <ul>${spell.list.map((s) => `<li>${s}</li>`).join("")}</ul>
    `
      )
      .join("");
  };

  // Render Feats
  const renderFeats = () => {
    const featsDiv = document.getElementById("feats-list");
    const feats = characterData.build.feats;
    featsDiv.innerHTML = feats.map((feat) => `<li>${feat}</li>`).join("");
  };

  // Render Skills and Saves
  const renderSkillsAndSaves = () => {
    const skillsDiv = document.getElementById("skills-list");
    const skills = characterData.build.skills;
    skillsDiv.innerHTML = Object.keys(skills)
      .map(
        (skill) =>
          `<p><strong>${skill}:</strong> ${skills[skill]}</p>`
      )
      .join("");
  };

  // Render Recipes
  const renderRecipes = () => {
    const recipesDiv = document.getElementById("recipes-list");
    const recipes = characterData.build.recipes;
    recipesDiv.innerHTML = recipes
      .map(
        (recipe) => `
      <h3>${recipe.name} (Level ${recipe.level})</h3>
      <p><strong>Effects:</strong> ${recipe.effects}</p>
      <p><strong>Components:</strong> ${recipe.components}</p>
    `
      )
      .join("");
  };

  // Initialize App
  const initApp = () => {
    renderCharacterInfo();
    renderSpells();
    renderFeats();
    renderSkillsAndSaves();
    renderRecipes();
  };

  initApp();
});
