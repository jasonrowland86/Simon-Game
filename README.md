# Simon-Game

The object of the game is to repeat a randomly generated pattern by clicking on
the same divs shown briefly and then hidden. The pattern complexity should increase and the player will try to accumulate the highest score possible until they fail.

## Technical Discussion

The pieces of the game board will be HTML elements styled with CSS.
Javascript will be used to handle and store player moves and compare for win.
As well as interact with the page.

I will use javascript to create the game board.
When start button is clicked the board will display a random pattern by
updating the CSS class of a div, this will be set to an interval and then the
board will be reset for the players turn and add an event listener will be applied
to all divs. Another set interval will be needed to time the players turn. If
player turn is correct points are accumulated. This is repeated and the interval
speed should increase until a player fails (maybe 3 fails) then an outcome is
alerted and the game is over. Game can be reset with reset button.

### Notes on Game Structure

I think the randomization may be difficult.

## Opportunities for Future Growth

I'd like to style this game similarly to my tic tac toe game so that I could later
combine these two games and possibly a third into on webpage of games to choose
between.
