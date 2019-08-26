/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for(var i = 0;i<=nums.length;i++){
        if(nums.indexOf(i) === -1){
            return i;
        }
    }
};

