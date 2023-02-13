
let container = document.querySelector('.container');
let instructions = document.createElement('instructions');
let body = document.querySelector('body');
let resetbtn = document.querySelector('.resetbtn');
let choicebtn = document.querySelector('.choicebtn');
body.appendChild(instructions);

function fillBoard(size) {
    let container = document.querySelector('.container');
    let squares = container.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    
  
    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
    
        
        square.style.border = "thin solid black";
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
            
        })
        
        resetbtn.addEventListener('click', () => {
            square.style.backgroundColor = 'white';
        })
    
       container.appendChild(square);

       if (amount > 10000) {
        return "You can only have 100 squares maximum on each side of the grid!";
       }
    }
    
}

function changeSize(input) {
    fillBoard(input);
}


console.log(fillBoard(16))






