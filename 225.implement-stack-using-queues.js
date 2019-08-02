/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 */
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.res = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.res.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(this.res.length){
        return this.res.pop();
    }else{
        return false
    }
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    if(this.res.length){
        return this.res[this.res.length -1 ]
    }else{
        return false
    }
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.res.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

