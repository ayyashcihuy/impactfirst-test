// Unit Test
let n = 99;
// Function
function OpenSource(n) {
  let result = [];
  for (let x = 1; x <= n; x++) {
    if (x % 3 === 0) {
      if (x % 7 === 0) {
        result.push("OpenSource");
      } else {
        result.push("Open");
      }
    } else if (x % 7 === 0) {
      result.push("Source");
    } else {
      result.push(x);
    }
  }
  result = result.join(", ");
  return result;
}
// Result
console.log(OpenSource(n));
