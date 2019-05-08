const fs = require('fs');

// part 1
fs.readFile('day-two/input.txt', (err, data) => {
  const input = data.toString().split('\n');

  const result = input.reduce((acc, currBox, i) => {
  	const currArr = currBox.split('x').map(elem => parseInt(elem));

  	const sideA = currArr[0] * currArr[1];
  	const sideB = currArr[0] * currArr[2];
  	const sideC = currArr[1] * currArr[2];
  	const smallestSide = [sideA, sideB, sideC].reduce((a, b) => (a < b) ? a : b);
		const currTotal = (2 * sideA) + (2 * sideB) + (2 * sideC) + smallestSide;

  	return acc += currTotal;
  }, 0);

	console.log(result);
});

// part 2
fs.readFile('day-two/input.txt', (err, data) => {
  const input = data.toString().split('\n');

  const result = input.reduce((acc, currBox, i) => {
    const currArr = currBox.split('x').map(elem => parseInt(elem));

    const l = currArr[0];
    const w = currArr[1];
    const h = currArr[2];
    const volume = l * w * h;
    
    let perimeter = (2 * l) + (2 * w);
    if (l >= w && l >= h) perimeter = (2 * w) + (2 * h);
    else if (w >= l && w >= h) perimeter = (2 * l) + (2 * h);
    
    const currTotal = volume + perimeter;

    return acc += currTotal;
  }, 0);

  console.log(result);
});