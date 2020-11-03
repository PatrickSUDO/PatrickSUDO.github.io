---
title: 0528. Random Pick with Weight
date: 2020-09-11
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Random
  - Binary Search
categories:
  - LeetCode
---
[LeetCode 0528. Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/)

---
**Problem:** <br/>

You are given an array of positive integers w where w[i] describes the weight of ith index (0-indexed).

We need to call the function pickIndex() which randomly returns an integer in the range [0, w.length - 1]. pickIndex() should return the integer proportional to its weight in the w array. For example, for w = [1, 3], the probability of picking the index 0 is 1 / (1 + 3) = 0.25 (i.e 25%) while the probability of picking the index 1 is 3 / (1 + 3) = 0.75 (i.e 75%).

More formally, the probability of picking index i is w[i] / sum(w).

 

Example 1:

Input
["Solution","pickIndex"]
[[[1]],[]]
Output
[null,0]

Explanation
Solution solution = new Solution([1]);
solution.pickIndex(); // return 0. Since there is only one single element on the array the only option is to return the first element.
Example 2:

Input
["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
[[[1,3]],[],[],[],[],[]]
Output
[null,1,1,1,1,0]

Explanation
Solution solution = new Solution([1, 3]);
solution.pickIndex(); // return 1. It's returning the second element (index = 1) that has probability of 3/4.
solution.pickIndex(); // return 1
solution.pickIndex(); // return 1
solution.pickIndex(); // return 1
solution.pickIndex(); // return 0. It's returning the first element (index = 0) that has probability of 1/4.

Since this is a randomization problem, multiple answers are allowed so the following outputs can be considered correct :
[null,1,1,1,1,0]
[null,1,1,1,1,1]
[null,1,1,1,0,0]
[null,1,1,1,0,1]
[null,1,0,1,0,0]
......
and so on.
 

Constraints:

1 <= w.length <= 10000
1 <= w[i] <= 10^5
pickIndex will be called at most 10000 times.

---
**Solution:** <br/>
This method is hard to figure out.
We use preSum to sum all the element before and include the current one.

```
Interval：		[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]
preSum:  	    1,	3,	6,	10
output：		1,	2,	3,	4
```

Then, we choose the index randomly from the min to max of the preSum array.
We can see the interval between each element in the preSum array is proportional to the probability we want.
Finally, we can use binary search to have $O(log n)$ time complexity in finding the index in the original array. However, the binary search here is to be modified to find the insertion point on the left of the value, or the **bisect.bisect_left** method can be used.

Time $O(n)$, for constructor; $O(log n)$  for pickIndex <br />
Space $O(n)$, for constructor; $O(1)$  for pickIndex


```python
class Solution:

    def __init__(self, w: List[int]):
        self.nums = [w[0]]
        for i in range(1, len(w)):
            #Convert the list to preSum
            self.nums.append(self.nums[-1] + w[i])

    def pickIndex(self) -> int:
        val = random.randrange(1, self.nums[-1] + 1)
        return bisect.bisect_left(self.nums, val, 0, len(self.nums))
```

```python
class Solution:

    def __init__(self, w: List[int]):
        self.nums = [w[0]]
        for i in range(1, len(w)):
            #Convert the list to preSum
            self.nums.append(self.nums[-1] + w[i])

    def pickIndex(self) -> int:
        val = random.randrange(1, self.nums[-1] + 1)
        l, r = 0, len(self.nums) - 1
        
        while l < r:
            mid = l + (r - l) // 2
            
            if self.nums[mid] < val:
                l = mid + 1
            else:
                r = mid
                
        return l
        
        


# Your Solution object will be instantiated and called as such:
# obj = Solution(w)
# param_1 = obj.pickIndex()
```
<Disqus shortname="patricksudo" />