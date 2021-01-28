---
title: 1060. Missing Element in Sorted Array
description: leetcode 1060. Missing Element in Sorted Array
date: 2021-01-28
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Binary Search
categories:
  - LeetCode
---
[LeetCode 1060. Missing Element in Sorted Array](https://leetcode.com/problems/missing-element-in-sorted-array/)

---
### Problem: <br/>

Given a sorted array `A` of **unique** numbers, find the `K-th` missing number starting from the leftmost number of the array.

#### Example 1:

    Input: A = [4,7,9,10], K = 1
    Output: 5
    Explanation: 
    The first missing number is 5.

#### Example 2:

    Input: A = [4,7,9,10], K = 3
    Output: 8
    Explanation: 
    The missing numbers are [5,6,8,...], hence the third missing number is 8.

#### Example 3:

    Input: A = [1,2,4], K = 3
    Output: 6
    Explanation: 
    The missing numbers are [3,5,6,7,...], hence the third missing number is 6.

#### Note:

- 1 <= A.length <= 50000
- 1 <= A[i] <= 1e7
- 1 <= K <= 1e8

---

#### Solution: </br>

We first handle the exception.  If the missing value < `k`, there are currently fewer missing values than needed so that the kth missing value will be at the current element's right, and we return `nums[n-1] + k - missing`.
We use binary search to locate the missing value. Then, start a binary search if missing < k, which means that the missing value on the left is not enough, you need to find the right subarray, l = m, and k should deduct the missing value consumed by the left part. On the contrary, missing> k means that the missing value on the left is enough to be used on the right, and there is no need to find r = m and finally return the `nums[l] + k`. 

Note that the termination condition is l <r-1, and we use l = m because `missing` value is defined as the number of missing values below the current element.

Time complexity: $O(logN)$</br>
Space complexity: $O(1)$ 
</br>
</br>


#### Python

```python
class Solution:
    def missingElement(self, nums: List[int], k: int) -> int:
        n = len(nums)
        missing = nums[n-1] - nums[0] + 1 - n
        if missing < k:
            return nums[n-1] + k - missing
        l, r = 0, n - 1
        while l < r -1:
            m = l + (r - l) // 2
            missing = nums[m] - nums[l] - (m - l)
            if missing < k:
                l = m 
                k -= missing
            else:
                r = m 
        return nums[l] + k
```

#### Java

```java
class Solution {
    public int missingElement(int[] nums, int k) {
        int n = nums.length;
        int missing = nums[n - 1] - nums[0] + 1 - n;
        
        //When the missing value is out of the range
        if(missing < k){
            return nums[n - 1] + (k - missing);
        }
        int l = 0, r = n - 1;
        
        while(l < r - 1){
            int m = l + (r - l)/2;
            
            ///don't need to consider the last number in the subarray 
            missing = nums[m] - nums[l] - (m - l);
            if(missing < k){
                l = m ;
                k -= missing;
            } else {
                r = m ;
            }
        }
        return nums[l] + k;
    }
}
```

<Disqus shortname="patricksudo" />