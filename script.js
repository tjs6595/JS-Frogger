



const startButton = document.createElement('button');
startButton.textContent = "START";
document.body.append(startButton);

const gridSquareWidth = 10;
const gridSquareHeight = 10;
const squares = document.querySelectorAll('.grid div');

//Set starting point for the frog.
let currentIndex = 94;

//Move the Frog based on arrow key press after checking boundaries.
function moveFrog(e){
    switch (e.key){
        case 'ArrowLeft':
            if(currentIndex % gridSquareWidth !== 0){
                squares[currentIndex].classList.remove('frog')
                currentIndex = currentIndex -= 1;
            }
            break;
        case 'ArrowRight':
            if(currentIndex % gridSquareWidth !== 9){
                squares[currentIndex].classList.remove('frog')
                currentIndex = currentIndex += 1;
            }
            break;
        case 'ArrowUp':
            if((currentIndex - gridSquareWidth) >= 0){
                squares[currentIndex].classList.remove('frog')
                currentIndex = currentIndex -= gridSquareWidth;
            }
            break;
        case 'ArrowDown':
            if((currentIndex + gridSquareWidth) <= (squares.length-1)){
                squares[currentIndex].classList.remove('frog')
                currentIndex = currentIndex += gridSquareWidth;
            }
            break;
    }
    squares[currentIndex].classList.add('frog')

}

//Listen for an arrow key press, and then call the moveFrog function
const keyPress = document.addEventListener('keydown', moveFrog)

//Move Logs.

//Move Cars.

//Check Collisions.