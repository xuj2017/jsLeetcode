/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    n = n.toString();
    var arr = [n];
    var nums = n.split("");
    var res = n;
    while(res != 1){
        var r = 0;
        nums.forEach(i => {
            r += Math.pow(i,2)
        });
        res = r.toString();
        if(arr.indexOf(res) != -1){
            return false;
        }
        arr.push(res);
        nums = res.split("");
    }
    return true
};

