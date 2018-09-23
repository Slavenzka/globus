'use strict';

(function () {
  let catalogItem = document.querySelector('.nav__item--catalogue');
  let submenu = document.querySelector('.submenu');

  function toggleSubmenu () {
    if (submenu.style.display === 'none') {
      submenu.style.display = 'block';
    } else {
      submenu.style.display = 'none';
    }
  }

  submenu.style.display = 'none';

  catalogItem.addEventListener('click', toggleSubmenu);
})();
