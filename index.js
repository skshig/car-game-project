const startConatiner = document.querySelector('.start'); //game starts on clicking start game
const gameContainer = document.querySelector('.game');
const scoreContainer = document.querySelector('.score') //score increment after game starts


let prevoiusRenderedTime = 0;
let carPosition = {
    x:0,
    y:0
}
//controlling car using arrow keys. At start user has not pressed any buttons
let player = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}
function playGame(milliseconds){
    // console.log(milliseconds);
    // prevoiusRenderedTime = milliseconds;
    // window.requestAnimationFrame(playGame)
}

function startGame(){ //this function needs to be called when start is clicked. to do that an evenlistener needs to be added for click
    //hide the start container
    startConatiner.classList.add('hide');

    // create a car
    const car = document.createElement('div');
    car.setAttribute('class', 'car');

    // Add in inside game container
    gameContainer.appendChild(car);
    let top = 0; //bcoz of positon:abs lines stack up on each other that is why top value should be 0 but as soon as game starts value should be 100.
    //creating divider lines. 4 lines appear at a time so i<4
    for(let i =0; i < 4; i++){
        const line = document.createElement('div');
        line.classList.add('line');
        line.style.top = top + 'px';
        gameContainer.appendChild(line); //adding lines in game area
        top += 150;
    }
}

function handleKeyUp(e){
    e.preventDefault();
    console.log(e.key);
} 
function handleKeyDown(e){
e.preventDefault();
console.log(e.key);
}
window.requestAnimationFrame(playGame);
document.addEventListener('keyup', handleKeyUp);
document.addEventListener('keydown', handleKeyDown);
startConatiner.addEventListener('click',startGame) //here function name passed and not called bcoz js will call the function once event occurs or click happens
