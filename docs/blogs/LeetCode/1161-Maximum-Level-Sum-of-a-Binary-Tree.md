---
title: 1161. Maximum Level Sum of a Binary Tree
description: leetcode 1161. Maximum Level Sum of a Binary Tree
date: 2020-11-06
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
[LeetCode 1161. Maximum Level Sum of a Binary Tree](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/)

---
### Problem: <br/>

Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the **smallest** level X such that the sum of all the values of nodes at level X is **maximal**.


#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2019/05/03/capture.JPG" style="width: 200px; height: 175px;">

    Input: root = [1,7,0,7,-8,null,null]
    Output: 2
    Explanation: 
    Level 1 sum = 1.
    Level 2 sum = 7 + 0 = 7.
    Level 3 sum = 7 + -8 = -1.
    So we return the level with the maximum sum which is level 2.

#### Example 2:

    Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
    Output: 2

#### Constraints:
- The number of nodes in the tree is in the range [1, 10<sup>4</sup>].
- -10<sup>5</sup> <= Node.val <= 10<sup>5</sup>  


---
### Solution: <br/>
When we see tree problem involving "level", starting from BFS can be intuitive. We first put the first node into the queue. The FIFO property of queue makes us easy to compute the sum of each levels. We pop out the node added into the queue by level. Then, Check if it is null, and do the summation. next, put their child nodes into the queue. Once the level has bigger summation, we record the level index (start from 1) and assign the maxSum to the current levelSum.

Time complexity: $O(n)$</br>
Space complexity: $O(n)$ 
</br>
</br>

#### Python
```python
from collections import deque
class Solution:
    def maxLevelSum(self, root: TreeNode) -> int:
        level, res, maxSum = 1, 1, root.val;
        q = collections.deque()
        q.append(root)
        
        while q:
            total = 0
            cnt = len(q)
            while cnt > 0:
                n = q.popleft()
                total += n.val
                if n.left: q.append(n.left)
                if n.right: q.append(n.right)
                cnt -= 1
                    
            if total > maxSum:
                maxSum, res = total, level            
            level += 1
        return res
```

#### Java
```java
class Solution {
    public int maxLevelSum(TreeNode root) {
        Queue<TreeNode> q = new LinkedList<>();
        int maxSum = root.val;;
        int level = 1;
        int ans = 1;
        q.offer(root);
        while (!q.isEmpty()) {
            int size = q.size();
            int levelSum = 0;
            for (int i = 0; i < size; i++) {
                TreeNode node = q.poll();
                levelSum += node.val;
                if (node.left != null) q.add(node.left);
                if (node.right != null) q.add(node.right);
            }
            
            if (levelSum > maxSum){
                maxSum = levelSum;
                ans = level;        
            }
            level ++;
            
        }
        return ans;
    }
}
```
<Disqus shortname="patricksudo" />