# Simon-Game

The object of the game is to repeat a randomly generated pattern by clicking the corresponding tile that lights up and makes a sound. the sequence is increased by 1 each round until the player loses.

## Technical Discussion

The pieces of the game board will be HTML elements styled with CSS.
Javascript will be used to handle and store player moves and compare for win.
As well as interact with the page.

The board is created and updated throughout the game with javascript DOM manipulation.
A random number is generated that corresponds with a certain div.
The sequence of divs are animated to light up with a function that adds and removes a class that animates the opacity of a given div from .5 to 1, creating a light up effect.
Then the playerTurn function is called that waits for the player to repeat the pattern by clicking on each div shown. The players sequence is stored in an array and checked to be correct each time a div is clicked.
if all are correct the computers turn function is called, another random number is added to the sequence, animated, and the process repeats until the player loses.
A simple HTML structure was used, I used about 10 javascript functions to run the game, and a few simple CSS animations to add to the player experience.

### Notes on Game Structure

The animation sequence turned out to be the most difficult and I think I could use a better method of setting up each Simon tile and identifying it.

### User Story

The game is simple. The player presses start and the computer displays the first random sequence by lighting up a square. Then the game waits for the user to repeat the sequence by clicking each square. If correct the computer pattern adds one to the sequence and this is repeated until the player loses.

## Problems to solve

I need to finish adding the audio to the animation sequence and the player click. The game logic works but audio is essential to the player experience.
I would like to speed the game up as it gets harder, or come up with a few more ways to add to the game play and have options instead of the one linear mode that it is currently.
