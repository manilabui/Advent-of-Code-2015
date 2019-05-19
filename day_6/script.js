const fs = require('fs');

const createRow = (length, isBool = true) => {
  const result = [];

  for (let i = 0; i < length; i++) {
    isBool ? result[i] = false : result[i] = 0;
  }

  return result;
}

const countLights = (grid, isBool = true) => {
  const gridArr = Object.values(grid);

  const result = gridArr.reduce((acc, arr) => {
    const arrLength = arr.length;
    let counter = 0;

    for(let i = 0; i < arrLength; i++) {
      const currLight = arr[i];

      if (currLight) {
        isBool ? counter++ : counter += currLight;
      }
    }

    return acc + counter;
  }, 0);

  return result;
}

// part 1
fs.readFile('day_6/input.txt', (err, data) => {
  const input = data.toString().split('\n');
  const grid = {};
  const gridRow = createRow(1000);

  for(let i = 0; i < input.length; i++) {
  	const currInstruction = input[i].split(' ');
  	const midInstruction = currInstruction[3];
  	const firstCorner = midInstruction === 'through' ? currInstruction[2].split(',') : currInstruction[1].split(',');
  	const secondCorner = midInstruction === 'through' ? currInstruction[4].split(',') : midInstruction.split(',');
  	const firstRow = parseInt(firstCorner[0]);
  	const lastRow = parseInt(secondCorner[0]);
  	const firstCol = parseInt(firstCorner[1]);
  	const lastCol = parseInt(secondCorner[1]);

  	for(let j = firstRow; j <= lastRow; j++) {
  		const currGridRow = grid[j];
  		const offSwitch = currInstruction[1] === 'off' ? true : false;
  		const onSwitch = currInstruction[1] === 'on' ? true : false;

  		if (!currGridRow && offSwitch) continue;
  		if (!currGridRow) grid[j] = [...gridRow];

  		for(let k = firstCol; k <= lastCol; k++) {
				if (offSwitch) {
					grid[j][k] = false;
					continue;
				}
				if (onSwitch) {
					grid[j][k] = true;
					continue;
				}
				else grid[j][k] = !grid[j][k];
  		}
  	}
  }

  console.log(countLights(grid));
});

// part 2
fs.readFile('day_6/input.txt', (err, data) => {
  const input = data.toString().split('\n');
  const grid = {};
  const gridRow = createRow(1000, false);

  for(let i = 0; i < input.length; i++) {
  	const currInstruction = input[i].split(' ');
  	const midInstruction = currInstruction[3];
  	const firstCorner = midInstruction === 'through' ? currInstruction[2].split(',') : currInstruction[1].split(',');
  	const secondCorner = midInstruction === 'through' ? currInstruction[4].split(',') : midInstruction.split(',');
  	const firstRow = parseInt(firstCorner[0]);
  	const lastRow = parseInt(secondCorner[0]);
  	const firstCol = parseInt(firstCorner[1]);
  	const lastCol = parseInt(secondCorner[1]);

  for(let j = firstRow; j <= lastRow; j++) {
  		const currGridRow = grid[j];
  		const offSwitch = currInstruction[1] === 'off' ? true : false;
  		const onSwitch = currInstruction[1] === 'on' ? true : false;

  		if (!currGridRow && offSwitch) continue;
  		if (!currGridRow) grid[j] = [...gridRow];
  			
			for(let k = firstCol; k <= lastCol; k++) {
  			if (offSwitch) {
  				if (grid[j][k]) grid[j][k]--;
  				continue;
  			}
  			if (onSwitch) {
  				grid[j][k]++;
  				continue;
  			}
  			else grid[j][k] += 2;
  		}
  	}
  }

  console.log(countLights(grid, false));
});