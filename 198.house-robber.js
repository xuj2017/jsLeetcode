/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0){
        return 0
    }

    if(nums.length === 1){
        return nums[0]
    }

    let sum1 = nums[0];
    let sum2 = nums[1];

    for(let lastIndex = 2;lastIndex<nums.length;lastIndex ++){
        let temp = sum1;
        if(sum2 > sum1){
            sum1 = sum2;
        }

        sum2 = temp + nums[lastIndex]
    }

    return sum1 > sum2 ? sum1 : sum2

};

