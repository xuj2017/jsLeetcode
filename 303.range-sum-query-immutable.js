/*
 * @lc app=leetcode id=303 lang=javascript
 *
 * [303] Range Sum Query - Immutable
 */
/**
 * @param {number[]} nums
 */
var arr = [];

var NumArray = function(nums) {
    arr = nums
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    var res = 0;

    for(let n = i;n<=j;n++){
        res += arr[n]
    }

    return res;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

