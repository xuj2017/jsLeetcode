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
    // if(nums.length === 0){
    //     return 0
    // }

    // if(nums.length === 1){
    //     return nums[0]
    // }

    // let sum1 = nums[0];
    // let sum2 = nums[1];

    // for(let lastIndex = 2;lastIndex<nums.length;lastIndex ++){
    //     let temp = sum1;
    //     if(sum2 > sum1){
    //         sum1 = sum2;
    //     }

    //     sum2 = temp + nums[lastIndex]
    // }

    // return sum1 > sum2 ? sum1 : sum2

    let len = nums.length;
    if(len == 0){
        return 0
    }
    if(len == 1){
        return nums[0]
    }
    let dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0],nums[1])
    for(let i = 2;i<nums.length;i++){
        dp[i]= Math.max(dp[i-2]+nums[i],dp[i-1])
    }
    return dp[len-1]

};

