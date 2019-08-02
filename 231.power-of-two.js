/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n<= 0){
        return false;
    }
    for(var i = 0;i<n;i++){
        var res = Math.pow(2,i);
        if(res === n){
            return true
        }else if(res > n){
            return false
        }
    }
};

