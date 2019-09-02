/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let strArr = str.split(" ");
    if(strArr.length != pattern.length) return false;
    let ms = new Map();
    for(let i = 0 ;i<pattern.length;i++){
        let item = pattern.charAt(i);
        if(!ms.has(item)){
            if([...ms.values()].indexOf(strArr[i])>=0){
                return false;
            }
            ms.set(item,strArr[i]);
        }else{
            if(ms.get(item) != strArr[i]){
                return false
            }
        }
    }
    return true
};

