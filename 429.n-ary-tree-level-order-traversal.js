/*
 * @lc app=leetcode id=429 lang=javascript
 *
 * [429] N-ary Tree Level Order Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    //BFS
    if(!root){
        return []
    }

    let res = [];
    let queue = [root]

    while(queue.length){
        let child = [];
        let node = [];
        for(item of queue){
            child.push(item.val)
            if(item.children){
                node = node.concat(item.children)
            }
        }
        res.push(child);
        queue = node;
    }
    return res
};
// @lc code=end
