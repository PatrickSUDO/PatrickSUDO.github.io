---
title: 167. Two Sum II - Input array is sorted
description: leetcode 167. Two Sum II - Input array is sorted
date: 2021-01-25
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Array 
  - Two Pointers
  - Binary Search
categories:
  - LeetCode
---
[LeetCode 0167. Two Sum II - Input array is sorted](https://leetcode.com/problems/valid-anagram/)

---
**Problem:** <br/>

Given an array of integers that is already **sorted in ascending order**, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

#### Note:

- Your returned answers (both index1 and index2) are not zero-based.
- You may assume that each input would have exactly one solution and you may not use the same element twice.


#### Example 1:

    Input: numbers = [2,7,11,15], target = 9
    Output: [1,2]
    Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

#### Example 2:

    Input: numbers = [2,3,4], target = 6
    Output: [1,3]

#### Example 3:

    Input: numbers = [-1,0], target = -1
    Output: [1,2]

#### Constraints:

- 2 <= nums.length <= 3 * 104
- -1000 <= nums[i] <= 1000
- nums is sorted in increasing order.
- -1000 <= target <= 1000

---
**Solution:** <br/>

When the array has been sorted, we can place the pointers in both the array's start and end. If both pointers' sum is bigger than the target value, it means we should decrease it.  Therefore, the right pointer should move leftward. On the other hand, if it is smaller than the target, we should move the left pointer rightward.

Time complexity: $O(n)$</br>
Space complexity: $O(1)$ 
</br>
</br>

#### Python
```python
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l, r = 0, len(numbers) - 1
        while l < r:
            if numbers[l] + numbers[r] == target:
                return [l+1, r+1]
            if numbers[l] + numbers[r] > target:
                r -= 1
            else:
                l += 1
```


#### Java
```java
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int l = 0, r = numbers.length - 1;
        while(l < r){
            if(numbers[l] + numbers[r] == target){
                return new int[]{l + 1, r + 1};
            } else if (numbers[l] + numbers[r] > target){
                r--;
            } else {
                l++;
            }
        }     
        return new int[]{l + 1, r + 1};
    }
}
```

<Disqus shortname="patricksudo" />