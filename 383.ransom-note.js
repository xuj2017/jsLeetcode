/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var obj = {};
    for(let  i = 0;i<magazine.length;i++){
        if(obj[magazine.charAt(i)] != undefined){
            obj[magazine.charAt(i)] ++;
        }else{
            obj[magazine.charAt(i)] = 1
        }
    }

    for(let  i = 0;i<ransomNote.length;i++){
        var item = obj[ransomNote.charAt(i)];
        if(item && item > 0){
            obj[ransomNote.charAt(i)] --
        }else{
            return false;
        }
    }
    return true;
};

