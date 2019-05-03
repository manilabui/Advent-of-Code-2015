const fs = require('fs');

fs.readFile('day-one/input.txt', (err, data) => {
	const input = data.toString();
	const floorsUp = input.split(')').join('').length;
	const floorsDown =  input.split('(').join('').length;
	const result = floorsUp - floorsDown;

	console.log(result);
})

fs.readFile('day-one/input.txt', (err, data) => {
	const input = data.toString().split('');
  const result = input.reduce((acc, currChar) => currChar === '(' ? ++acc : --acc, 0);

	console.log(result);
});

fs.readFile('day-one/input.txt', (err, data) => {
	const input = data.toString();
	let currFloor = 0;

	for (let i = 0; i < input.length; i++) {
		input[i] === '(' ? currFloor++ : currFloor--;
		if (currFloor < 0) return console.log(i + 1);
	}
});