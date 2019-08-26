/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    num = num.toString();
    if(num.length === 1){
        return num
    }
    var res = num.split("").reduce((prev,curr)=>parseInt(prev) +parseInt(curr))
    return addDigits(res)
};

