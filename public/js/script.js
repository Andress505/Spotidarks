import { addEventOnElems } from "./utils.js";


/**Search clear functionality
 * limpia el campo de búsqueda con un clic
*/

const /** {HTMLElement} */ $searchField = document.querySelector('[data-search-field]');
const /** {HTMLElement} */ $searchClear = document.querySelector('[data-search-clear]');

$searchClear?.addEventListener('click', function () {
  $searchField.value = '';
});


/**Logo animation in mobile
 * crea una animación para el logo en dispositivos móviles
*/

const $logo = document.querySelector('[data-logo]');

if (!sessionStorage.getItem('logoAnimated')) {
  $logo.classList.add('animate');
  sessionStorage.setItem('logoAnimated', true);
}


/**Menu toggle
 * permite al usuario mostrar u ocultar el menú 
 * al hacer clic en un botón. Alterna una clase 
 * en el contenedor del menú para cambiar su visibilidad
*/

const /** {HTMLElement} */ $menuWrapper = document.querySelector('[data-menu-wrapper]');
const /** {HTMLElement} */ $menuToggler = document.querySelector('[data-menu-toggler]');

$menuToggler?.addEventListener('click', function () {
  $menuWrapper.classList.toggle('active');
});


/**Hide top bar on scroll down
 * oculta la barra superior cuando el usuario se 
 * desplaza hacia abajo y la muestra cuando se desplaza hacia arriba
*/

const /** {HTMLElement} */ $page = document.querySelector('[data-page]');
let /** {number} */ lastScrollPos = 0;

$page?.addEventListener('scroll', function () {
  if (lastScrollPos < this.scrollTop) {
    this.classList.add('header-hide');
  } else {
    this.classList.remove('header-hide');
  }
  lastScrollPos = this.scrollTop;
});

//Image animation on loading

window.addEventListener('DOMContentLoaded', function () {
  const /** {Array<HTMLElement>} */ $animatedImages = document.querySelectorAll('[data-image-load-anim]');

  const addAnimation = function () {
    this.animate({
      opacity: 1
    }, { duration: 200, fill: 'forwards' });
  }

  $animatedImages.forEach($image => {
    $image.style.opacity = 0;

    if ($image.complete) {
      addAnimation.call($image);
    } else {
      $image.addEventListener('load', addAnimation);
    }
  })
});


//Bottom nav item active


const /** {Array<HTMLElement>} */ $bottomNavItems = document.querySelectorAll('[data-bottom-nav-item]');
const /** {HTMLElement} */ $activeBottomNavItem = document.querySelector('[data-bottom-nav-item].active');

const activeNavItem = function () {
  $activeBottomNavItem?.classList.remove('active');
  this.classList.add('active');
}

$bottomNavItems && addEventOnElems($bottomNavItems, 'click', activeNavItem);


//Player modal toggle

const /** {HTMLElement} */ $modalPlayer = document.querySelector('[data-modal-player]');
const /** {Array<HTMLElement>} */ $modalPlayerTogglers = document.querySelectorAll('[data-modal-player-toggler]');
const /** {HTMLElement} */ $modalPlayerOverlay = document.querySelector('[data-player-overlay]');

const toggleModalPlayer = function () {
  $modalPlayer.classList.toggle('active');
  $modalPlayerOverlay.classList.toggle('active');
}

$modalPlayerTogglers && addEventOnElems($modalPlayerTogglers, 'click', toggleModalPlayer);


//Back and forward functionality

const $backBtn = document.querySelector('[data-back-btn]');
const $forwardBtn = document.querySelector('[data-forward-btn]');

$backBtn?.addEventListener('click', function () {
  window.history.back();
});

$forwardBtn?.addEventListener('click', function () {
  window.history.forward();
});


//add background color in list header when sticky on top

const $listHeader = document.querySelector('[data-list-header]');

$page?.addEventListener('scroll', function () {
  if ($listHeader) {
    this.classList[$listHeader.offsetTop > 0 ? 'add' : 'remove']('list-header-active');
  }
});


//Search filter item active
const $searchFilterItems = document.querySelectorAll('[data-search-filter]');

const activeSearchFilterItem = function () {
  document.querySelector('[data-search-filter].active')?.classList.remove('active');
  this.classList.add('active');
}

$searchFilterItems && addEventOnElems($searchFilterItems, 'click', activeSearchFilterItem);