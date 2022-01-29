// Unit Testing
let str1 = "membangun negeri";
let str2 = "membangun negeri memajukan dunia";

// Function
let vowel = "aiueo"; // Only for looping condition
function vowelCounter(str) {
  let counter = 0;
  //   Without Looping
  //   let result = str.match(/[aeiou]/gi);
  //   return result === null ? 0 : result.length;
  // With Looping
  for (let x = 0; x < vowel.length; x++) {
    for (let y = 0; y < str.length; y++) {
      if (vowel[x] === str[y]) {
        counter++;
      }
    }
  }
  return counter;
}

// Result
console.log(`Number of Vowel : ${vowelCounter(str1)}`); // Expected Output: 6
console.log(`Number of Vowel : ${vowelCounter(str2)}`); // Expected Output: 13
