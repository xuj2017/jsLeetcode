/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var res = [];
    while(head){
        res.push(head.val);
        head = head.next;
    }
    var newRes = [...res];
    newRes = newRes.reverse();

    return res.join("") === newRes.join("")
};

