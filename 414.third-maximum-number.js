/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums =  [...new Set(nums)].sort((a,b)=>b-a)

    if(nums.length < 3){
        return nums[0]
    }else{
        return nums[2]
    }
};
// @lc code=end

