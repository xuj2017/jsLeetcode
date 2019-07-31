/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for(let i = 0;i<nums.length;i++){
        var index = nums.indexOf(nums[i],i);
        var nextIndex = nums.indexOf(nums[i],index+1)
        if(nextIndex <= index){
            continue;
        }
        if(nextIndex -index <= k){
            return true;
        }
    }

    return false
};

