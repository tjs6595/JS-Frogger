



const startButton = document.createElement('button');
startButton.textContent = "START";
document.body.append(startButton);

const boardWidth = 10;
const boardHeight = 10;

const squares = document.querySelectorAll('.grid div');

let currentIndex = 94;

function moveFrog(){
    switch (e.key){
        case 'ArrowLeft':
            currentIndex = currentIndex -= 1;
            break;
        case 'ArrowRight':
            currentIndex = currentIndex += 1;
            break;
        case 'ArrowUp':
            currentIndex = currentIndex -= 1;
            break;
        case 'ArrowDown':
            currentIndex = currentIndex - 1;
            break;
    }
    squares[currentIndex].classList.add('frog')

}
const keyPress = document.addEventListener('keypress', moveFrog)