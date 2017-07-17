$(function() {
    console.log( "test" );
//give credit from stackoverflow for array equals prototype function
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
     newDiv.id = "simon" + i;
     newDiv.className = 'box box'+i;
     container.appendChild(newDiv);
  }
    document.getElementById('h1').innerText = "SIMON";
    document.getElementById('start').innerText = "START";
    document.getElementById('level').innerText = "Level";
    document.getElementById('score').innerText = "Score";
    document.getElementById('start').addEventListener('click', playGame);
}
createGameBoard()

function playGame() {
  document.getElementById('start').innerText = "Reset";
  document.getElementById('start').removeEventListener('click', playGame);
  document.getElementById('start').addEventListener('click', reset);
  //add a setTimeout only used once to delay the first move
  computerTurn();
}

function computerTurn() {
    document.getElementById('level').innerText = `Level ${level}`;
    computerArr.push(Math.floor((Math.random() * 4) + 1));
    console.log(computerArr);
    for(let i=0; i<boxes.length; i++) {
      boxes[i].removeEventListener('click', playerMove);
      boxes[i].removeEventListener('click', lightUp);
      boxes[i].removeEventListener('click', playSound);
    }
    animateSequence();
    playerTurn();
}

function playerTurn() {
  for(let i=0; i<boxes.length; i++) {
    boxes[i].addEventListener('click', playerMove);
    boxes[i].addEventListener('click', lightUp);
    boxes[i].addEventListener('click', playSound);
  }
}

function playerMove() {
  playerArr.push(parseInt(this.getAttribute('id').replace("simon", ""), 10));
  console.log(playerArr);
  if(checkPlayerTurn() === true && playerArr.length === computerArr.length) {
    playerArr = [];
    level++;
    score += 10;
    document.getElementById('score').innerText = `Score ${score}`;
    setTimeout(computerTurn, 1000);
  } else if(checkPlayerTurn() === false) {
    gameOver(); //animates board to shake
    gameOverSound();
    document.getElementById('wrapper').innerHTML += '<p id=p>GAME</br>OVER</br><span>FINAL SCORE </span></br></p>';
    document.getElementById('score').innerText = '';
    document.getElementById('level').innerText = '';
    document.getElementById('p').innerHTML += `${score}`;
    document.getElementById('start').innerHTML = 'Play Again';
  }
}

function checkPlayerTurn() {
  let result = playerArr.equals(computerArr);
  return result;
  console.log(result);
}

function reset() {
  let wrapper = document.getElementById('wrapper');
  let p = document.getElementById('p');
  if(wrapper.contains(p)){
      wrapper.removeChild(p);
  }
  container.innerHTML = '';
  playerArr = [];
  computerArr = [];
  level = 1;
  score = 0;
  //possibly set time out to fix reload bug
  createGameBoard();
}
//Got some help with this function from a friend.
function animateSequence() {
  let i=0,
      interval = setInterval(toggleLights, 500);

  function toggleLights(){
      let lit = document.querySelector("#simon" + computerArr[i-1]),
          next = document.querySelector("#simon" + computerArr[i]);
	 console.log(lit, next);
      if (lit && lit.classList.contains("light")){
	  	  off(lit);
	  } else if (next){
        on(next);
		    i++;
      } else {
          clearInterval(interval);
      }
    }
  function on(element){
    element.classList.add("light");
  }
  function off(element){
    element.classList.remove("light");
  }
}

function lightUp(e) {
  e.target.classList.add('light');
  setTimeout(function(){
    e.target.classList.remove('light');
  }, 500);
}

//Credit to Dan for showing me how he got his audio to play.
function playSound(e) {
  if(e.target.id === "simon1"){
    console.log('1');
    let audio = new Audio('Simon sounds/simon1.wav');
      audio.play();
  }if(e.target.id === "simon2"){
    console.log('2');
    let audio = new Audio('Simon sounds/simon2.wav');
      audio.play();
  }if(e.target.id === "simon3"){
    console.log('3');
    let audio = new Audio('Simon sounds/simon3.wav');
      audio.play();
  }if(e.target.id === "simon4"){
    console.log('4');
    let audio = new Audio('Simon sounds/simon4.wav');
      audio.play();
  }
}

function gameOverSound() {
          let audio = new Audio('Simon sounds/game_over.wav');
            audio.play();
      }



function gameOver() {
  container.classList.add('shake');
  setTimeout(function(){
    container.classList.remove('shake');
  }, 500);
}


});
