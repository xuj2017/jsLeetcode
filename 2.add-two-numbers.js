/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(0);
    let temp = res;
    let m = 0;
    let sum = 0;
    while(l1!==null||l2!==null || sum > 0){
       
         if(l1!==null){
            sum += l1.val;
            l1 = l1.next
        }

        if(l2!==null){
            sum += l2.val;
            l2 = l2.next
        }
        if(sum >= 10){
            m = 1;
            sum -= 10;
        }

        temp.next = new ListNode(sum);
        temp = temp.next;


        sum = m;
        m = 0;
    }

    return res.next;
};
// @lc code=end

