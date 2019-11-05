/*
 * @lc app=leetcode id=443 lang=javascript
 *
 * [443] String Compression
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    if(!chars.length) return 0
    let obj = {};
    chars.forEach(v=>{
        if(!obj[v]){
            obj[v] = 1
        }else{
            obj[v] +=1
        }

    })
    let arr = [];
    
    for(let key in obj){
        arr.push(key)
        if(obj[key] > 1){
           arr = arr.concat(obj[key].toString().split(""))
        }
    }
    console.log(arr)
    chars = [...arr]
    return chars.length;
};
// @lc code=end

