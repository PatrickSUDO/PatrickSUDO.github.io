---
title: 0102. Binary Tree Level Order Traversal
date: 2020-10-31
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Tree
  - BFS
categories:
  - LeetCode
---
[LeetCode 0102-Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)

---
**Problem:** <br/>

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],

#### Example 1:

      3
     / \
    9  20
      /  \
     15   7

return its level order traversal as:

    [
      [3],
      [9,20],
      [15,7]
    ]


---
**Solution:** <br/>
The level order is similar to the BFS. So, we use the queue and iterative way to solve this question. First, we add the root in the queue. When the queue is not empty, we can claim an array "level" to contain the incoming nodes. Because we add all the node children at a batch, and they are all in the same next level. So, we pop all the nodes in that level. 2 loops are needed in this scenario. After the node is popped, we add it into the "level" array, and wee= add the child nodes into the queue if there are any child nodes. Once we finish a level, add it into the ans array.


Time complexity: $O(n)$</br>
Space complexity: $O(n)$ 
</br>
</br>

#### Python
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
from collections import deque
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        res = []
        if not root: return res
        q = deque([root])
        while q:
            count = len(q)
            level = []
            for _ in range(count):
                curr = q.popleft()      
                level.append(curr.val)
                if curr.left:
                    q.append(curr.left)
                if curr.right:
                    q.append(curr.right)
            res.append(level)
                   
        return res
```
#### Java
```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> ans = new LinkedList<List<Integer>>();
        Queue<TreeNode> q = new LinkedList<>();
        if (root == null) return ans;
        q.offer(root);
        while(!q.isEmpty()){
            List<Integer> level = new LinkedList<>();
            int qLength = q.size();
            for (int i = 0; i < qLength; i ++){
                TreeNode node = q.poll();
                level.add(node.val);
                if(node.left != null) q.offer(node.left);
                if(node.right != null) q.offer(node.right);
            }
            ans.add(level);
        }
        return ans;
    }
}
```
<Disqus shortname="patricksudo" />