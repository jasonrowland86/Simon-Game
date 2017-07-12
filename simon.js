$(function() {
    console.log( "test" );

//Variables
let playerArr = [];
let computerArr = ['box1', 'box2', 'box3', 'box4'];
let boxes = document.getElementsByClassName('box');
let container = document.getElementById('container');
//Create board

function createGameBoard1() {
  for(let i = 1; i <= 4; i++){
     let newDiv = document.createElement('div');
     newDiv.id = 'box'+i;
     newDiv.className = 'box';
     container.appendChild(newDiv);
  }
    document.getElementById('h1').innerText = "SIMON";
}
createGameBoard1()

//Event listener  should go in computerTurn function


//Computer turn
function computerTurn() {
  //shuffle the computer turn array += computerTurnArr + 1 id to array each time called
  //animate the divs to flip to a color in order of that array
  //set an interval to display colored divs for an amount of seconds
  //animate the divs to flip back to black
  //then alternate to playerTurn
}

//Player turn
function playerTurn() {
    //on click change class
    //push this id to playerArr
    //if playerArr.length === computerArr.length then check if correct
    if (checkPlayerTurn(playerTurn)){
      	//if playerArr is correct then computers turn
        //remove all event listeners from boxes
      } else {
        //animate board to shake
        //Alert Game Over
        //Display Final Score and store it on local storage
        //update a divs innerHTML to add playAgain button
        .innerHTML = '<button id = button>Play Again<button>';
      }
}
//Check player turn
function checkPlayerTurn() {
    //compare playerArr to computerArr
}

//Play again
document.getElementById("button").onclick = function() {playAgain()};

function playAgain() {
  container.innerHTML = '';
  playerArr = [];
  computerArr = []; //might not need this line if arr is updated in computer turn function
  createGameBoard1();
}

//Animation to flip box when clicked
function flipBox() {
  //change a css class
  //add flip animation
}









});
