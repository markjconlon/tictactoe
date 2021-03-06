$(function(){
  var count = 0;
  var xWin = false;
  var oWin = false;
  var xCount = 0;
  var oCount = 0;
  var draw = 0;
  var gameBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  var gameBoardId = [["tl","tm","tr"], ["ml","mm","mr"], ["bl","bm","br"]];
  var singlePlayer = true;

  function xVictory(){
    $('#gameResult').html("X WINS!");
    $('#gameResult').removeClass("displayNone");
    setTimeout(function(){
      $('#gameResult').addClass("displayNone");
    }, 1000)
  }

  function oVictory(){
    $('#gameResult').html("O WINS!");
    $('#gameResult').removeClass("displayNone");
    setTimeout(function(){
      $('#gameResult').addClass("displayNone");
    }, 1000)
  }

// Switching between Singe and 2 Players
  $('#options > span').click(function(e){
    if ($('#single').hasClass('active') && count === 0) {
      singlePlayer = false;
      $('#single').removeClass('active');
      $('#twoPlayer').addClass('active');
    } else if (count === 0) {
        singlePlayer = true;
        $('#single').addClass('active');
        $('#twoPlayer').removeClass('active');
    } else {
      $('#gameWarning').removeClass('displayNone');
      setTimeout( function(){
        $('#gameWarning').addClass('displayNone');
      }, 1500)
    }
  });

  // listen for the players first click and then the fun begins
  $('#outside > div').click(function(){
    if (count % 2 === 0 && !($(this).hasClass('x') || $(this).hasClass('o'))){
      $(this).addClass('x');
      gameBoard[$(this).attr('value')[0]][$(this).attr('value')[1]] = 1;
      count += 1;
      // computer player
      if (singlePlayer) {
        computerMove(gameBoard, gameBoardId);
      }
    } else if (!($(this).hasClass('x') || $(this).hasClass('o'))){
        $(this).addClass('o');
        gameBoard[$(this).attr('value')[0]][$(this).attr('value')[1]] = -1;
        count += 1;
    }

    //all 8 x win conditions followed by all 8 o win conditions followed by the draw condition
    for (var i = 0; i < gameBoard.length; i++) {
    var rowSum = 0;
    for (var j = 0; j < gameBoard.length; j++) {
      rowSum += gameBoard[i][j];
    }
    if (rowSum === 3) {
      xVictory();
      xWin = true;
    } else if (rowSum === -3) {
      oVictory();
      oWin = true;
    }
  }

  for (var k = 0; k < gameBoard.length; k++) {
    var colSum = 0;
    for (var l = 0; l < gameBoard.length; l++) {
      colSum += gameBoard[l][k];
    }
    if (colSum === 3) {
      xVictory();
      xWin = true;
    } else if (colSum === -3) {
      oVictory();
      oWin = true;
    }
  }
  if ((gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2]) === 3 || (gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2]) === -3) {
    if ((gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2]) === 3) {
      xVictory();
      xWin = true;
    } else {
      oVictory();
      oWin = true;
    }
  } else if ((gameBoard[2][0] + gameBoard[1][1] + gameBoard[0][2]) === 3 || (gameBoard[2][0] + gameBoard[1][1] + gameBoard[0][2]) === -3){
      if ((gameBoard[2][0] + gameBoard[1][1] + gameBoard[0][2]) === 3) {
        xVictory();
        xWin = true;
      } else {
        oVictory();
        oWin = true;
      }
  } else if (count === 9){
    $('#gameResult').html("DRAW");
    $('#gameResult').removeClass("displayNone");
    setTimeout(function(){
      $('#gameResult').addClass("displayNone");
    }, 2000);
  }
    // after win lose or draw the classes x or o, are removed and all relevant counters are reset
    if (xWin) {
      xCount += 1;
      $('#numXWins').html(' ' + xCount);
      $('#outside > div').removeClass();
      count = 0;
      xWin = false;
      gameBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    } else if (oWin){
      oCount += 1;
      $('#numOWins').html(' ' + oCount);
      $('#outside > div').removeClass();
      count = 0;
      oWin = false;
      gameBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    } else if (count === 9) {
      draw += 1;
      $('#draw').html(' ' + draw);
      $('#outside > div').removeClass();
      count = 0;
      gameBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    }
  });

  function computerMove(gameBoard, gameBoardId, count){
    // check for win condition from ttt.js
    let coords = []
    // basically from here to the comment "make move" we are checking if there are any xx or oo patterns that need to be dealt with
    // if its oo then the computer will complete and win otherwise the computer is preventing the player from winning
    //that position to deal with the condition is set in coords
    //this for loop and if statement checks rows
    for (var i = 0; i < gameBoard.length; i++) {
      var rowSum = 0;
      for (var j = 0; j < gameBoard.length; j++) {
        rowSum += gameBoard[i][j];
      }
      if (rowSum === 2 || rowSum === -2 ) {
        coords.push(i);
        if (gameBoard[i][0] === gameBoard[i][1]) {
          coords.push(2);
        } else if (gameBoard[i][0] === gameBoard[i][2]) {
          coords.push(1);
        } else if (gameBoard[i][1] === gameBoard[i][2]) {
          coords.push(0);
        }
      }
    }
    //this for loop and if statement checks columns
    for (var k = 0; k < gameBoard.length; k++) {
      var colSum = 0;
      for (var l = 0; l < gameBoard.length; l++) {
        colSum += gameBoard[l][k];
      }
      if (colSum === 2 || colSum === -2) {
        if (gameBoard[0][k] === gameBoard[1][k]) {
          coords.push(2);
        } else if (gameBoard[0][k] === gameBoard[2][k]) {
          coords.push(1);
        } else if (gameBoard[1][k] === gameBoard[2][k]) {
          coords.push(0);
        }
        coords.push(k)
      }
    }
    //this checks the outliers (being the two diagonal cases)
    if ((gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2]) === 2 || (gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2]) === -2) {
      if (gameBoard[0][0] === gameBoard[1][1]) {
        coords.push(2,2);
      } else if (gameBoard[0][0] === gameBoard[2][2]) {
        coords.push(1,1);
      } else if (gameBoard[1][1] === gameBoard[2][2]) {
        coords.push(0,0);
      }
    } else if ((gameBoard[2][0] + gameBoard[1][1] + gameBoard[0][2]) === 2 || (gameBoard[2][0] + gameBoard[1][1] + gameBoard[0][2]) === -2){
      if (gameBoard[2][0] === gameBoard[1][1]) {
        coords.push(0,2);
      } else if (gameBoard[0][2] === gameBoard[1][1]) {
        coords.push(2,0);
      } else if (gameBoard[0][2] === gameBoard[2][0]) {
        coords.push(1,1);
      }
    }
    // make move
    if (coords[0] != undefined) {
      // move is made based on win conditions
      $('#' + gameBoardId[coords[(coords.length - 2)]][coords[(coords.length - 1)]]).trigger("click");
    }else {
      // if center is open take it
      if (gameBoard[1][1] === 0) {
        $('#mm').trigger("click");
      // check diagonal corners
      } else if ((gameBoard[0][0] + gameBoard[2][2] === 2) && gameBoard [0][1] === 0) {
        $('#tm').trigger("click");
      } else if ((gameBoard[0][2] + gameBoard[2][0] === 2) && gameBoard [2][1] === 0) {
        $('#bm').trigger("click");
      // take a corner
      } else if (gameBoard[1][1] != 0) {
        if (gameBoard[0][0] === 0 && (gameBoard[0][1]=== 1 || gameBoard[1][0] === 1) && (gameBoard[0][0] === 0)) {
          $('#tl').trigger("click");
        }else if ((gameBoard[0][2] === 0) && (gameBoard[1][2]=== 1 || gameBoard[2][1] === 1) && (gameBoard[2][2] === 0)) {
          $('#br').trigger("click");
        }else if ((gameBoard[2][2] === 0) && (gameBoard[0][2] === 0)) {
          $('#tr').trigger("click");
        }else if ((gameBoard[2][0] === 0) && (gameBoard[2][0] === 0)) {
          $('#bl').trigger("click");
          // if all other options above arent met then it doesn't matter where the play is so we loop through
          // every spot from top left to bottom right check if its available and then play it and then break out of the loop
        }else {
          var firstLetter = ["t", "m", "b"]
          for (var s = 0; s < gameBoard.length; s++) {
            if (gameBoard[s][0] === 0 ) {
              $('#' + firstLetter[s] + 'l').trigger("click");
              break;
            }else if (gameBoard[s][1] === 0) {
              $('#' + firstLetter[s] + 'm').trigger("click");
              break;
            }else if (gameBoard[s][2] === 0) {
              $('#' + firstLetter[s] + 'r').trigger("click");
              break;
            }
          }
        }
      }
    }
  }

});
