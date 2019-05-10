const fs = require('fs');

// part 1
const createCol = (colLength) => {
	const col = [];

	for(let i = 0; i < colLength; i++) {
		col.push(0);
	}

	return col;
 }

fs.readFile('day_3/input.txt', (err, data) => {
  const input = data.toString();

  const grid = [[1]];
  let colCount = 1;
  let rowCount = 1;
  let currCol = 0;
  let currRow = 0;
  let houseCount = 1;

  for(let i = 0; i < input.length; i++) {
  	debugger;
  	const currChar = input[i];

  	if (currChar === '^') {
  		if (!currRow) {
  			const newCol = createCol(colCount);

  			grid.unshift(newCol);
  			rowCount++;
  			grid[currRow][currCol] = 1;
  			houseCount++;
  		} else {
  			currRow--;

  			if (!grid[currRow][currCol]) {
  				grid[currRow][currCol] = 1;
  				houseCount++;
  			}
  		}
  		continue;
  	}
  	if (currChar === 'v') {
  		currRow++;

  		if (currRow === rowCount) {
  			const newCol = createCol(colCount);

  			grid.push(newCol);
  			rowCount++;
  			grid[currRow][currCol] = 1;
  			houseCount++;
  		} else if (!grid[currRow][currCol]) {
  			grid[currRow][currCol] = 1;
  			houseCount++;
  		}
  		continue;
  	}
  	if (currChar === '<') {
  		if (!currCol) {
				for(let i = 0; i < rowCount; i++) {
					grid[i].unshift(0);
				}
				colCount++;
				grid[currRow][currCol] = 1;
  			houseCount++;
			} else {
				currCol--;

				if (!grid[currRow][currCol]) {
					grid[currRow][currCol] = 1;
  				houseCount++;
				}
			}
			continue;
		}
  	if (currChar === '>') {
  		currCol++;

  		if (currCol === colCount) {
  			for(let i = 0; i < rowCount; i++) {
					grid[i].push(0);
				}
				colCount++;
				grid[currRow][currCol] = 1;
  			houseCount++;
			} else if (!grid[currRow][currCol]) {
				grid[currRow][currCol] = 1;
  			houseCount++;
  		}
  	}
  }
  console.log(houseCount);
});

// part 1
// much simpler way I found on mariotacke's repo (I only slightly modified it)
fs.readFile('day_3/input.txt', (err, data) => {
  const input = data.toString();
		
  const grid = {
    '0,0': 1,
  };

  const position = { x: 0, y: 0 };

  for (let i = 0; i < input.length; i++) {
    const direction = {
      x: input[i] === '<' ? -1 : input[i] === '>' ? 1 : 0,
      y: input[i] === '^' ? -1 : input[i] === 'v' ? 1 : 0,
    };

    position.x += direction.x;
    position.y += direction.y;

    if (!grid[`${position.x},${position.y}`]) grid[`${position.x},${position.y}`] = 1;
  }

	console.log(Object.keys(grid).length);
});

// part 2
// mariotacke's way is better than mine for this part. duh.
fs.readFile('day_3/input.txt', (err, data) => {
  const input = data.toString();

  const grid = {
  	'0,0': 1,
  };

  const posSanta = { x: 0, y: 0 };
  const posRobot = { x: 0, y: 0 };

  for(let i = 0; i < input.length; i++) {
  	const direction = {
  		x: input[i] === '<' ? -1 : input[i] === '>' ? 1 : 0,
  		y: input[i] === 'v' ? -1 : input[i] === '^' ? 1 : 0
  	};

		if (i%2) {
			posRobot.x += direction.x;
	  	posRobot.y += direction.y;

	  	if (!grid[`${posRobot.x},${posRobot.y}`]) grid[`${posRobot.x},${posRobot.y}`] = 1;
		} else {
			posSanta.x += direction.x;
	  	posSanta.y += direction.y;

	  	if (!grid[`${posSanta.x},${posSanta.y}`]) grid[`${posSanta.x},${posSanta.y}`] = 1;
		}
  }

  console.log(Object.keys(grid).length);
});