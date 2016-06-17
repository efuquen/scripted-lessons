(function() {
  var root = this;
  
  var container = null;
  var canvas = null;
  var greeting = null;
  var ctx = null;
  var moves = [];
  var moreMoves = [];
  var delay = 2;
  var board = {
    color: '#000',
    sizeX: 10,
    sizeY: 8,
    values: [],
    blockSize: 100,
    lineWidth: 2
  };
  var sprite = {
    x: 0,
    y: 0,
    width: board.blockSize,
    height: board.blockSize,
    color: '#c00',
    rotate: 0,
  
    src: 'https://cdn.rawgit.com/efuquen/scripted-lessons/33aadf8176cee529bd8a49781fe717467ad4a2bc/space-invaders/img/space_invader.png'
  };
  
  var img;
  var stage = 0;
  var TO_RADIANS = Math.PI / 180;
  var running = false;
  
  function initBoard() {
    var x = 0;
    while (x < board.sizeX) {
      board.values.push([]);
      var y = 0;
      while (y < board.sizeY) {
        board.values[x].push({color: board.color});
        y++;
      }
  
      x++;
    }
  }
  
  function drawBoard() {
    var x = 0;
    while (x < board.sizeX) {
      var y = 0;
      while (y < board.sizeY) {
        colorSquare(
          x * board.blockSize, y * board.blockSize, board.values[x][y].color);
        y++;
      }
      x++;
    }
    
    var vLineIndices = [];
    for (var i = 0; i < board.sizeX; i++) {
      vLineIndices.push(board.blockSize * (1 + i));
    }
    var hLineIndices = [];
    for (var i = 0; i < board.sizeY; i++) {
      hLineIndices.push(board.blockSize * (1 + i));
    }
    
    verticalLines(vLineIndices, board.lineWidth, board.sizeY * board.blockSize);
    horizontalLines(hLineIndices, board.lineWidth, board.sizeX * board.blockSize);
  }
  
  function drawSprite() {
    ctx.save();
    ctx.translate(
      sprite.x + img.width / 2, sprite.y + img.height / 2);
    ctx.rotate(sprite.rotate * TO_RADIANS);
    ctx.drawImage(img, -(img.width / 2), -(img.height / 2));
    ctx.restore();
  }
  
  function currentSquare() {
    return board.values[sprite.x / sprite.width][sprite.y / sprite.height];
  }
  
  function colorSquare(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, sprite.width, sprite.height);
  }
  
  function render() {
    drawBoard();
    drawSprite();
  }
  
  function verticalLines(xs, lineWidth, height) {
    for (var i = 0; i < xs.length; i++) {
      ctx.beginPath();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = lineWidth;
      ctx.moveTo(xs[i], 0);
      ctx.lineTo(xs[i], height);
      ctx.stroke();
    }
  }
  
  function horizontalLines(ys, lineWidth, width) {
    for (var i = 0; i < ys.length; i++) {
      ctx.beginPath();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = lineWidth;
      ctx.moveTo(0, ys[i]);
      ctx.lineTo(width, ys[i]);
      ctx.stroke();
    }
  }
  
  function doMove(move) {
    if (move.pixels && sprite.rotate === 90) {
      sprite.x -= move.pixels;
      console.log('move left ' + move.pixels);
    } else if (move.pixels && sprite.rotate === 270) {
      sprite.x += move.pixels;
      console.log('move right ' + move.pixels);
    } else if (move.pixels && sprite.rotate === 180) {
      sprite.y -= move.pixels;
      console.log('move up ' + move.pixels);
    } else if (move.pixels && sprite.rotate === 0) {
      sprite.y += move.pixels;
      console.log('move down ' + move.pixels);
    } else if (move.rotate) {
      if (move.rotate > 0 && move.rotate < 360 && move.rotate % 90 === 0) {
        sprite.rotate += move.rotate;
        if (sprite.rotate >= 360) {
          sprite.rotate = sprite.rotate - 360;
        }
  
        console.log('rotate ' + move.rotate + ' degrees');
      }
    }
  }
  
  function win() {
    var wonImg = new Image();
    wonImg.onload = function() {
      ctx.drawImage(wonImg, 0, 0, 800, 600);
    }
  
    wonImg.src = 'https://cdn.rawgit.com/efuquen/scripted-lessons/33aadf8176cee529bd8a49781fe717467ad4a2bc/space-invaders/img/boss.jpg'
  }
  
  function doMoves(moves) {
    if (stage === 3) {
      win();
    } else if (moves.length > 0) {
      var move = moves.shift();
      if (move.wait) {
        console.log('wait ' + move.wait + ' seconds');
        if (sprite.x === 400 && sprite.y === 400 && stage === 0) {
          console.log('Stage 1');
          stage = 1;
        }
  
        if (sprite.x === 700 && sprite.y === 0 && stage === 1) {
          console.log('Stage 2');
          stage = 2;
        }
  
        if (sprite.x === 100 && sprite.y === 200 && stage === 2) {
          console.log('Stage 3');
          stage = 3;
        }
  
        setTimeout(doMoves, move.wait * 1000, moves);
      } else if (move.color) {
        if (move.color === 'blue') {
          currentSquare().color = '#00f';
        } else if (move.color === 'green') {
          currentSquare().color = '#0f0';
        } else if (move.color === 'red') {
          currentSquare().color = '#f00';
        } else if (move.color === 'black') {
          currentSquare().color = '#000';
        } else if (move.color === 'yellow') {
          currentSquare().color = '#ff0';
        } else if (move.color === 'purple') {
          currentSquare().color = '#f0f';
        } else {
          currentSquare().color = move.color;
        }
  
        setTimeout(doMoves, move.wait * 1000, moves);
      } else {
        doMove(move);
        render();
        doMoves(moves);
      }
    } else {
      if (moreMoves.length > 0) {
        doMoves(moreMoves.shift());
      } else {
        running = false;
      }
    }
  }
  
  function movePixels(pixels) {
    moves.push({pixels: pixels});
  }
  
  function move(steps) {
    movePixels(steps * board.blockSize);
  }
  
  function moveAnimated(steps, framesPerStep, speed) {
    var totalFrames = steps * framesPerStep;
    var totalPixels = steps * board.blockSize;
    for (var i = 0; i < totalFrames; i++) {
      movePixels(totalPixels/totalFrames);
      wait(speed/framesPerStep);
    }
  }
  
  function wait(secs) {
    moves.push({wait: secs});
  }
  
  function rotate(degrees) {
    moves.push({rotate: degrees});
  }
  
  function turn(degrees) {
    rotate(degrees);
  }
  
  function turnRight() {
    turn(90);
  }
  
  function turnLeft() {
    turn(270);
  }
  
  function turnAround() {
    turn(180);
  }
  
  function color(c) {
    moves.push({color: c});
  }
  
  function draw() {
    if (running) {
      moreMoves.push(moves);
    } else {
      running = true;
      doMoves(moves);
    }
  
    moves = [];
  }
  
  function start(greetingText, containerId) {
    if (!containerId) {
      containerId = 'board';
    }
    container = document.getElementById(containerId);
    canvas = document.createElement('canvas');
    canvas.width = board.blockSize * board.sizeX;
    canvas.height = board.blockSize * board.sizeY;
    ctx = canvas.getContext('2d');
    initBoard();
    img = new Image();
    img.onload = function() {
      render();
      console.log('start');
    }
    img.src = sprite.src;
  
    greeting = document.createElement('h3');
    if (greetingText) {
      setGreeting(greetingText);
    } else {
      setGreeting('Have fun playing!');
    }
    container.appendChild(greeting);
    container.appendChild(canvas);
  
    wait(2);
  }
  
  function setGreeting(greetingText) {
    greeting.innerHTML = greetingText;
  }
  
  var ScriptedBoardGame = {
    start: start,
    move: move,
    moveAnimated: moveAnimated,
    wait: wait,
    turn: turn,
    turnLeft: turnLeft,
    turnRight: turnRight,
    turnAround: turnAround,
    draw: draw
  };
  
  function apply(other) {
    for (key in ScriptedBoardGame) {
      other[key] = ScriptedBoardGame[key];
    }
  }
  
  root.ScriptedBoardGame = ScriptedBoardGame;
  root.ScriptedBoardGame.apply = apply;
  
}).call(this);