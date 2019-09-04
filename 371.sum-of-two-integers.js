/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if(a === 0 || b === 0) return a || b;
    var temp;
    while (b != 0){
        temp = a ^ b;
        b = (a & b) << 1;
        a = temp
    }

    return a

};
//减法
var getMix = function(a, b) {
    if(a === 0 || b === 0) return a || -b;
     b = ~b;
    var temp;
    while (b != 0){
        temp = a ^ b;
        b = (a & b) << 1;
        a = temp
    }

    return a+1

};

