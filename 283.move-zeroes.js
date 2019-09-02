/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(!nums.length){
        return nums;
    }
    for(let i = nums.length-1;i>=0;i--){
        if(nums[i] === 0){
            nums.splice(i,1);
            nums.push(0)
        }
    }
    
};

