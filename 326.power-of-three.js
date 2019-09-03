/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while(n >= 3){
        n = n/3;
    }
    return n == 1;
};

