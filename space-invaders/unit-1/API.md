## Application Programming Interface (API)

### start()
Draws the game board.  By default it's made up of 8 x 8 squares, in which the character you control can only occupy one square.  The character will start in upper left hand corner of the board and pointing in the southern direction.

### draw()
Will redraw your board, processing any pervious instructions submitted to move your character.

### wait(num)
Wait num seconds before your character processes any other movement commands.  This will actually allow you to see your character move, otherwise all commadns will be processed immediately.

### turnLeft()
Your character will turn to his left.

### turnRight()
Your character will turn to the right.

### turnAround()
Your character will turn around.

### move(num)
Will move your character, in the direction it is currently face, `num` spaces.

### color(c)
Colors the current square with the string `c`.  i.e `color("blue")` will color the current square blue.

