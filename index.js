const startConatiner = document.querySelector('.start'); //game starts on clicking start game
const gameContainer = document.querySelector('.game');
const scoreContainer = document.querySelector('.score') //score increment after game starts


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
//this func is called infinitely every ms to give perception of moving cars and screen.
// car's position needs to be changed to make them look like moving
function renderGame(milliseconds){
    const car = document.querySelector('.car');
    if(player.ArrowUp){
        carPosition.y -= 5;
    }
    if(player.ArrowDown){
        carPosition.y += 5;
    }
    if(player.ArrowLeft){
        carPosition.x -= 5; 
    }
    if(player.ArrowRight){
        carPosition.x  += 5;
    }
    car.style.top = carPosition.y + 'px';
    car.style.left = carPosition.x + 'px';

    window.requestAnimationFrame(renderGame); //game should render infinitely untill collision

}

function startGame(){ //this function needs to be called when start is clicked. to do that an evenlistener needs to be added for click
    //hide the start container
    startConatiner.classList.add('hide');

    // create a car
    const car = document.createElement('div');
    car.setAttribute('class', 'car');
    const carTop = car.offsetTop;
    const carLeft = car.offsetLeft;
    carPosition.y = carTop;
    carPosition.x= carLeft;

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
    window.requestAnimationFrame(renderGame);//it is a browser api
}

function handleKeyUp(e){
    e.preventDefault(); //keys have their default func, it is to prevent that and set keys' func to our own use
    //true bcoz the time key is pressed car moves left or right
    player[e.key] = true; //true when a key is pressed and it's state is stored in our object
} 
function handleKeyDown(e){
e.preventDefault();
console.log(e.key);
// the moment key is unpressed car stops only screen moves
player[e.key] = false;
}
document.addEventListener('keyup', handleKeyUp);
document.addEventListener('keydown', handleKeyDown);
startConatiner.addEventListener('click',startGame) //here function name passed and not called bcoz js will call the function once event occurs or click happens
