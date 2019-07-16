/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(!nums.length){
        return null;
    }
    nums = nums.sort();
    var hrefLen = Math.floor(nums.length /2) ;
    var hashSet = new Set(nums);
    for(let v of hashSet){
        var mix = nums.lastIndexOf(v) - nums.indexOf(v);
        if(mix >= hrefLen){
          return v
        }
    }

    return nums[0];
};

