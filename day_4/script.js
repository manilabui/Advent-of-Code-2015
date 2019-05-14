const crypto = require('crypto')

// part 1 & 2
// basically mariotacke's solution 
// plus https://odino.org/generating-the-md5-hash-of-a-string-in-nodejs/ to create the hash
const stockingStuffer = (input, leadingZeroes = 5) => {
  const zeroes = '0'.repeat(leadingZeroes);
  let iteration = 1;

  while (true) {
  	const hash = crypto.createHash('md5').update(`${input}${iteration++}`).digest("hex")

    if (hash.substring(0, leadingZeroes) === zeroes) {
      return iteration - 1;
    }
  }
};

// part 1 solution
console.log(stockingStuffer(`ckczppom`));

// part 2 solution
console.log(stockingStuffer(`ckczppom`, 6));