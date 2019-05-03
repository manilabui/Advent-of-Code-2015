const fs = require('fs');

fs.readFile('day-two/input.txt', (err, data) => {
  const input = data.toString().split('\n');

  const result = input.reduce((acc, currBox, i) => {
  	const currArr = currBox.split('x');
  	const numArr = currArr.map(elem => parseInt(elem));

  	const sideA = numArr[0] * numArr[1];
  	const sideB = numArr[0] * numArr[2];
  	const sideC = numArr[1] * numArr[2];
  	const smallestSide = [sideA, sideB, sideC].reduce((a, b) => (a < b) ? a : b);
		const currTotal = (2 * sideA) + (2 * sideB) + (2 * sideC) + smallestSide;

  	return acc += currTotal;
  }, 0);

	console.log(result);
});

// fs.readFile('day-two/input.txt', (err, data) => {
// 	console.time('part-two');

//   const input = data.toString().split('/n');
  

// 	console.log(input);
//   console.timeEnd('part-two');
// });