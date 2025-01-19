document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const toggleButton = document.querySelector(".sidebar-toggle");
  const sidebarItems = document.querySelectorAll(".sidebar-item");
  const contentSections = document.querySelectorAll(".content");

  // Toggle Sidebar Expansion
  toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("expanded");
  });

  // Navigation Menu Click
  sidebarItems.forEach(item => {
    item.addEventListener("click", () => {
      // Remove active state from all items
      sidebarItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      // Show the corresponding content
      const tab = item.dataset.tab;
      contentSections.forEach(section => {
        section.classList.remove("active");
        if (section.id === tab) {
          section.classList.add("active");
        }
      });
    });
  });
});
