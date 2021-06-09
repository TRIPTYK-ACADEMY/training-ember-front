import { modifier } from 'ember-modifier';

export default modifier(function hoverStar(element) {
  let parent = element.parentNode;
  let sideElement = parent.querySelectorAll('button');

  element.addEventListener('mouseenter', () => {
    sideElement.forEach((el) => {
      el.style.transform = 'scale(0.7)';
    });

    element.style.transform = 'scale(2)';
  });

  element.addEventListener('mouseleave', () => {
    sideElement.forEach((el) => {
      el.style.transform = 'scale(1)';
    });
  });
});
