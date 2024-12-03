const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ['rose-1.jpg', 'rose-2.jpg', 'rose-3.jpg', 'rose-4.jpg'];

myButton.addEventListener('click', changeImage);


function changeImage() {

    let randomIndex = Math.floor(Math.random() * images.length);
  
    image.src = 'images/' + images [randomIndex];
}