(function () {
  "use-strict";
  // javascript
  const btnToggle = document.querySelector(".toggle-bar");
  const headerMenu = document.querySelector(".header__menu");

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

  renderDisplayMenu();
  btnToggle.addEventListener("click", handleToggle);
  window.addEventListener("resize", handleResize);
})();
