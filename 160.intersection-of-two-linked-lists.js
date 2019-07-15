/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  
    if(!headA || !headB){
        return null
    }
    let hashMap = new Map()
    while(headA){
        hashMap.set(headA,headA.val);
        headA = headA.next;
    }

    while(headB){
        if(hashMap.has(headB)){
            return headB
        }

        headB = headB.next;
    }

    return null;
};

