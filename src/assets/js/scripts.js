(function () {
  "use-strict";
  // javascript
  const btnToggleBar = document.querySelector(".toggle-bar");
  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menu__item");
  const btnToggleMega = document.querySelectorAll(".has-megamenu");
  const megaMenu = document.querySelectorAll(".mega-menu");

  // add icon angle down only for item which has class has-submenu
  menuItems.forEach((item) => {
    if (item.classList.contains("has-submenu")) {
      const menuLink = item.querySelector(".menu__link");
      const icon = document.createElement("i");
      icon.setAttribute("class", "las la-angle-down");
      menuLink.appendChild(icon);
    }

    if (
      item.classList.contains("has-submenu") ||
      item.classList.contains("has-megamenu")
    ) {
      item.addEventListener("click", (e) => e.preventDefault());
    }
  });

  // toggle menu
  const handleToggleMenu = () => {
    btnToggleBar.style.color = "#616ae8";
    if (menu.classList.contains("is-hidden")) {
      menu.classList.remove("is-hidden");
      btnToggleBar.style.color = "#fff";
      btnToggleBar.innerHTML = '<i class="las la-times"></i>';
    } else {
      menu.classList.add("is-hidden");
      btnToggleBar.style.color = "#616ae8";
      btnToggleBar.innerHTML = '<i class="las la-bars"></i>';
    }
  };

  // handle display menu
  const handleResize = () => {
    if (window.innerWidth <= 1023) {
      menu.classList.add("is-hidden");
      handleDisplaySubMenu();
    } else {
      menu.classList.remove("is-hidden");
    }
  };
  const renderDisplayMenu = () => {
    if (window.innerWidth <= 1023) {
      menu.classList.add("is-hidden");
      handleDisplaySubMenu();
    } else {
      menu.classList.remove("is-hidden");
    }
  };

  const handleDisplaySubMenu = () => {
    for (let item of menuItems) {
      if (item.querySelector(".sub-menu")) {
        item.addEventListener("click", toggleSubMenu, false);
      }
      if (item.querySelector(".mega-menu")) {
        item.addEventListener("click", toggleMegaMenu, false);
      }
    }
  };

  // active submenu
  function toggleSubMenu(e) {
    e.preventDefault();
    if (this.classList.contains("submenu-active")) {
      this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
      this.classList.add("submenu-active");
    } else {
      this.classList.add("submenu-active");
    }
  }

  // active mega menu
  function toggleMegaMenu(e) {
    e.preventDefault();
    if (this.classList.contains("megamenu-active")) {
      this.classList.remove("megamenu-active");
    } else if (menu.querySelector(".megamenu-active")) {
      menu
        .querySelector(".megamenu-active")
        .classList.remove("megamenu-active");
      this.classList.add("megamenu-active");
    } else {
      this.classList.add("megamenu-active");
    }
  }
  // event listener
  renderDisplayMenu();
  btnToggleBar.addEventListener("click", handleToggleMenu);
  window.addEventListener("resize", handleResize);
})();
