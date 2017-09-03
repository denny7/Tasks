var alive = "@";
var dead = "*";
var arr =
[ [dead,alive, dead, dead, alive, alive, dead, dead, alive ],
              [dead, dead, alive, dead, alive, alive, alive, alive, dead],
              [alive, alive, alive, alive, alive, dead, dead, alive, alive],
              [dead, alive, alive, dead, alive, alive, alive, dead, alive],
              [alive, dead, alive, dead, alive, dead, alive, alive, alive],
              [dead, alive, dead, dead, alive, alive, dead, dead, alive],
              [alive, dead, alive, dead, alive, dead, alive, dead, dead] ];
var len = arr.length - 1;
for (var row = 0; row < arr.length; row++) {
    for (var col = 0; col < arr[row].length; col++) {
        process.stdout.write(arr[row][col] + " ");
    }
    console.log();
}
var masiv = new Array(arr.length);
for (var index = 0; index < arr.length; index++) {
  masiv[index] = new Array(arr[0].length);
}
var generation = 1;
var countAlive = 0;
var countDead = 0;
while(generation != 101){
  console.log("Generation: " + generation)
    if(generation % 2 == 0){
     arr = masiv.slice()
    }
for (var row = 0; row < arr.length; row++) {
    for (var col = 0; col < arr[row].length; col++) {
      if (arr[row][col] == alive){
        if (row == 0) {
            if (col == 0) {
                if (arr[row][col + 1] == alive) {
                  countAlive++;
                }
                if (arr[row + 1][col] == alive) {
                  countAlive++;
                }
                if (arr[row + 1][col + 1] == alive) {
                  countAlive++;
                }
            }
            if (col == arr[row].length - 1) {
                if (arr[row][col - 1] == alive) {countAlive++;}
                if (arr[row + 1][col - 1] == alive) {countAlive++;}
                if (arr[row + 1][col] == alive) {countAlive++;}
            }
            if (col != 0 && col != arr[row].length - 1) {
                if (arr[row][col - 1] == alive) {countAlive++;}
                if (arr[row][col + 1] == alive) {countAlive++;}
                if (arr[row + 1][col - 1] == alive) {countAlive++;}
                if (arr[row + 1][col] == alive) {countAlive++;}
                if (arr[row + 1][col + 1] == alive) {countAlive++;}

            }
        }
        if (row == len) {
            if (col == 0) {
                if (arr[row][col + 1] == alive) {countAlive++;}
                if (arr[row - 1][col] == alive) {countAlive++;}
                if (arr[row - 1][col + 1] == alive) {countAlive++;}
            }
            if (col == arr[row].length - 1) {
                if (arr[row - 1][col - 1] == alive) {countAlive++;}
                if (arr[row - 1][col] == alive) {countAlive++;}
                if (arr[row][col - 1] == alive) {countAlive++;}
            }
            if (col != 0 && col != arr[row].length - 1) {
                if (arr[row - 1][col - 1] == alive) {countAlive++;}
                if (arr[row - 1][col] == alive) {countAlive++;}
                if (arr[row - 1][col + 1] == alive) {countAlive++;}
                if (arr[row][col - 1] == alive) {countAlive++;}
                if (arr[row][col + 1] == alive) {countAlive++;}
            }
        }
        if ((row != 0 && row != len) && col == 0) {
            if (arr[row - 1][col] == alive) {countAlive++;}
            if (arr[row - 1][col + 1] == alive) {countAlive++;}
            if (arr[row][col + 1] == alive) {countAlive++;}
            if (arr[row + 1][col] == alive) {countAlive++;}
            if (arr[row + 1][col + 1] == alive) {countAlive++;}

        }
        if ((row != 0 && row != len) && col == arr[row].length -1) {
            if (arr[row - 1][col - 1] == alive) {countAlive++;}
            if (arr[row - 1][col] == alive) {countAlive++;}
            if (arr[row][col - 1] == alive) {countAlive++;}
            if (arr[row + 1][col - 1] == alive) {countAlive++;}
            if (arr[row + 1][col] == alive) {countAlive++;}
        }
        if (row != 0 && row != len && col != 0 && col != arr[row].length -1){
          if (arr[row - 1][col - 1] == alive) {countAlive++;}
          if (arr[row - 1][col] == alive) {countAlive++;}
          if (arr[row - 1][col + 1] == alive) {countAlive++;}
          if (arr[row][col - 1] == alive) {countAlive++;}
          if (arr[row][col] == alive) {countAlive++;}
          if (arr[row][col + 1] == alive) {countAlive++;}
          if (arr[row + 1][col - 1] == alive) {countAlive++;}
          if (arr[row + 1][col] == alive) {countAlive++;}
          if (arr[row + 1][col + 1] == alive) {countAlive++;}
        }
        if((countAlive < 2 || countAlive > 3) && countAlive !== 0){
          masiv[row][col] = dead;
        } else {
          masiv[row][col] = alive;
        }
      }else{
        if (arr[row][col] == dead){
          if (row == 0) {
              if (col == 0) {
                  if (arr[row][col + 1] == alive) {
                    countDead++;
                  }
                  if (arr[row + 1][col] == alive) {
                    countDead++;
                  }
                  if (arr[row + 1][col + 1] == alive) {
                    countDead++;
                  }
              }
              if (col == arr[row].length - 1) {
                  if (arr[row][col - 1] == alive) {countDead++;}
                  if (arr[row + 1][col - 1] == alive) {countDead++;}
                  if (arr[row + 1][col] == alive) {countDead++;}
              }
              if (col != 0 && col != arr[row].length - 1) {
                  if (arr[row][col - 1] == alive) {countDead++;}
                  if (arr[row][col + 1] == alive) {countDead++;}
                  if (arr[row + 1][col - 1] == alive) {countDead++;}
                  if (arr[row + 1][col] == alive) {countDead++;}
                  if (arr[row + 1][col + 1] == alive) {countDead++;}

              }
          }
          if (row == len) {
              if (col == 0) {
                  if (arr[row][col + 1] == alive) {countDead++;}
                  if (arr[row - 1][col] == alive) {countDead++;}
                  if (arr[row - 1][col + 1] == alive) {countDead++;}
              }
              if (col == arr[row].length - 1) {
                  if (arr[row - 1][col - 1] == alive) {countDead++;}
                  if (arr[row - 1][col] == alive) {countDead++;}
                  if (arr[row][col - 1] == alive) {countDead++;}
              }
              if (col != 0 && col != arr[row].length - 1) {
                  if (arr[row - 1][col - 1] == alive) {countDead++;}
                  if (arr[row - 1][col] == alive) {countDead++;}
                  if (arr[row - 1][col + 1] == alive) {countDead++;}
                  if (arr[row][col - 1] == alive) {countDead++;}
                  if (arr[row][col + 1] == alive) {countDead++;}
              }
          }
          if ((row != 0 && row != len) && col == 0) {
              if (arr[row - 1][col] == alive) {countDead++;}
              if (arr[row - 1][col + 1] == alive) {countDead++;}
              if (arr[row][col + 1] == alive) {countDead++;}
              if (arr[row + 1][col] == alive) {countDead++;}
              if (arr[row + 1][col + 1] == alive) {countDead++;}

          }
          if ((row != 0 && row != len) && col == arr[row].length -1) {
              if (arr[row - 1][col - 1] == alive) {countDead++;}
              if (arr[row - 1][col] == alive) {countDead++;}
              if (arr[row][col - 1] == alive) {countDead++;}
              if (arr[row + 1][col - 1] == alive) {countDead++;}
              if (arr[row + 1][col] == alive) {countDead++;}
          }
          if (row != 0 && row != len && col != 0 && col != arr[row].length -1){
            if (arr[row - 1][col - 1] == alive) {countDead++;}
            if (arr[row - 1][col] == alive) {countDead++;}
            if (arr[row - 1][col + 1] == alive) {countDead++;}
            if (arr[row][col - 1] == alive) {countDead++;}
            if (arr[row][col] == alive) {countDead++;}
            if (arr[row][col + 1] == alive) {countDead++;}
            if (arr[row + 1][col - 1] == alive) {countDead++;}
            if (arr[row + 1][col] == alive) {countDead++;}
            if (arr[row + 1][col + 1] == alive) {countDead++;}
          }
          if(countDead == 3){
              masiv[row][col] = alive;
          } else {
            masiv[row][col] = dead;
          }
        }
      }
         countAlive = 0;
         countDead = 0;
process.stdout.write(masiv[row][col] + " ");
}
console.log();

}
generation++
}
