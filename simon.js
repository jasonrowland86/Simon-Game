$(function() {
    console.log( "test" );
//give credit from stackoverflow
//https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
Array.prototype.equals = function (array) {

  for (let i = 0, l=this.length; i < l; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i]))
      return false;
    }
    else if (this[i] != array[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
}
//Variables
let playerArr = [];
let computerArr = [];
let boxes = document.getElementsByClassName('box');
let container = document.getElementById('container');
let level = 1;
let score = 0;
let turn = 1;

//****** Create board ******
function createGameBoard() {
  for(let i = 1; i <= 4; i++){
     let newDiv = document.createElement('div');
     newDiv.id = i;
     newDiv.className = 'box box' + i;
     container.appendChild(newDiv);
  }
    document.getElementById('h1').innerText = "SIMON";
    document.getElementById('start').innerText = "START";
    document.getElementById('start').addEventListener('click', playGame);
}
createGameBoard()


//****** function that runs game ******
function playGame() {
  console.log('playGame');
  if(turn === 1){
    computerArr.push(Math.floor((Math.random() * 4) + 1));
    console.log(computerArr);
    // computerArr.forEach(animateSequence);
    turn = 0;
  } else {
      console.log('switched to player')
      for(let i=0; i<boxes.length; i++) {
        boxes[i].addEventListener('click', playerTurn);
        if(checkPlayerTurn() && playerArr.length === computerArr.length) {
          for(let i=0; i<boxes.length; i++) {
            boxes[i].removeEventListener('click', playerTurn);
          }
          level++;
          score + 10;
          turn = 1;
        } else {
          //animate board to shake on error
          document.getElementById('h1').innerText = 'GAME OVER'
          document.getElementById('score').innerText = `Final ${score}`;
          document.getElementById('start').innerHTML =
          '<button id = button>Play Again<button>';
          document.getElementById("start").addEventListener('click', createGameBoard);
        }
      }
    }
}

//****** Player turn ******
function playerTurn() {
    //on click change class and animate
    playerArr.push(this.getAttribute('id'));
    checkPlayerTurn();
}

//****** Check player turn ******
function checkPlayerTurn() {
  let result = playerArr.equals(computerArr);
  return result;
  console.log(result);
}
checkPlayerTurn()

//Play again
function playAgain() {
  container.innerHTML = '';
  playerArr = [];
  computerArr = []; //might not need this line if arr is updated in computer turn function
  //possibly set time out to fix reload bug
  createGameBoard();
}

//Animations
function animateSequence() {
  //for each loop to call light function on each item in the computerArr
}

//functions to add afte mvp
function shakeGameBoard() {
  //animation to shake game board on game over
}
//Score multiplier
function multiplyScore() {

}



});
