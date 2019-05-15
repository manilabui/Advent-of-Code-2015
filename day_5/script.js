const fs = require('fs');

// part 1
const hasThreeVowels = str => {
	const vowels = 'aeiou';
	let currVowelCount = 0;

	for(let i = 0; i < vowels.length; i++) {
		const currVowel = vowels[i];
		const currLetterCount = str.split(currVowel).length - 1;
		
		currVowelCount += currLetterCount;
		if (currVowelCount >= 3) return true;
	}
	
	return false;
}

const hasDoubleLetters = str => {
	for(let i = 0; i < str.length - 1; i++) {
		const firstChar = str[i];
		const secondChar = str[i+1];

		if (firstChar === secondChar) return true;
	}

	return false;
}

const hasNoRestricted = str => {
	const restrictedPairs = [`ab`, `cd`, `pq`, `xy`];

	for(let i = 0; i < restrictedPairs.length; i++) {
		const currPair = restrictedPairs[i];

		if (str.includes(currPair)) return false;		
	}

	return true;
}

fs.readFile('day_5/input.txt', (err, data) => {
  const input = data.toString().split('\n');
  let result = 0;

  for(let i = 0; i < input.length; i++) {
  	const currStr = input[i];

  	if (!hasThreeVowels(currStr)) continue;
  	if (!hasDoubleLetters(currStr)) continue;
	if (hasNoRestricted(currStr)) result++;
  }

  console.log(result);
});

// part 2
const hasSkippedMatch = str => {
	for(let i = 0; i < str.length - 2; i++) {
		const firstLetter = str[i];
		const secondLetter = str[i+2];

		if (firstLetter === secondLetter) return true;
	}

	return false;
}

const hasRepeatedPair = str => {
	while(str.length > 3) {
		const firstPair = str.slice(0,2);

		for(let i = 2; i < str.length - 1; i++) {
			const secondPair = str.slice(i,i+2);

			if (firstPair === secondPair) return true;
		}

		str = str.slice(1);
	}

	return false;
}

fs.readFile('day_5/input.txt', (err, data) => {
  const input = data.toString().split('\n');
  let result = 0;

  for(let i = 0; i < input.length; i++) {
  	const currStr = input[i];

  	if (!hasSkippedMatch(currStr)) continue;
	if (hasRepeatedPair(currStr)) result++;
  }

  console.log(result);
});