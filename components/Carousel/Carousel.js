/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
  const carousel = document.createElement('div');
  const left = document.createElement('div');
  const imgMountains = document.createElement('img');
  const imgComputer = document.createElement('img');
  const imgTrees = document.createElement('img');
  const imgTurntable = document.createElement('img');
  const right = document.createElement('div');

  carousel.appendChild(left);
  carousel.appendChild(imgMountains);
  carousel.appendChild(imgComputer);
  carousel.appendChild(imgTrees);
  carousel.appendChild(imgTurntable);
  carousel.appendChild(right);

  carousel.classList.add('carousel');
  left.classList.add('left-button');
  right.classList.add('right-button');
  imgMountains.classList.add('show-img');

  imgMountains.src = './assets/carousel/mountains.jpeg';
  imgComputer.src = './assets/carousel/computer.jpeg';
  imgTrees.src = './assets/carousel/trees.jpeg';
  imgTurntable.src = './assets/carousel/turntable.jpeg';

  left.textContent = '<';
  right.textContent = '>';

  return carousel;
}

const carouselContainer = document.querySelector('.carousel-container');
console.log(carouselContainer);
carouselContainer.appendChild(Carousel());

const rightButton = document.querySelector('.right-button');
const leftButton = document.querySelector('.left-button');

const images = document.querySelectorAll('img');
console.log(images);
let currentImg = 0;
rightButton.addEventListener('click', e => {
  images[currentImg].className = '';
  currentImg = (currentImg + 1) % images.length;
  images[currentImg].className = 'show-img animated slideInRight';
  console.log(currentImg);
});

leftButton.addEventListener('click', e => {
  images[currentImg].className = '';
  currentImg = (images.length - 1 + currentImg) % images.length;
  images[currentImg].className = 'show-img';
  console.log(currentImg);
});
