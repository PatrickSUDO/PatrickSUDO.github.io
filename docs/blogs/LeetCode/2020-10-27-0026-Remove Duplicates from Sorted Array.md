---
title: 0026. Remove Duplicates from Sorted Array
date: 2020-10-27
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Array
  - Two Pointers
categories:
  - LeetCode
---
[LeetCode 0026. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

---
**Problem:** <br/>

Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by **modifying the input array** in-place with O(1) extra memory.

**Clarification:**

Confused why the returned value is an integer but your answer is an array?
*
Note that the input array is passed in by **reference**, which means a modification to the input array will be known to the caller as well.

Internally you can think of this:

    // nums is passed in by reference. (i.e., without making a copy)
    int len = removeDuplicates(nums);

    // any modification to nums in your function would be known by the caller.
    // using the length returned by your function, it prints the first len elements.
    for (int i = 0; i < len; i++) {
        print(nums[i]);
    }

#### Example 1:

    Input: nums = [1,1,2]
    Output: 2, nums = [1,2]
    Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.

#### Example 2:

    Input: nums = [0,0,1,1,1,2,2,3,3,4]
    Output: 5, nums = [0,1,2,3,4]
    Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.

#### Constraints:
- 0 <= nums.length <= 3 * 10<sup>4</sup>
- -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>
- nums is sorted in ascending order.


---
**Solution:** <br/>

Set pointer i to record where it is currently stored. Then set another pointer j to traverse the entire array completely. Whenever you find a different number, assign the number of j to the position i, and keep traversing. Finally, because the length of the new array is to be returned, i+1 should be returned.  

The so-called in-place refers to all operation modifications that should be solved in the original data structure. If there is no such restriction, ArrayList can also be used for this problem. When a different number is found, it is added to the end of the List. Finally, it is converted to an array.The solution can also be obtained, but its space complexity will become O(N) because we use extra memory to store it.

In-place algorithms usually trade time for space efficiency.
In short, it doesn’t matter if the original information is modified or disrupted.


Time complexity: $O(n)$ </br>
Space complexity: $O(1)$
</br>
</br>

#### Python
```python
class Solution:
    def removeDuplicates(self, nums):
        if not nums: return 0
        i, j = 0, 1
        while j < len(nums):
            if nums[i] != nums[j]:
                i += 1
                nums[i] = nums[j]
            j += 1
        return i + 1
```
#### Java
```java
class Solution {
    public int removeDuplicates(int[] nums) {
        int i = 0;
        int j = 1;
        int n = nums.length;
        while( j < n ){
            if (nums[j] != nums[i]){
                nums[++i] = nums[j];
            }
            j++;
        }
        return i + 1;
    }
}
```