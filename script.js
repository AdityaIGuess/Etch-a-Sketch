
let container = document.querySelector('.container');
let instructions = document.createElement('instructions');
let body = document.querySelector('body');
let resetbtn = document.querySelector('.resetbtn');
body.appendChild(instructions);
container.style.gridTemplateColumns = 'repeat(16, 1fr)';
container.style.gridTemplateRows = 'repeat(16. 1fr)';


for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    
    square.style.border = "thin solid black";
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
        
    })
    
   container.appendChild(square);
}







