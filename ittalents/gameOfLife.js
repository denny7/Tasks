var world = [
    ['@', '*', '@', '@', '*', '@'],
    ['*', '*', '@', '*', '*', '*'],
    ['@', '*', '*', '*', '@', '*'],
    ['*', '*', '*', '@', '@', '@'],
    ['@', '*', '@', '@', '@', '@']
];

for (var day = 1; day <= 10; day++) {
    console.log('Day ' + day);

    for (var row = 0; row < world.length; row++) {
        for (var col = 0; col < world[row].length; col++) {

            var aliveCount = 0;

            // iterate all neighbours of the current cell
            for (var r = row - 1; r <= row + 1; r++) {
                if ((r >= 0) && (r < world.length)) {
                    for (var c = col - 1; c <= col + 1; c++) {
                        if ((c >= 0) && (c < world[row].length)) {
                            if (world[r][c] === '@') {
                                aliveCount++;
                            }
                        }
                    }
                }
            }

            if (world[row][col] === '@') {
                aliveCount--;

                if ((aliveCount < 2) || (aliveCount > 3)) {
                    world[row][col] = '*';
                }
            } else {
                if (aliveCount > 2) {
                    world[row][col] = '@';
                }
            }
        }
    }

    for (var row = 0; row < world.length; row++) {
        for (var col = 0; col < world[row].length; col++) {
            process.stdout.write(world[row][col] + ' ');
        }
        console.log();
    }

    console.log('\n');
}
