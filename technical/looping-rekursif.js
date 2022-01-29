let test = [2, 11, 5, 7, , 99, 9];

function max(numArray) {
  let nums = numArray.slice();
  if (nums.length == 1) {
    return nums[0];
  }
  if (nums[0] < nums[1]) {
    nums.splice(0, 1);
  } else {
    nums.splice(1, 1);
  }
  return max(nums);
}

console.log(max(test));
