---
title: 99. Recover Binary Search Tree
description: leetcode 99. Recover Binary Search Tree
date: 2021-01-28
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Hard
  - Tree 
  - DFS
categories:
  - LeetCode
---
[LeetCode 99. Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/)

---
**Problem:** <br/>

You are given the `root` of a binary search tree (BST), where exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

**Follow up:** A solution using `O(n)` space is pretty straight forward. Could you devise a constant space solution?

#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/28/recover1.jpg" style="width: 422px; height: 302px;">

    Input: root = [1,3,null,null,2]
    Output: [3,1,null,null,2]
    Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.

#### Example 2:
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/28/recover2.jpg" style="width: 581px; height: 302px;">

    Input: root = [3,1,4,null,null,2]
    Output: [2,1,4,null,null,3]
    Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.

#### Constraints:

- The number of nodes in the tree is in the range [2, 1000].
- -2<sup>31</sup> <= Node.val <= 2<sup>31</sup> - 1


---
**Solution:** <br/>

In this problem, we still make use of the sorting property of BST when traversing in-order. If the node was swapped by mistake, the previous node would be larger than the current node. 

Two circumstances need to be considered:
1. If the swapped nodes are adjacent to each other, then the situation that the previous node is larger than the current node will happen only once.
2. If the swapped nodes are not adjacent to each other, then the situation that the previous node is larger than the current node will happen twice.

So, we need two additional global variables (`first`, `second`) in addition to `prev` to store the wrong node. After we traverse all the nodes, we can swap the misplaced node.

Time complexity: $O(n)$</br>
Space complexity: $O(h)$ 
</br>
</br>


#### Python
```python
class Solution:
    def recoverTree(self, root: TreeNode) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        self.prev = None
        self.first = None
        self.second = None
    
        self.inOrder(root)
        self.first.val, self.second.val = self.second.val, self.first.val

        
    def inOrder(self, root):
        if not root: return 
        self.inOrder(root.left)
        if self.prev and self.prev.val > root.val:
            if not self.first:
                self.first = self.prev
            self.second = root
        self.prev = root
        self.inOrder(root.right)
```


#### Java
```java
class Solution {
        TreeNode prev = null;
        TreeNode first = null;
        TreeNode second = null;
    public void recoverTree(TreeNode root) {
        inOrder(root);
        int temp = first.val;
        first.val = second.val;
        second.val = temp;
        
    }
    private void inOrder(TreeNode root){
        if(root == null) return;
        inOrder(root.left);
        if(prev != null && prev.val > root.val){
            if(first == null){
                first = prev;
            }
            second = root;
        }
        prev = root;
        inOrder(root.right);
    }
}
```

<Disqus shortname="patricksudo" />