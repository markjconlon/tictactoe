var gameBoard = [[1, 0, 0], [0, 1, 0], [0, 0, 0]]
var coords = []

for (var i = 0; i < gameBoard.length; i++) {
  var rowSum = 0;
  for (var j = 0; j < gameBoard.length; j++) {
    rowSum += gameBoard[i][j];
  }
  if (rowSum === 2 || rowSum === -2 ) {
    console.log("Row Win");
    coords.push(i);
    if (gameBoard[i][0] === gameBoard[i][1]) {
      coords.push(2);
    } else if (gameBoard[i][0] === gameBoard[i][2]) {
      coords.push(1);
    } else if (gameBoard[i][1] === gameBoard[i][2]) {
      coords.push(0);
    }
    console.log(coords);
  }
}
for (var k = 0; k < gameBoard.length; k++) {
  var colSum = 0;
  for (var l = 0; l < gameBoard.length; l++) {
    colSum += gameBoard[l][k];
  }
  if (colSum === 2 || colSum === -2) {
    console.log("Col Win");
    if (gameBoard[0][k] === gameBoard[1][k]) {
      coords.push(2);
    } else if (gameBoard[0][k] === gameBoard[2][k]) {
      coords.push(1);
    } else if (gameBoard[1][k] === gameBoard[2][k]) {
      coords.push(0);
    }
    coords.push(k)
    console.log(coords);
  }
}
if ((gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2]) === 2 || (gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2]) === -2) {
  if (gameBoard[0][0] === gameBoard[1][1]) {
    coords.push(2,2);
  } else if (gameBoard[0][0] === gameBoard[2][2]) {
    coords.push(1,1);
  } else if (gameBoard[1][1] === gameBoard[2][2]) {
    coords.push(0,0);
  }
  console.log(coords);
} else if ((gameBoard[2][0] + gameBoard[1][1] + gameBoard[0][2]) === 2 || (gameBoard[2][0] + gameBoard[1][1] + gameBoard[0][2]) === -2){
  if (gameBoard[2][0] === gameBoard[1][1]) {
    coords.push(0,2);
  } else if (gameBoard[0][2] === gameBoard[1][1]) {
    coords.push(2,0);
  } else if (gameBoard[0][2] === gameBoard[2][0]) {
    coords.push(1,1);
  }
  console.log(coords);
}
