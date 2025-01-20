document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const toggleButton = document.querySelector(".sidebar-toggle");
  const sidebarItems = document.querySelectorAll(".sidebar-item");
  const contentSections = document.querySelectorAll(".content");

  // Fetch spells from spells.json
  const fetchSpells = async () => {
    try {
      const response = await fetch("spells.json");
      const spells = await response.json();
      renderSpells(spells);
    } catch (error) {
      console.error("Error loading spells:", error);
    }
  };

  // Render Spells
  const renderSpells = (spells) => {
    const spellsList = document.getElementById("spells-list");
    spellsList.innerHTML = spells
      .map(
        (spell) => `
      <div class="spell-card">
        <h3><a href="${spell.Url}" target="_blank">${spell.name}</a></h3>
        <div class="spell-traits">
          ${spell.traits.map((trait) => `<span>${trait}</span>`).join("")}
        </div>
        <p class="spell-info">
          <strong>Type:</strong> ${spell.type} | 
          <strong>Level:</strong> ${spell.level} | 
          <strong>Traditions:</strong> ${spell.traditions.join(", ")} | 
          <strong>Cast:</strong> ${spell.cast} | 
          <strong>Area:</strong> ${spell.area || "—"} | 
          <strong>Saving Throw:</strong> ${spell["saving throw"] || "—"}
        </p>
        <p class="spell-description">${spell.description}</p>
      </div>
    `
      )
      .join("");
  };

  // Sidebar Navigation
  toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("expanded");
  });

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

  // Initialize
  fetchSpells();
});
