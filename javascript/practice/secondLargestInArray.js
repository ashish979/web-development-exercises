function getSecondLargest(nums) {
    let max = nums[0];
    let max2 = nums[0];
    console.log('max', 'max2', 'nums[i]')

  for (let i = 1; i < nums.length; i++){
    if (max < nums[i]) {
      max = nums[i];
    }
  }
  console.log(max, max2, nums[0])
    for (let i = 0; i < nums.length; i++){

      if(max2 < nums[i] && (nums[i] < max)){
        max2 = nums[i];
      }

      console.log(max, max2, nums[i])
    }
    return max2;
}

console.log(getSecondLargest([1,2,3,4,5]));

console.log(getSecondLargest([1,2,3,4,5, 1, 2, 6, 4]));
