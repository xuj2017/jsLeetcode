/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let allLen = m +n;
    for(let i = allLen - 1,mPointer = m - 1,nPointer = n -1;i>=0,mPointer >=0,nPointer>=0;i--){
        nums1[i] = (nums1[mPointer] >= nums2[nPointer]) ? nums1[mPointer--] : nums2[nPointer--]
    }
    return nums1;
};

