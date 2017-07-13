$(function() {
    console.log( "test" );

//Variables
let playerArr = [];
let computerArr = [];
let boxes = document.getElementsByClassName('box');
let container = document.getElementById('container');
let level = 1;
let score = 0;
let turn = 1;

//Create board
function createGameBoard() {
  for(let i = 1; i <= 4; i++){
     let newDiv = document.createElement('div');
     newDiv.id = i;
     newDiv.className = 'box box'+i;
     container.appendChild(newDiv);
  }
    document.getElementById('h1').innerText = "SIMON";
    document.getElementById('start').innerText = "START";
    document.getElementById('start').addEventListener('click', playGame());
    generateRandomSequence()
}
createGameBoard()

function generateRandomSequence() {
  for(let i = 0; i < level; i++) {
    computerArr.push(Math.floor((Math.random() * 4) + 1));
  }
  console.log(computerArr);
}

//function that runs Game
function playGame() {
  if(turn === 1){
    for(let i=0; i<boxes.length; i++) {
      boxes[i].removeEventListener('click', playerTurn);
    }
    computerTurn();
  } else {
    for(let i=0; i<boxes.length; i++) {
      boxes[i].addEventListener('click', playerTurn);
    }
  }
  //need turn to end when arr lengths and arr orders match
    turn = 0;
    //select 1 index from computerArr and add back to computerArr
}

//Computer turn
function computerTurn() {
  //call div animation function to display current computerArr
}

//Player turn
function playerTurn() {
    //on click change class and animate
    playerArr.push(this.getAttribute('id'));
    if (checkPlayerTurn()){
        //select 1 index from computerArr and add back to computerArr
      } else {
        //animate board to shake
        document.getElementById('h1').innerText = 'GAME OVER'
        document.getElementById('score').innerText = `Final ${score}`;
        document.getElementById('start').innerHTML =
        '<button id = button>Play Again<button>';
        document.getElementById("start").onclick = function() {createGameBoard()};
      }
      level++;
      score + 10;
}
//Check player turn
function checkPlayerTurn() {
    _.isEqual(playerArr, computerArr);
}
 for(let i = 0; i < this.length; i++) {
        if(this[i] !== this[0]) {
            return false;
        } else {
          return true;
        }
}
//Score multiplier
function multiplyScore() {

}

//Play again
function playAgain() {
  container.innerHTML = '';
  playerArr = [];
  computerArr = []; //might not need this line if arr is updated in computer turn function
  //possibly set time out to fix reload bug
  createGameBoard1();
}

//Animations
function animateComputerArr(n) {
     light(array[i]);
     setTimeout(function() {
       i++; if (n>1) { animation_loop(n-1); } }, 800);

  //will include a flash done with css opacity change
}
function light() {

}
function shakeGameBoard() {
  //animation to shake game board on game over
}




});
