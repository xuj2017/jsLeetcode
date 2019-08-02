/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var strSort = function(s){
    s = s.split("")
    for(let i=0;i<s.length;i++){
        for(let j=0;j<s.length-i;j++ ){
            if(s[j] > s[j+1]){
                [s[j],s[j+1]] = [s[j+1],s[j]]
            }
        }
    }
    return s.join("")
}

var isAnagram = function(s, t) {
    // s = strSort(s);
    // t = strSort(t);
    // return s === t;
    if(s.length != t.length){
        return false;
    }

    s = s.split("").sort().join("");
    t = t.split("").sort().join("");

    return s === t
    
};

