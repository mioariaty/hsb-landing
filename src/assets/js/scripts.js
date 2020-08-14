(function () {
  "use-strict";
  // javascript
  const btnToggleBar = document.querySelector(".toggle-bar");
  const headerMenu = document.querySelector(".header__menu");
  const btnToggleMega = document.querySelectorAll(".has-megamenu");
  const megaMenu = document.querySelectorAll(".mega-menu");

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

  // const toggleDisplayMegaMenu = (e) => {
  //   e.preventDefault();
  //   const target = e.target;

  //   const menu = target.nextElementSibling;
  //   // // menu.classList.add("is-shown");
  //   // console.log(menu);
  //   // console.log(target.nextElementSibling);
  //   if (window.innerWidth <= 1023) {
  //     // item.classList.toggle("is-mega-shown")
  //     menu.classList.toggle("is-mega-shown");
  //   } else {
  //     // item.classList.toggle("is-shown")
  //     menu.classList.toggle("is-shown");
  //   }
  // };

  renderDisplayMenu();
  btnToggleBar.addEventListener("click", handleToggle);
  window.addEventListener("resize", handleResize);
  btnToggleMega.forEach((item) =>
    item.addEventListener("click", (e) => e.preventDefault())
  );
})();
