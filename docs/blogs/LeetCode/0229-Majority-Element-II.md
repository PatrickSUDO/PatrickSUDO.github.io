---
title: 229. Majority Element II 
description: leetcode 229. Majority Element II 
date: 2020-12-31
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Array
categories:
  - LeetCode
---
[LeetCode 0229. Majority Element II](https://leetcode.com/problems/majority-element-ii/)

---
### Problem: <br/>

Given an integer array of size `n`, find all elements that appear more than `⌊ n/3 ⌋`    times.

**Follow-up:** Could you solve the problem in linear time and in O(1) space?

#### Example 1:

    Input: nums = [3,2,3]
    Output: [3]

#### Example 2:

    Input: nums = [1]
    Output: [1]

#### Example 3:

    Input: nums = [1,2]
    Output: [1,2]   

#### Constraints:
- `1 <= nums.length <= 5 * 104`
- `-109 <= nums[i] <= 109`

---
### Solution: <br/>

We can use Boyer--Moore majority vote algorithm to get the result in O(1) space complexity.
This algorithm's core is deleting two different numbers in a series will not affect the majority element of the series.

Suppose there is a group of people who want to vote. The candidates are A, B, and C. If A is known to be more than half,
If two of them cancel their qualifications to vote, there will be two conditions:

1. Those who are disqualified are B and C. A is still more than half.
2. Those who are disqualified are (A, B) or (A, C). a player who casts A and a player who does not vote for A are simultaneously excluded,
So it is impossible to change the situation where A will over half.
In the same way, when there are more than three candidates (numbers), each time two people are disqualified from voting (removal), the voting result cannot be changed (A will still be a majority element).

Based on this, we can use the following methods to perform array operations:

We take out the first number, put it into a temporary variable, and
set the counter (cnt) to 1, which means that this number appears once. We need two counter because, at most, two elements have a frequency greater than `n/3`.
If the number is equal to n1 or n2, then the cnt1 or cnt2 +1.
If it is different from n1 or n2 but one counter=0, change n1 or n2 to this number and the counter +1.
If it is different from n1 or n2 and both counters > 0, they will be -1. 

Now, we have two top-2 numbers. Then, we need to recheck the array to get the real frequency of those two numbers since they may not be < `n/3`.


Time complexity: $O(n)$</br>
Space complexity: $O(1))$ 
</br>
</br>

#### Python
```python
class Solution:
        def majorityElement(self, nums: List[int]) -> List[int]:
            if not nums:
                return []
            n1, n2, cnt1, cnt2 = 0, 1, 0, 0
            for num in nums:
                if num == n1:
                    cnt1 += 1
                elif num == n2:
                    cnt2 += 1
                elif cnt1 == 0:
                    n1 = num
                    cnt1 = 1
                elif cnt2 == 0:
                    n2 = num
                    cnt2 = 1
                else:
                    cnt1 -= 1
                    cnt2 -= 1
            
            cnt1, cnt2 = 0, 0
            
            for num in nums:
                if num == n1:
                    cnt1 += 1
                elif num == n2:
                    cnt2 += 1
            
            res, l = [], len(nums)
            if cnt1 > l // 3:
                res.append(n1)
            if cnt2 > l // 3:
                res.append(n2)
                
            return res
```

#### Java
```java
class Solution {
    public List<Integer> majorityElement(int[] nums) {
        int cnt1 = 0, cnt2 = 0, n1 = 0, n2 = 1;
        for (int num : nums) {
            if (num == n1) cnt1++;
            else if (num == n2) cnt2++;
            else if (cnt1 == 0) {
                n1 = num;
                cnt1 = 1;
            } else if (cnt2 == 0) {
                n2 = num;
                cnt2 = 1;
            } else {
                cnt1--;
                cnt2--;
            }
        }
        cnt1 = 0;
        cnt2 = 0;
        for (int num : nums) {
            if (num == n1) cnt1++;
            else if (num == n2) cnt2++;
        }

        List<Integer> ans = new ArrayList<>();
        if (cnt1 > nums.length / 3) ans.add(n1);
        if (cnt2 > nums.length / 3) ans.add(n2);
        return ans;
    }
}
```

### Happy New Year, Bye miserable  2020!!!

<Disqus shortname="patricksudo" />