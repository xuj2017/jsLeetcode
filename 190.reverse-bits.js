/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    n = n.toString(2).split("");
    while(n.length <32){
        n.unshift(0)
    }
    return parseInt(n.reverse().join(""),2)
};

