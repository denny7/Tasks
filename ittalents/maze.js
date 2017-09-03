var maze = [
    [' ', ' ', ' ', '*', '*', '*', ' ', ' '],
    [' ', ' ', '*', ' ', ' ', ' ', '*', ' '],
    [' ', '*', ' ', ' ', ' ', ' ', ' ', '*'],
    [' ', '*', ' ', ' ', ' ', ' ', ' ', '*'],
    [' ', ' ', '*', ' ', ' ', ' ', '*', ' '],
    [' ', ' ', ' ', '*', ' ', '*', ' ', ' '],
    [' ', ' ', ' ', ' ', '*', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];

function check(maze,row,col){
  if((row >= 0) && (row < maze.length) &&
  (col >= 0) && (col < maze[row].length)){
    if(maze[row][col] === " "){
      maze[row][col] = "@";

    check(maze,row + 1,col);
    check(maze,row - 1,col);
    check(maze,row,col + 1);
    check(maze,row,col - 1);
  }
}
}
check(maze,0,1);
for (var row = 0; row < maze.length; row++) {
    for (var col = 0; col < maze[row].length; col++) {
        process.stdout.write(maze[row][col] + " ");
    }
    console.log();
}
