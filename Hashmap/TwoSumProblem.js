const TwoSumProblem = (nums, target) => {
  const numToIndex = {};
  let num;
  for (let i = 0; i < nums.length; i++) {
    num = target - nums[i];
    if (numToIndex.hasOwnProperty(num)) {
      return [numToIndex[num], i];
    } else {
      numToIndex[nums[i]] = i;
    }
  }
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log("Indices ", TwoSumProblem(nums, target));
