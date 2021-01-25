---
title: 992. Subarrays with K Different Integers
description: leetcode 992. Subarrays with K Different Integers
date: 2020-01-25
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Hard
  - Hash Table 
  - Two Pointers
  - Sliding Window
categories:
  - LeetCode
---
[LeetCode 992. Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/)

---
**Problem:** <br/>

Given an array `A` of positive integers, call a (contiguous, not necessarily distinct) subarray of `A` good if the number of different integers in that subarray is exactly `K`.

(For example, `[1,2,3,1,2]` has 3 different integers: `1`, `2`, and `3`.)

Return the number of good subarrays of `A`.


#### Example 1:

    Input: A = [1,2,1,2,3], K = 2
    Output: 7
    Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].

#### Example 2:

    Input: A = [1,2,1,3,4], K = 3
    Output: 3
    Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].


#### Note:

- 1 <= A.length <= 20000
- 1 <= A[i] <= A.length
- 1 <= K <= A.length

---
**Solution:** <br/>

It is not easy to solve the problem with exactly `K` distinct subarrays, but solving problems with at most `K` distinct elements is relatively easy to do. If f(K) represents the number of subarray with at most `K` distinct integers, we can get the number with exact K distinct integer by f(K+1) - f(K).

For sub-questions, we should use sliding windows to get the sub-array. Also, hash table can be used to count the number of the distinct integer. 

When the hash table's size is larger than `K`, we have to start from `l` to `r` and delete the `A[l]` in the hash table until its size is equal to `K`.  When the frequency of an integer in the hash table is equal to 0, then the key should be deleted.  Also, we keep accumulating the number of intervals `r-l+1` (because `[l,r]` can be split into `r-l+1` intervals ending in `A[r]`).

Time complexity: $O(n)$</br>
Space complexity: $O(K)$ 
</br>
</br>

In python, `defaultdict(int)` can be use to count the frequency of character.

#### Python
```python
from collections import defaultdict
class Solution:
    def subarraysWithKDistinct(self, A: List[int], K: int) -> int:
        return self.atMostKDist(A, K) - self.atMostKDist(A, K - 1)
    def atMostKDist(self, A, k):
        n = len(A)
        l, r = 0, 0
        count = defaultdict(int)
        ans = l = 0
        while r < n:
            count[A[r]]+= 1 
            while len(count) > k:
                count[A[l]] -= 1
                if count[A[l]] == 0:
                    del count[A[l]]
                l += 1
            ans +=  r - l +1
            r += 1
        return ans
```


#### Java
```java
class Solution {
    public int subarraysWithKDistinct(int[] A, int K) {
        return atMostKDist(A, K) - atMostKDist(A,K-1);
    }
    private int atMostKDist(int[] A, int K){
        Map<Integer, Integer> cache = new HashMap<>();
        int l = 0, ans = 0;
        for(int r = 0; r < A.length; r ++){
            cache.put(A[r], cache.getOrDefault(A[r], 0) + 1);
            while(cache.size() > K){
                cache.put(A[l], cache.get(A[l]) - 1);
                if(cache.get(A[l]) == 0) {
                    cache.remove(A[l]);
                }
                l ++ ;
            }
            ans += r - l + 1;
        }
        return ans;
    }
}
```

<Disqus shortname="patricksudo" />