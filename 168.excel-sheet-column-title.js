/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */
/**
 * @param {number} n
 * @return {string}
 */

var  getCharCode = function(n){
    return String.fromCharCode(n + 64);
}

var convertToTitle = function(n) {

    if(n <= 26){
        return getCharCode(n)
    }
    var yu = n % 26;
    if(yu === 0){
        return convertToTitle(Math.floor( n / 26)-1)+"Z"
    }

    var res = [];
    while(n  > 26){
        yu = n % 26;
        n = Math.floor( n / 26);
        res.unshift(getCharCode(yu));
    }
    res.unshift(getCharCode(n));
    return res.join("");
};

