(function () {
  "use-strict";
  // javascript
  const btnToggleBar = document.querySelector(".toggle-bar");
  const headerMenu = document.querySelector(".header__menu");
  const btnToggleMega = document.querySelector(".has-megamenu");
  const megaMenu = document.querySelector(".mega-menu");

  const handleToggle = () => {
    headerMenu.classList.toggle("is-hidden");
  };

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

  const handleDisplayMegaMenu = (e) => {
    e.preventDefault();
    const megaMenuStyles = {
      opacity: 1,
      visibility: "visible",
      position: "relative",
      top: "unset",
      left: "unset",
    };
    console.log(megaMenuStyles);
    Object.assign(megaMenu.style, megaMenuStyles);
  };

  renderDisplayMenu();
  btnToggleBar.addEventListener("click", handleToggle);
  window.addEventListener("resize", handleResize);
  btnToggleMega.addEventListener("click", handleDisplayMegaMenu);
  btnToggleMega.addEventListener("onhover", handleDisplayMegaMenu);
})();
