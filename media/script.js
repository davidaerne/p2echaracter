document.addEventListener("DOMContentLoaded", () => {
  const spellData = [
    {
      level: "Spell Rank 3",
      slots: { active: 2, total: 3 },
      spells: [
        {
          name: "Heroism",
          duration: "10 minutes",
          range: "Touch",
          description:
            "Grants a +1 status bonus to attack rolls, Perception checks, saving throws, and skill checks for 10 minutes.",
        },
        {
          name: "Chilling Darkness",
          duration: "—",
          range: "120 feet",
          description:
            "Deals cold damage to a target and harms creatures with a weakness to sunlight.",
        },
        {
          name: "Claim Curse",
          duration: "5 minutes",
          range: "Touch",
          description:
            "Removes a curse from the target and transfers it to yourself for a limited time.",
        },
      ],
    },
  ];

  const renderSpells = () => {
    const spellsContainer = document.getElementById("spells");

    spellData.forEach((level) => {
      // Create spell section
      const section = document.createElement("div");
      section.className = "spell-section";

      // Create spell header
      const header = document.createElement("div");
      header.className = "spell-header";
      header.innerHTML = `
        <span>${level.level}</span>
        <div class="spell-slots">
          ${Array(level.slots.total)
            .fill()
            .map(
              (_, index) =>
                `<span class="slot ${
                  index < level.slots.active ? "active" : "inactive"
                }"></span>`
            )
            .join("")}
        </div>
      `;

      // Create spell body
      const body = document.createElement("div");
      body.className = "spell-body";
      level.spells.forEach((spell) => {
        const spellDiv = document.createElement("div");
        spellDiv.className = "spell-entry";
        spellDiv.innerHTML = `
          <span class="spell-name">${spell.name}</span>
          <span class="spell-info">Duration: ${spell.duration} | Range: ${spell.range}</span>
          <span class="spell-description">${spell.description}</span>
        `;
        body.appendChild(spellDiv);
      });

      // Add toggle functionality
      header.addEventListener("click", () => {
        body.style.display = body.style.display === "block" ? "none" : "block";
      });

      // Append to section
      section.appendChild(header);
      section.appendChild(body);

      // Append section to container
      spellsContainer.appendChild(section);
    });
  };

  renderSpells();
});
