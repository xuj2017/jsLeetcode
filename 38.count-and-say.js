/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 *
 * https://leetcode.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (39.80%)
 * Total Accepted:    266.6K
 * Total Submissions: 669.5K
 * Testcase Example:  '1'
 *
 * The count-and-say sequence is the sequence of integers with the first five
 * terms as following:
 * 
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * 
 * Given an integer n where 1 ≤ n ≤ 30, generate the n^th term of the
 * count-and-say sequence.
 * 
 * Note: Each term of the sequence of integers will be represented as a
 * string.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: "1"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 4
 * Output: "1211"
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    var start = '1';
    var result = '';
    var tmp = 1;
    for (i = 0; i < n - 1; i++) {
        //tmp will count all repeats
        for (var j = 0; j < start.length; j++) {
            if (start[j] !== start[j + 1] || j == start.length - 1) {
                result += tmp + start[j];
                tmp = 1;
            } else {
                tmp += 1;
            }
        }
        start = result;
        result = '';
    }
    return start;
};                                                                                            