/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(var i = 0;i<nums.length;i++){
        if(nums.lastIndexOf(nums[i]) != nums.indexOf(nums[i])){
            return true
        }
    }

    return false;

    // var obj = {};
    
    // for(var i = 0; i < nums.length; i++){
    //     obj[nums[i]] = obj[nums[i]] + 1 || 1;
        
    //     if(obj[nums[i]] > 1) return true;
    // }
    
    // return false;
};

