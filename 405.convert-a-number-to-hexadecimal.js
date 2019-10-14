/*
 * @lc app=leetcode id=405 lang=javascript
 *
 * [405] Convert a Number to Hexadecimal
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num==0){
        return '0'
    }
    if (num < 0){
        num = 0xFFFFFFFF + num + 1;
    }
    var arr = [];

    while(num >= 16 ){
        let s = num % 16;
        if(s > 9){
            s = String.fromCharCode(s + 87)
        }
        num = Math.floor(num  / 16);
        arr.unshift(s)
    }
    if(num > 9){
        num = String.fromCharCode(num + 87)
    }
    arr.unshift(num)
    return arr.join("")

//     if (num < 0){
//         num = 0xFFFFFFFF + num + 1;
//     }

//   return num.toString(16).toLowerCase();
};
// @lc code=end

