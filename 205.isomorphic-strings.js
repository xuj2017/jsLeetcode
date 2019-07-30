/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s == t){
        return true
    }
    if(!s || !t || s.length != t.length){
        return false;
    }

    if(s.length ==1){
        return true;
    }
    let flat = true;
    for(let i = 0;i<s.length;i++){
        let item1 = s[i];
        let item2 = t[i];
        if(s.lastIndexOf(item1) !== t.lastIndexOf(item2)){
            flat= false;
        }
        
    }

    return flat
};

