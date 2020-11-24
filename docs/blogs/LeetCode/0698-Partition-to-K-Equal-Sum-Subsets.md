---
title: 698. Partition to K Equal Sum Subsets
description: leetcode 698. Partition to K Equal Sum Subsets
date: 2020-11-24
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - DP
categories:
  - LeetCode
---
[LeetCode 698. Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)

---
### Problem: <br/>

Given an array of integers `nums` and a positive integer `k`, find whether it's possible to divide this array into `k` non-empty subsets whose sums are all equal.

#### Example 1:

    Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
    Output: True
    Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.

#### Constraints:

- 1 <= k <= len(nums) <= 16.
- 0 < nums[i] < 10000.

---
### Solution: <br/>

We can use Backtracking to do this problem. First of all, we still find the sum of all the numbers in the array. First of all, we judge whether a sum can be divisible by k. If it can't be divisible by, then return false directly. Then we need a visited array to record which arrays have been selected, and then call the recursive function. Our goal is to group k subsets, and the sum of each subset is target = total/k. We also need the variable start, which means to search from a specific position in the array, and curr is the sum of the current subsets. If k=0, it means that all the subsets have been successfully divided at this time and return true directly. If curr is equal to the target, then we call recursion again. At this time, k-1 is passed in, and both start and curr are reset to 0 because we have now found a sub-set whose sum is the target, and we must continue to find the next one. Otherwise, start traversing the array from the start. If the current number has been visited or the current sum has exceeded the target value, skip directly, otherwise mark it as visited. We call the recursive function, and k remains unchanged because the current subset is still being accumulated. The start is passed in i-1, and curr is given in curr+nums[i] that is the current number to be accumulated. If the recursive DFS returns true, it returns true directly. Otherwise, reset the current number to an unvisited state to continue traversal. 

The time complexity is at a factorial level, and we need to prune some searching branches. Hence, we sort the array before we do the DFS. We search the array in descending order, so if it exceeds the target quicker, or we may have the situation that the subset is invalid in the deeper recursion. Start from the bigger value means we can find an invalid subset as soon as possible and stop this branch from growing. The concept is like how you lose a BlackJack game in the fastest way. When implementing, we can sort the array in ascending order and traversal it reversely. It can save the time of reversing the array.


Time complexity: $O(n!)$</br>
Space complexity: $O(n)$ 
</br>
</br>

#### Python
```python
class Solution(object):
    def canPartitionKSubsets(self, nums, k):
        n, total = len(nums), sum(nums)
        if total % k or n < k: return False
        target = total / k
        visited = [0] * n
        nums.sort()
        def dfs(k, start, curr):
            if k == 0: return True
            if curr == target: return dfs(k - 1, n-1, 0)
            for i in range(start, -1, -1):
                if visited[i] or curr + nums[i] > target: continue
                visited[i] = 1
                if dfs(k, i - 1, curr + nums[i]): return True
                visited[i] = 0 
            return False       
        return dfs(k, n-1, 0)
```

#### Java
```java
class Solution {
    public boolean canPartitionKSubsets(int[] nums, int k) {
        int total = 0, n = nums.length;
        for (int x : nums) {
            total += x;
        }
        if (total % k != 0 || n < k) return false;
        int target = total / k;
        boolean[] visited = new boolean[n];
        Arrays.sort(nums);
        return dfs(nums, visited, target, k, n - 1, 0);
    }

    private boolean dfs(int[] nums, boolean[] visited,
                        int target, int k, int start, int curr) {
        if (k == 0) return true;
        if (curr == target) return dfs(nums, visited,
                target, k - 1, nums.length - 1, 0);
        for (int i = start; i >= 0; i--) {
            if (visited[i] || curr + nums[i] > target) continue;
            visited[i] = true;
            if (dfs(nums, visited, target, k, i - 1, curr + nums[i])) return true;
            visited[i] = false;
        }
        return false;
    }
}
```
<Disqus shortname="patricksudo" />