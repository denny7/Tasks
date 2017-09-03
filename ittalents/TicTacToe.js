var board = [
["o", "x", "o"],
["x", "o", "x"],
["o", "x", "x"]];
var win = false;
var count = 0;
for(var row = 0; row < board.length; row++){
  // Check if we have win in a row
  for(var col = 0; col < board[row].length; col++){
    if(board[row][col] === "x"){
      count++;
    }
  }
  if(count == 3){
    console.log("x wins");
    win = true;
    break;
  }
  if(count == 0){
    console.log("o wins");
    win = true;
    break;
  }
  count = 0
  //Check if we have a win in a column
  for(var kolona = 0; kolona < board.length ; kolona++){
    if(board[kolona][row] === "x"){
      count++;
    }
  }
    if(count == 3){
      console.log("x wins");
      win = true;
      break;
    }
    if(count == 0){
      console.log("o wins");
      win = true;
      break;
    }
  count = 0;
  // Check if we have a win in main diagonal
  for(var red = 0; red < board.length ; red++){
    if(board[red][red] === "x"){
      count++;
    }
  }
    if(count == 3){
      console.log("x wins");
      win = true;
      break;
    }
    if(count == 0){
      console.log("o wins");
      win = true;
      break;
    }
  count = 0;
  // Check if we have a win in the other diagonal
  for(var red = 0; red < board.length ; red++){
    if(board[red][board.length - 1 - red] === "x"){
      count++;
    }
  }
    if(count == 3){
      console.log("x wins");
      win = true;
      break;
    }
    if(count == 0){
      console.log("o wins");
      win = true;
      break;
    }
    count = 0;
}
if(win != true){
console.log("Raven!");
}
