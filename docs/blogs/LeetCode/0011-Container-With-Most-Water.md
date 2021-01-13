---
title: 11. Container With Most Water
description: leetcode 11. Container With Most Water
date: 2021-01-13
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Two Pointers
  - Array
categories:
  - LeetCode
---
[LeetCode 11. Container With Most Water](https://leetcode.com/problems/find-peak-element/)

---
### Problem: <br/>


Given n non-negative integers `a1, a2, ..., an` , where each represents a point at coordinate `(i, ai)`. n vertical lines are drawn such that the two endpoints of the line `i` is at `(i, ai)` and `(i, 0)`. Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

**Notice** that you may not slant the container.


#### Example 1:
<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg" style="width: 600px; height: 287px;">

    Input: height = [1,8,6,2,5,4,8,3,7]
    Output: 49
    Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

#### Example 2:
    Input: height = [1,1]
    Output: 1

#### Example 3:
    Input: height = [4,3,2,1,4]
    Output: 16

#### Example 4:
    Input: height = [1,2,1]
    Output: 2

#### Constraints:

- n == height.length
- 2 <= n <= 3 * 104
- 0 <= height[i] <= 3 * 104


---
### Solution: <br/>

We use two pointers, starting from the leftmost and rightmost. We move one pointer at a time. The shorter walls determine the area, so make the smaller one as large as possible to contain the most water. If the left wall is smaller than the right wall, the left wall is moved one step to the right to see if it is larger. Otherwise, the right wall is moved one step to the left. See if it will be bigger. The pre-assigned `ans` is recording the largest amount of water so far. If the current walls contain more water than the `ans`, we replace it. In this way, it can be done in linear time complexity.


Time complexity: $O(n)$</br>
Space complexity: $O(1)$ 
</br>
</br>

#### Python
```python
class Solution:
    def maxArea(self, height: List[int]) -> int:
        l, r = 0 , len(height) - 1
        vol = 0
        while l < r:
            vol = max(vol, (r - l) * min(height[r], height[l]))
            if height[l] > height[r]:
                r -= 1
            else:
                l += 1
        return vol
```

#### Java
```java
class Solution {
    public int maxArea(int[] height) {
        int ans = 0;
        int l = 0, r = height.length - 1;
        while(l < r) {
            int h = Math.min(height[l], height[r]);
            int bottom = r - l;
            ans = Math.max(ans, bottom * h);
            if(height[l] < height[r]){
                l ++;
            } else{
                r --;
            }
        }
        return ans;
    }
}
```

<Disqus shortname="patricksudo" />