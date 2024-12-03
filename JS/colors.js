
const myButton = document.querySelector('button');
const myBox = document.querySelector('.box')
const colors = [ "red", "blue", "green", "pink", "yellow", "violet"]

myButton.addEventListener('click', changeColor);

function changeColor()  {
    
    console.log(myBox);

    let randomIndex = Math.floor(Math.random() * colors.length);

    myBox.style.backgroundColor = colors[randomIndex]
}