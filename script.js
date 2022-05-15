//Define Constants.
const gridSquareWidth = 10;
const gridSquareHeight = 10;
const squares = document.querySelectorAll('.grid div');
const riverObjectsLeft = document.querySelectorAll('.riverLeft');
const riverObjectsRight = document.querySelectorAll('.riverRight');
const roadObjectsLeft1 = document.querySelectorAll('.roadLeft');
const roadObjectsLeft2 = document.querySelectorAll('.roadLeft');
const roadObjectsRight = document.querySelectorAll('.roadRight');
let moveTimerID = null;
let collistionCheckTimerID = null;

//Create Start/Pause Button.
const startButton = document.createElement('button');
startButton.textContent = "START";
document.body.append(startButton);

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
    console.log(currentIndex)
}

//Listen for an arrow key press, and then call the moveFrog function
//const keyPress = document.addEventListener('keydown', moveFrog)

//Start moving objects automatically.
function autoMoveObjects(){
    riverObjectsLeft.forEach(riverLeft => moveRiverLeft(riverLeft))
    riverObjectsRight.forEach(riverRight => moveRiverRight(riverRight))
    roadObjectsLeft1.forEach(roadLeft1 => moveRoadLeft1(roadLeft1))
    roadObjectsLeft2.forEach(roadLeft2 => moveRoadLeft2(roadLeft2))
    roadObjectsRight.forEach(roadRight => moveRoadRight(roadRight))
}



//Move River Objects Left.
function moveRiverLeft(riverLeft){
    switch(true){
        case riverLeft.classList.contains('river0'):
            riverLeft.classList.remove('river0')
            riverLeft.classList.add('river1')
            break;
        case riverLeft.classList.contains('river1'):
            riverLeft.classList.remove('river1')
            riverLeft.classList.add('river2')
            break;
        case riverLeft.classList.contains('river2'):
            riverLeft.classList.remove('river2')
            riverLeft.classList.add('river3')
            break;
        case riverLeft.classList.contains('river3'):
            riverLeft.classList.remove('river3')
            riverLeft.classList.add('river4')
            break;
        case riverLeft.classList.contains('river4'):
            riverLeft.classList.remove('river4')
            riverLeft.classList.add('river5')
            break;
        case riverLeft.classList.contains('river5'):
            riverLeft.classList.remove('river5')
            riverLeft.classList.add('river6')
            break;
        case riverLeft.classList.contains('river6'):
            riverLeft.classList.remove('river6')
            riverLeft.classList.add('river7')
            break;
        case riverLeft.classList.contains('river7'):
            riverLeft.classList.remove('river7')
            riverLeft.classList.add('river8')
            break;
        case riverLeft.classList.contains('river8'):
            riverLeft.classList.remove('river8')
            riverLeft.classList.add('river9')
            break;
        case riverLeft.classList.contains('river9'):
            riverLeft.classList.remove('river9')
            riverLeft.classList.add('river0')
            break;
    }
}

//Move River Objects Right.
function moveRiverRight(riverRight){
    switch (true){
        case riverRight.classList.contains('river10'):
            riverRight.classList.remove('river10')
            riverRight.classList.add('river19')
            break;
        case riverRight.classList.contains('river11'):
            riverRight.classList.remove('river11')
            riverRight.classList.add('river10')
            break;
        case riverRight.classList.contains('river12'):
            riverRight.classList.remove('river12')
            riverRight.classList.add('river11')
            break;
        case riverRight.classList.contains('river13'):
            riverRight.classList.remove('river13')
            riverRight.classList.add('river12')
            break;
        case riverRight.classList.contains('river14'):
            riverRight.classList.remove('river14')
            riverRight.classList.add('river13')
            break;
        case riverRight.classList.contains('river15'):
            riverRight.classList.remove('river15')
            riverRight.classList.add('river14')
            break;
        case riverRight.classList.contains('river16'):
            riverRight.classList.remove('river16')
            riverRight.classList.add('river15')
            break;
        case riverRight.classList.contains('river17'):
            riverRight.classList.remove('river17')
            riverRight.classList.add('river16')
            break;
        case riverRight.classList.contains('river18'):
            riverRight.classList.remove('river18')
            riverRight.classList.add('river17')
            break;
        case riverRight.classList.contains('river19'):
            riverRight.classList.remove('river19')
            riverRight.classList.add('river18')
            break;
    }
}

//Move Road Objects.
//Move first row of road objects left.
function moveRoadLeft1(roadLeft1){
    switch(true){
        case roadLeft1.classList.contains('road0'):
            roadLeft1.classList.remove('road0')
            roadLeft1.classList.add('road1')
            break;
        case roadLeft1.classList.contains('road1'):
            roadLeft1.classList.remove('road1')
            roadLeft1.classList.add('road2')
            break;
        case roadLeft1.classList.contains('road2'):
            roadLeft1.classList.remove('road2')
            roadLeft1.classList.add('road3')
            break;
        case roadLeft1.classList.contains('road3'):
            roadLeft1.classList.remove('road3')
            roadLeft1.classList.add('road4')
            break;
        case roadLeft1.classList.contains('road4'):
            roadLeft1.classList.remove('road4')
            roadLeft1.classList.add('road5')
            break;
        case roadLeft1.classList.contains('road5'):
            roadLeft1.classList.remove('road5')
            roadLeft1.classList.add('road6')
            break;
        case roadLeft1.classList.contains('road6'):
            roadLeft1.classList.remove('road6')
            roadLeft1.classList.add('road7')
            break;
        case roadLeft1.classList.contains('road7'):
            roadLeft1.classList.remove('road7')
            roadLeft1.classList.add('road8')
            break;
        case roadLeft1.classList.contains('road8'):
            roadLeft1.classList.remove('road8')
            roadLeft1.classList.add('road9')
            break;
        case roadLeft1.classList.contains('road9'):
            roadLeft1.classList.remove('road9')
            roadLeft1.classList.add('road0')
            break;
    }
}

//Move second row of road objects right.
function moveRoadRight(roadRight){
    switch (true){
        case roadRight.classList.contains('road10'):
            roadRight.classList.remove('road10')
            roadRight.classList.add('road19')
            break;
        case roadRight.classList.contains('road11'):
            roadRight.classList.remove('road11')
            roadRight.classList.add('road10')
            break;
        case roadRight.classList.contains('road12'):
            roadRight.classList.remove('road12')
            roadRight.classList.add('road11')
            break;
        case roadRight.classList.contains('road13'):
            roadRight.classList.remove('road13')
            roadRight.classList.add('road12')
            break;
        case roadRight.classList.contains('road14'):
            roadRight.classList.remove('road14')
            roadRight.classList.add('road13')
            break;
        case roadRight.classList.contains('road15'):
            roadRight.classList.remove('road15')
            roadRight.classList.add('road14')
            break;
        case roadRight.classList.contains('road16'):
            roadRight.classList.remove('road16')
            roadRight.classList.add('road15')
            break;
        case roadRight.classList.contains('road17'):
            roadRight.classList.remove('road17')
            roadRight.classList.add('road16')
            break;
        case roadRight.classList.contains('road18'):
            roadRight.classList.remove('road18')
            roadRight.classList.add('road17')
            break;
        case roadRight.classList.contains('road19'):
            roadRight.classList.remove('road19')
            roadRight.classList.add('road18')
            break;
    }
}

//Move third row of road objects left.
function moveRoadLeft2(roadLeft2){
    switch(true){
        case roadLeft2.classList.contains('road20'):
            roadLeft2.classList.remove('road20')
            roadLeft2.classList.add('road21')
            break;
        case roadLeft2.classList.contains('road21'):
            roadLeft2.classList.remove('road21')
            roadLeft2.classList.add('road22')
            break;
        case roadLeft2.classList.contains('road22'):
            roadLeft2.classList.remove('road22')
            roadLeft2.classList.add('road23')
            break;
        case roadLeft2.classList.contains('road23'):
            roadLeft2.classList.remove('road23')
            roadLeft2.classList.add('road24')
            break;
        case roadLeft2.classList.contains('road24'):
            roadLeft2.classList.remove('road24')
            roadLeft2.classList.add('road25')
            break;
        case roadLeft2.classList.contains('road25'):
            roadLeft2.classList.remove('road25')
            roadLeft2.classList.add('road26')
            break;
        case roadLeft2.classList.contains('road26'):
            roadLeft2.classList.remove('road26')
            roadLeft2.classList.add('road27')
            break;
        case roadLeft2.classList.contains('road27'):
            roadLeft2.classList.remove('road27')
            roadLeft2.classList.add('road28')
            break;
        case roadLeft2.classList.contains('road28'):
            roadLeft2.classList.remove('road28')
            roadLeft2.classList.add('road29')
            break;
        case roadLeft2.classList.contains('road29'):
            roadLeft2.classList.remove('road29')
            roadLeft2.classList.add('road20')
            break;
    }
}

//Check Collisions.
function collision(){
    if (squares[currentIndex].classList.contains('river0')||
        squares[currentIndex].classList.contains('river3')||
        squares[currentIndex].classList.contains('river4')||
        squares[currentIndex].classList.contains('river8')||
        squares[currentIndex].classList.contains('river9')||
        squares[currentIndex].classList.contains('river12')||
        squares[currentIndex].classList.contains('river13')||
        squares[currentIndex].classList.contains('river14')||
        squares[currentIndex].classList.contains('river16')||
        squares[currentIndex].classList.contains('river18')||
        squares[currentIndex].classList.contains('river19')||
        squares[currentIndex].classList.contains('road1')||
        squares[currentIndex].classList.contains('road2')||
        squares[currentIndex].classList.contains('road5')||
        squares[currentIndex].classList.contains('road6')||
        squares[currentIndex].classList.contains('road7')||
        squares[currentIndex].classList.contains('road11')||
        squares[currentIndex].classList.contains('road15')||
        squares[currentIndex].classList.contains('road16')||
        squares[currentIndex].classList.contains('road18')||
        squares[currentIndex].classList.contains('road19')||
        squares[currentIndex].classList.contains('road21')||
        squares[currentIndex].classList.contains('road22')||
        squares[currentIndex].classList.contains('road23')||
        squares[currentIndex].classList.contains('road24')||
        squares[currentIndex].classList.contains('road27')||
        squares[currentIndex].classList.contains('road28')){
        console.log('you lose');
        console.log(currentIndex);
        clearInterval(moveTimerID);
        clearInterval(collistionCheckTimerID);
        //squares[currentIndex].classList.remove('frog');
        document.removeEventListener('keydown', moveFrog);
    }
}

//Check for a win.
function win(){
    if (squares[currentIndex].classList.contains('forest')){
        console.log('you win!');
        clearInterval(moveTimerID);
        clearInterval(collistionCheckTimerID);
        //squares[currentIndex].classList.remove('frog');
        document.removeEventListener('keydown', moveFrog);
    }
}

startButton.addEventListener('click', () => {
     if(moveTimerID){
         moveTimerID = null;
         collistionCheckTimerID = null;
         clearInterval(moveTimerID);
         clearInterval(collistionCheckTimerID);
         document.removeEventListener('keydown', moveFrog);
     }else{
         moveTimerID = setInterval(autoMoveObjects, 1000)
         collistionCheckTimerID = setInterval(winOrLose, 100)
         document.addEventListener('keydown', moveFrog)
    }
})

function winOrLose(){
    collision();
    win();
}
