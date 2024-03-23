window.addEventListener("DOMContentLoaded", (event) => {
  const toggle = document.getElementById("sidebar-toggle");
  const sidebar = document.querySelector(".sidebar");

  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
});
