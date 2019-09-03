/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    while(num >= 4){
        num /= 4;
    }

    return num === 1
};

