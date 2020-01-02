/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
        let multi = 0;

        let res = "";

        let countStack = [];

        let resStack = [];

        for(let i = 0; i<s.length;i++){
            let cur = s.charAt(i);
            if(cur === '['){
                countStack.push(multi)

                resStack.push(res)

                multi = 0;

                res = ''
            } else if( cur === ']'){
                let count = countStack.pop();
                let temp = new Array(count).fill(res).join("")
                res = resStack.pop() + temp;
            } else if( cur >= '0' && cur <= '9'){
                multi = multi * 10 + (cur - '0')
            }else{
                res += cur
            }
            
        }
    
    return res;
};


// @lc code=end

