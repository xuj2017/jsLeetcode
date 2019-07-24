/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    n = n.toString(2).split("");
    var res = 0;
    n.forEach(item=>{
        if(item  == 1){
            res++
        }
    })
    return res;
};

