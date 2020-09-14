---
title: 0347. Top K Frequent Elements 
date: 2020-09-05
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Heap
  - Quicksort
  - Hash table
categories:
  - LeetCode
---
[LeetCode 0347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)

---
**Problem:** <br/>




Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
You can return the answer in any order.

---
**Solution:** <br/>
Intuitively, we can solve this problem with heap because we saw the key word "Top K" in the question. Also, the other clue is we need to count the frequency of each number. Typically, we use hash table or dictionary in Python to convert and record the frequency of each element. 

Therefore, we firstly use collections.Counter to quickly build a hash table recording the frequency of each element. Then we need a heap to sort them based on the frequency, and the tuple (frequency, element) can fulfill this demand, but in heapq package inPython we only have min heap, so remember to add a "-" before frequency to reverse the sequence. Finally, we heappop the element one by one and append to an empty list. Hence, the element with highest sequence will be on the leftest position.

Time $O(nlogk)$  <br />
Space $O(n)$


```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = collections.Counter(nums)
        pq = []
        for key, val in count.items():
            heapq.heappush(pq, (-val, key))
        ans = [heapq.heappop(pq)[1] for _ in range(k)]
        return ans
```

Another way with better time complexity in the best case,$O(n + klogk)$, is using quick select, but it can be longer :(.

```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        def quickSelect(left, right, k):
            pivot = left
            l, r = left, right
            while l < r:
                while l < r and count[r][1] <= count[pivot][1]:
                    r -= 1
                while l < r and count[l][1] >= count[pivot][1]:
                    l += 1
                count[l] , count[r] = count[r], count[l]
            count[pivot], count[l] = count[l], count[pivot]
            
            if l + 1 == k:
                return count[:l + 1]
            elif l + 1 < k:
                return quickSelect(l + 1, right, k)
            else:
                return quickSelect(left, l - 1, k)
        
        if not nums: return []
        
        cnt = collections.Counter(nums)
        count = []
        
        for key, val in cnt.items():
            count.append((key, val))
            
        return [c[0] for c in quickSelect(0, len(count) - 1, k)]
        
```





