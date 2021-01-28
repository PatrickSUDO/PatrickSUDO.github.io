---
title: 108. Convert Sorted Array to Binary Search Tree
description: leetcode 108. Convert Sorted Array to Binary Search Tree
date: 2021-01-27
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Tree 
  - DFS
categories:
  - LeetCode
---
[LeetCode 108. Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)

---
**Problem:** <br/>


Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.



#### Example 1:

    Given the sorted array: [-10,-3,0,5,9],

    One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

         0
        / \
      -3   9
      /   /
    -10  5



---
**Solution:** <br/>

When the array is sorted, it means the BST is traverse using an in-order way. Hence, the root node is the one in the middle of the array. The left subarray is the left child, while the right subarray is the right child. The concept is like we do binary search recursively. Remember to set the termination condition when the left and right pointer overlap. It will output a null node.


Time complexity: $O(n)$</br>
Space complexity: $O(logn)$ 
</br>
</br>


#### Python
```python
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        if not nums: return None
        return self.getNode(nums, 0, len(nums)-1)
    def getNode(self, nums, l, r):
        if l > r: return None #防止空數組產生
        mid = (l + r) // 2
        root = TreeNode(nums[mid])
        root.left = self.getNode(nums, l, mid-1)
        root.right = self.getNode(nums, mid+1, r)
        return root
```


#### Java
```java
class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        return sortedArrayToBST(nums, 0, nums.length - 1);
    }
    private TreeNode sortedArrayToBST(int[] nums, int l, int r) {
        if(l > r) return null;
        int m = l + (r - l)/2;
        TreeNode root = new TreeNode(nums[m]);
        root.left = sortedArrayToBST(nums, l, m - 1);
        root.right = sortedArrayToBST(nums, m + 1, r);
        return root;
    }
}
```

<Disqus shortname="patricksudo" />