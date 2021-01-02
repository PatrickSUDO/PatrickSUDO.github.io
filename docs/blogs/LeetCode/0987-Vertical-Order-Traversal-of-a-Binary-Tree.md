---
title: 987. Vertical Order Traversal of a Binary Tree
description: leetcode 987. Vertical Order Traversal of a Binary Tree
date: 2021-1-2
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Tree
  - Hash Table
categories:
  - LeetCode
---
[LeetCode 0987. Vertical Order Traversal of a Binary Tree](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/)

---
### Problem: <br/>


Given a binary tree, return the vertical order traversal of its nodes values.

For each node at position `(X, Y)`, its left and right children respectively will be at positions `(X-1, Y-1)` and `(X+1, Y-1)`.

Running a vertical line from `X = -infinity` to `X = +infinity`, whenever the vertical line touches some nodes, we report the values of the nodes in order from top to bottom (decreasing `Y` coordinates).

If two nodes have the same position, then the value of the node that is reported first is the value that is smaller.

Return an list of non-empty reports in order of `X` coordinate.  Every report will have a list of values of nodes.

#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2019/01/31/1236_example_1.PNG" style="width: 201px; height: 186px;">
    Input: [3,9,20,null,null,15,7]
    Output: [[9],[3,15],[20],[7]]
    Explanation: 
    Without loss of generality, we can assume the root node is at position (0, 0):
    Then, the node with value 9 occurs at position (-1, -1);
    The nodes with values 3 and 15 occur at positions (0, 0) and (0, -2);
    The node with value 20 occurs at position (1, -1);
    The node with value 7 occurs at position (2, -2).

#### Example 2:
<img alt="" src="https://assets.leetcode.com/uploads/2019/01/31/tree2.png" style="width: 236px; height: 150px;">
    Input: [1,2,3,4,5,6,7]
    Output: [[4],[2],[1,5,6],[3],[7]]
    Explanation: 
    The node with value 5 and the node with value 6 have the same position according to the given scheme.
    However, in the report "[1,5,6]", the node value of 5 comes first since 5 is smaller than 6.

#### Note:

1. The tree will have between 1 and 1000 nodes.
2. Each node's value will be between 0 and 1000.

---
### Solution: <br/>

We recursively traverse the tree by pre-order way, but we need to record the x-y coordinate in the list. The list will be sort by x, y , value of node accordingly. We then add the node value in the answer by its x-coordinate. The y and root value are server as the comparison criteria if we have same x.


Time complexity: $O(nlogn)$</br>
Space complexity: $O(n))$ 
</br>
</br>

#### Python
```python
#solution inspired by huahualeetcode
class Solution:
    def verticalTraversal(self, root: TreeNode) -> List[List[int]]:
        def dfs(root, x, y, vals):
            if not root: return []
            vals.append((x, y, root.val))
            if root.left: dfs(root.left, x-1, y+1, vals)
            if root.right: dfs(root.right, x+1, y+1, vals)
        vals = []
        dfs(root, 0, 0, vals)
        ans = []
        x_min = -1000
        for x, y, val in sorted(vals) :
            if x != x_min:
                ans.append([])
                x_min = x
            ans[-1].append(val)
        return ans
```

#### Java

In Java, `TreeMap` can be used to sort the pairs with many level. Also, `PriorityQueue` can be used to sort the node value in the same vertical level.
After using DFS to add the node in the nested `TreeMap`, we can then pop the element layer by layer and fill in the answer `ArrayList`.

```java
//solution inspired wangzi6147
class Solution {
    public List<List<Integer>> verticalTraversal(TreeNode root) {
        TreeMap<Integer, TreeMap<Integer, PriorityQueue<Integer>>> vals = new TreeMap<>();
        dfs(root, 0, 0, vals);
        List<List<Integer>> ans = new ArrayList<>();
        for(TreeMap<Integer, PriorityQueue<Integer>> pos: vals.values()){
            ans.add(new ArrayList<>());
            for(PriorityQueue<Integer> nodes: pos.values()){
                while(!nodes.isEmpty()){
                    ans.get(ans.size() - 1).add(nodes.poll());
                }
            }
        }
        return ans;
    }
    private void dfs(TreeNode root, int x, int y, TreeMap<Integer, TreeMap<Integer, PriorityQueue<Integer>>> vals){
        if(root == null){
            return;
        }
        if(!vals.containsKey(x)) vals.put(x, new TreeMap<>());
        if(!vals.get(x).containsKey(y)) vals.get(x).put(y, new PriorityQueue<>());
        vals.get(x).get(y).offer(root.val);
        if(root.left != null) dfs(root.left, x-1, y+1, vals);
        if(root.right != null) dfs(root.right, x+1, y+1, vals);
    }
}
```


<Disqus shortname="patricksudo" />