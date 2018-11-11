import './uikit';
import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import './animations';
import './calculation';

//menu toggler
import menuToggler from './menu';

const menuBtn = document.querySelector('.js-menu-btn');
const menu = document.querySelector('.js-menu');

menuToggler(menuBtn, menu);
