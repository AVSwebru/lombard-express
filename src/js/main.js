import './uikit';
import './animations';
import './calculation';

//menu toggler
import menuToggler from './menu';

const menuBtn = document.querySelector('.js-menu-btn');
const menu = document.querySelector('.js-menu');

if (window.matchMedia('(max-width: 960px)').matches) {
  menuToggler(menuBtn, menu);
}
