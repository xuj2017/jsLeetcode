/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */
/**
 * @param {number} n
 * @return {number}
 */

var isPrime = function(n){
    if(n <= 1){
        return false;
    }

    if(n == 2){
        return true
    }
    for(var i =2 ;i<n-1;i++){
        if(n % i == 0){
            return false
        }
    }

    return true;
}

var countPrimes = function(n) {
    //超出时间，但是结果正确
    // if(n <= 1){
    //     return 0
    // }
    // var res = 0;
    // for(var i = 2;i<n-1;i++){
    //     if(isPrime(i)){
    //         res++
    //     }
    // }

    // return res;
    //厄拉多筛选法
    if(n <= 1){
        return 0
    }
    var nums = [];
    var res = 0;
    for(let i =2 ;i<n;i++){
        nums[i] = true;
    }

    for(let i = 2;i*i<nums.length;i++){
        if(nums[i]){
            for(let j = i*i;j<nums.length;j+=i){
                nums[j] = false;
            }
        }
    }

    nums.forEach(item=>{
        item && res ++
    })

    return res;
};

