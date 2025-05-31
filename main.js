
function toggleMenu() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const customSelects = document.querySelectorAll(".custom-select");

  customSelects.forEach((select) => {
    const selected = select.querySelector(".selected");
    const dropdownMenu = select.querySelector(".dropdown-menu");
    const dropdownItems = select.querySelectorAll(".dropdown-item");

    selected?.addEventListener("click", function (e) {
      e.stopPropagation();
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        if (menu !== dropdownMenu) {
          menu.style.display = "none";
        }
      });
      if (dropdownMenu)
        dropdownMenu.style.display =
          dropdownMenu.style.display === "block" ? "none" : "block";
    });

    dropdownItems.forEach((item) => {
      item.addEventListener("click", function () {
        const value = this.getAttribute("data-value");
        const text = this.textContent.trim();
        const img = this.querySelector("img");
        const icon = this.querySelector("i");

        selected.innerHTML = `
          <span>
            ${
              img
                ? `<img alt="" src="${img.src}"/> ${text}`
                : icon
                ? `<i class="${icon.className}"></i> ${text}`
                : text
            }
          </span>
          <span class="select-icon"><i class="bi bi-chevron-down"></i></span>
        `;

        dropdownMenu.style.display = "none";

        const event = new CustomEvent("selectChange", {
          detail: { value, text },
        });
        select.dispatchEvent(event);
      });
    });
  });

  document.addEventListener("click", function () {
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.style.display = "none";
    });
  });
});
