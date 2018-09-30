import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

document.addEventListener('DOMContentLoaded', () => {

    const controller = new ScrollMagic.Controller();
 
    const intro = new TimelineMax();
    intro
        .fromTo('.intro__title', 0.5, {x: -200, opacity: 0}, {x: 0, opacity: 1, ease:
            Power4. easeOut})
        .fromTo('.intro__subtitle', 0.5, {x: -200, opacity: 0}, {x: 0, opacity: 1, ease:
            Power4. easeOut})
        .fromTo('.intro__link', 0.25, {scale: 0}, {scale: 1});

    const introScene = new ScrollMagic.Scene({
        triggerElement: '.intro',
        reverse: false
    })
        .addTo(controller)
        .setTween(intro);

    const steps = new TimelineMax();
    steps.staggerFromTo('.step-item', 1, {x: -200, opacity: 0}, {x: 0, opacity: 1, ease:
        Power4. easeOut}, 0.25);

    const stepsScene = new ScrollMagic.Scene({
        triggerElement: '.steps',
        reverse: false
    })
        .addTo(controller)
        .setTween(steps);

    const statistic = new TimelineMax();
    statistic.staggerFromTo('.statistic-item', 1, {scale: 0}, {scale: 1}, 0.25);

    const statisticScene = new ScrollMagic.Scene({
        triggerElement: '.statistic',
        reverse: false
    })
        .addTo(controller)
        .setTween(statistic);

    const contacts = new TimelineMax();
    contacts.staggerFromTo('.contacts-section__text p', 1, {y: 200, opacity: 0}, {y: 0, opacity: 1, ease: Power4. easeOut}, 0.25);

    const contactsScene = new ScrollMagic.Scene({
        triggerElement: '.contacts-section',
        reverse: false
    })
        .addTo(controller)
        .setTween(contacts);
});