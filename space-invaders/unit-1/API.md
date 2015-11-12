# Application Programming Interface (API)

Below is documentation of all the basic functions for the Space Invader board game.

## start(greeting, id)
Draws the game board.  By default it's made up of 8 x 8 squares, in which the character you control can only occupy one square.  The character will start in upper left hand corner of the board and pointing downwards.

##### Parameters

 * `greeting` - string, optional.  The greeting to display on top of the board. Defaults to 'Have fun playing!'.
 * `id` - string, optional.  The id of the html element to place the board in.  Defaults to 'board'.

##### Example
`start('Good luck!')  # Creates board with a custom greeting and under the default id`

## draw()
Will redraw your board, processing any pervious instructions submitted to move your character.

## wait(num)
Wait before your character processes any other movement commands.  This will actually allow you to see your character move, otherwise all commands will be processed immediately.

### Parameters
* `num` - number, required.  The number of seconds to wait before executing the next commands.

### Example
`wait(5)  # waits 5 seconds`

## turnLeft()
Your character will turn to his left, 90 degrees.

## turnRight()
Your character will turn to the right, 90 degrees.

## turnAround()
Your character will turn around, 180 degrees.

## move(num)
Will move your character, in the direction it is currently face.

### Parameters

* `num` - number, required. The number of spaces to move the character.

### Example
`move(3)  # moves the character 3 spaces.`

## color()
Colors the current square.  

### Parameters
* `c` - string, required. Represents the color to use for the current square.

### Example
* `color("blue")  # colors current square blue.`

