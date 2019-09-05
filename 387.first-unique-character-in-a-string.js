/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for(let i = 0;i<s.length;i++){
        var item = s.charAt(i);
        if(s.indexOf(item) === s.lastIndexOf(item)){
            return i;
        }
    }
    return -1;
};

