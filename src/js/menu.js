import TimelineMax from 'gsap/src/uncompressed/TimelineMax';

export default function(menuBtn, menu) {
  const showMenu = new TimelineMax();
  showMenu
    .fromTo('.header__menu-btn-decor', 1, { scale: 1 }, { scale: 60 })
    .fromTo('.main-nav', 0.1, { opacity: 0 }, { opacity: 1 }, '-=0.35')
    .staggerFromTo(
      '.main-nav li',
      0.25,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, ease: Power2.easeOut },
      0.25,
      '-=0.3'
    );

  showMenu.pause();

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-btn_isOpened');
    menu.classList.toggle('main-nav_isOpened');

    if (menu.classList.contains('main-nav_isOpened')) {
      showMenu.timeScale(1);
      showMenu.play();
    } else {
      showMenu.timeScale(3);
      showMenu.reverse();
    }
  });
}
