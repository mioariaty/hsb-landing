(function () {
  "use strict";

  const Tab = function (options) {
    // select tab element
    const el = document.querySelector(options.el);
    const tabLinks = el.querySelectorAll(options.tabLinks);
    const tabPanes = el.querySelectorAll(options.tabPanes);
    let activeIndex = 0;
    let initCalled = false;

    // init
    const render = () => {
      if (!initCalled) {
        initCalled = true;
        el.classList.remove("no-js");
        tabLinks.forEach((link, index) => _handleClick(link, index));
      }
    };

    const _handleClick = (link, index) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        goToTab(index);
      });
    };

    // go to current tab pane
    const goToTab = (index) => {
      if (index !== activeIndex && index >= 0 && index <= tabLinks.length) {
        tabLinks[activeIndex].classList.remove("is-active");
        tabLinks[index].classList.add("is-active");

        tabPanes[activeIndex].classList.remove("is-active");
        tabPanes[index].classList.add("is-active");

        activeIndex = index;
      }
    };

    return {
      render: render,
      goToTab: goToTab,
    };
  };

  // export global namespace
  window.Tab = Tab;
})();

/*
  Example

  <div id="id_tab_wrapper" class="tab-wrapper">
    <a href="#" class="tab__link is-active">tab thứ 1</a>

    <div class="tab__content">
      <div class="nav_pane_content is-active">
        <p>
          content thứ 1
        </p>
      </div>
    </div>

  // define options
  const test-tab = Tab({
    el: '#id_tab_wrapper',
    navLinks: '.nav_link',
    navPanes: '.nav_pane_content'
  })

  // call tab
  test-tab.render();

*/
