/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (38.51%)
 * Total Accepted:    289.1K
 * Total Submissions: 750.7K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split("").reverse();
    b = b.split("").reverse();
    var len = Math.max(a.length,b.length);
    var res = [];
    var flag = 0;
    for(var i = 0;i<len;i++){
      
        a[i] = a[i] || 0;
        b[i] = b[i] || 0;

        var item = parseInt(a[i]) + parseInt(b[i])  + flag;
        if(item > 1){
            res.push(item - 2);
            flag = 1;
            continue;
        }
        res.push(item);
        flag = 0;
    }
    if(flag === 1){
        res.push(flag);
    }

    return res.reverse().join("");
};

