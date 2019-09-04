/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num === 1 || num === 4){
        return true;
    }
    let res = 0,n = 3;
    while(res < num){
        res = Math.pow(n,2);
        n++;
    }
    if(res === num){
        return true;
    }
    return false;
};

