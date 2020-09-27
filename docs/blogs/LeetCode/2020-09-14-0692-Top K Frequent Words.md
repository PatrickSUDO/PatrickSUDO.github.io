---
title: 0692. Top K Frequent Words 
date: 2020-09-14
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Heap
  - Sort
  - Hash Table
categories:
  - LeetCode
---
[LeetCode 0692. Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/)

---
**Problem:** <br/>

Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

Example 1:
Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.

Example 2:
Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
    with the number of occurrence being 4, 3, 2 and 1 respectively.

Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Input words contain only lowercase letters.
Follow up:
Try to solve it in O(n log k) time and O(n) extra space.

---
**Solution:** <br/>
To do it with a heap which is an intuitive and simple method, first use the counter to quickly change to a frequency hash table. Then, add the frequency plus the minus sign and the word into a tuple and push it in. After pushing it in, the heap will sort it automaticly. Next, use heappop to pop the answer one by one. 

Time $O(nlogk)$  <br />
Space $O(n)$


```python
class Solution:              
    def topKFrequent(self, words: List[str], k: int) -> List[str]:        
        
        if not words: return []
        count = collections.Counter(words)
        pq = []
        for key, val in count.items():
            heapq.heappush(pq, (-val, key))
        
        return [heapq.heappop(pq)[1] for _ in range(k)]
```

Quick select can also be done with a little less complexity, but in fact it doesn't seem to be faster. We create a helper function, similar to the double pointer quick sort, first set a pivot, and then pay attention to the boundary condition here is that the pointers cannot collide, if the number on the left half is larger than the pivot, the left pointer moves one unit, and vice versa. When the pointer collide, the left and right are swapped, and the left should swap with pivot, too. 

```python
class Solution:              
    def topKFrequent(self, words: List[str], k: int) -> List[str]:        
        def quickSelect(arr, left, right, k):
            l, r = left, right
            p = left
            while l < r:
                while l < r and arr[r][1] < arr[p][1] or (arr[r][1] == arr[p][1] and arr[r][0] > arr[p][0]):
                    r -= 1
                while l < r and arr[l][1] > arr[p][1] or (arr[l][1] == arr[p][1] and arr[l][0] < arr[p][0]):
                    l += 1

                arr[l], arr[r] = arr[r], arr[l]
            arr[l], arr[p] = arr[p], arr[l]
            
            if l + 1 == k:
                return arr[:l + 1]
            elif l + 1 < k:
                return quickSelect(arr, l + 1, right, k)
            else:
                return quickSelect(arr, left, l - 1, k)
            
        if not words: return []
        
        count = collections.Counter(words)
        cnt = []
        for key, val in count.items():
            cnt.append((key, val))
        return [c[0] for c in quickSelect(cnt, 0, len(cnt) - 1, k)]
```





