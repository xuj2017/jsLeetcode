/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for(var i = 0;i<nums.length;i++){
        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
            return nums[i]
        }
    }
};

