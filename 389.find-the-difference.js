/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let obj = {};
    for(let i = 0;i<s.length;i++){
        if(obj[s.charAt(i)] != undefined){
            obj[s.charAt(i)] ++;
        }else{
            obj[s.charAt(i)] = 1;
        }
    }

    for(let i = 0;i<t.length;i++){
        if(obj[t.charAt(i)]){
            obj[t.charAt(i)] --;
            if(obj[t.charAt(i)] === 0){
                delete obj[t.charAt(i)]
            }
        }else{
            obj[t.charAt(i)] =1;
        }
    }

    return Object.keys(obj).join("")
};

