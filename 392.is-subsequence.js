/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(!s.length) return true;
    let a = 0;
    let len = s.length;

    for(let i = 0;i<t.length;i++){
        if(s[a] == t[i]){
            a ++
        }

        if(a ==len) return true;
    }

    return false;
};

