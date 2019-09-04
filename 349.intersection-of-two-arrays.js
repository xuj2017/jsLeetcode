/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var res = [];

    for(let i = 0;i<nums1.length;i++){
        if(nums2.indexOf(nums1[i])>=0 && res.indexOf(nums1[i]) === -1){
            res.push(nums1[i])
        }
    }

    return res;
};

