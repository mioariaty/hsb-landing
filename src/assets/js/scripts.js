(function () {
  "use-strict";
  // javascript
  const btnToggleBar = document.querySelector(".toggle-bar");
  const headerMenu = document.querySelector(".header__menu");
  const btnToggleMega = document.querySelector(".has-megamenu");
  const megaMenu = document.querySelector(".mega-menu");

  const handleToggle = () => headerMenu.classList.toggle("is-hidden");

  const handleResize = () => {
    if (window.innerWidth <= 1023) {
      headerMenu.classList.add("is-hidden");
    } else {
      headerMenu.classList.remove("is-hidden");
    }
  };

  const renderDisplayMenu = () => {
    if (window.innerWidth <= 1023) {
      headerMenu.classList.add("is-hidden");
    } else {
      headerMenu.classList.remove("is-hidden");
    }
  };

  const toggleDisplayMegaMenu = (e) => {
    e.preventDefault();
    if (window.innerWidth <= 1023) {
      megaMenu.classList.toggle("is-mega-shown");
    } else {
      megaMenu.classList.toggle("is-shown");
    }
  };

  const onHoverMegaMenu = () => megaMenu.classList.add("is-shown");

  renderDisplayMenu();
  btnToggleBar.addEventListener("click", handleToggle);
  window.addEventListener("resize", handleResize);
  btnToggleMega.addEventListener("click", toggleDisplayMegaMenu);
  btnToggleMega.addEventListener("mouseenter", onHoverMegaMenu);
})();
