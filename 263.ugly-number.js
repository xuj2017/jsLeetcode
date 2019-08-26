/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    while(num >= 2){
        if(num % 2 === 0){
            num = num / 2;
        }else if(num % 3 === 0){
            num = num / 3
        }else if(num % 5 === 0){
            num = num / 5
        }else{
            return false
        }
    }

    return num === 1;
};

