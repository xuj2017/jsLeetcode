/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

 var isVowels = function(s){
     return /[a|e|i|o|u|A|E|I|O|U]/.test(s);
 }

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split("");
    var arr = [];
    for(let i = 0;i<s.length;i++){
        if(isVowels(s[i])){
            
            arr.push(s.splice(i,1,"{}"))
        }
    }

    arr.reverse()

    return s.map(item=> item === '{}' ? arr.shift() : item).join("")
};

