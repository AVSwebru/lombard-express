import TimelineMax from 'gsap/src/uncompressed/TimelineMax';

export default function(menuBtn, menu) {
    menuBtn.addEventListener('click', () => {
        
        menuBtn.classList.toggle('menu-btn_isOpened');
        menu.classList.toggle('main-nav_isOpened');

        if (menu.classList.contains('main-nav_isOpened')) {
            const showMenu = new TimelineMax();
            showMenu.fromTo('.menu-btn__bg', 1, {scale: 1}, {scale: 60});
            showMenu.fromTo('.menu-btn__bg', 0.1, {opacity: 1}, {opacity: 0}, '-=0.25');
            showMenu.fromTo('.main-nav', 0.1, {opacity: 0}, {opacity: 1}, '-=0.35');
            showMenu.staggerFromTo('.main-nav li', 0.25, {y: -30, opacity: 0}, {y: 0, opacity: 1}, 0.25, '-=0.3');
        }
       
    });
}





    