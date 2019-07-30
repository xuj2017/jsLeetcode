/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // while(head.val && head.val !=val){
    //     head = head.next;
    // }
    // return head;
    if (!head) return head;
	
    while(head) {
        if(head.val === val) {
            head = head.next;
        } else {
            break;
        }
    }
    
    let curr = head;
    while(curr && curr.next) {
        if (curr.next.val === val) curr.next = curr.next.next;
        else curr = curr.next;
    }
    
    return head;
};

