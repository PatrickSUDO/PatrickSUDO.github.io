---
title: 437. Path Sum III
description: leetcode 437. Path Sum III
date: 2021-01-04
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Tree
categories:
  - LeetCode
---
[LeetCode 0437. Path Sum III](https://leetcode.com/problems/path-sum-iii/)

---
### Problem: <br/>


You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

#### Example:

    root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

         10
        /  \
        5   -3
       / \    \
      3   2    11
     / \   \
    3  -2   1

    Return 3. The paths that sum to 8 are:

    1.  5 -> 3
    2.  5 -> 2 -> 1
    3. -3 -> 11

---
### Solution 1: <br/>

Two recursive functions are used. The dfs recursive function is based on the current node as the starting point. It uses pre-order traversal and processes each traversed node. It maintains a variable `target` to record the value needed after visiting the previous path. We deduct the value of the current node when passing to the next recursion. If the target goes to 0, then we add 1 to the answer. Next, we call the recursive function to traverse the current node's left and right child nodes.  In the pathSum function, we call the dfs function on the current node and call the pathSum recursive function on both child nodes. The sum of the return values of the three is the answer.

Time complexity: $O(n^2)$ </br> (two recursion with one in $O(n)$)
Space complexity: $O(n)$ 
</br>
</br>

#### Python
```python
class Solution:
    def pathSum(self, root: TreeNode, sum: int) -> int:
        if not root: return 0
        return self.dfs(root, sum) + self.pathSum(root.left, sum) + self.pathSum(root.right, sum)
    def dfs(self, root, target):
        ans = 0
        if not root: return ans
        target -= root.val
        if target == 0:
            ans += 1
        ans += self.dfs(root.left, target)
        ans += self.dfs(root.right, target)
        return ans
```

#### Java
```java
class Solution {
    public int pathSum(TreeNode root, int sum) {
        if(root == null) return 0;
        return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
    }
    private int dfs(TreeNode root, int target){
        int ans = 0;
        if(target == root.val) ans ++;
        if(root.left != null) ans += dfs(root.left, target - root.val);        
        if(root.right != null) ans += dfs(root.right, target - root.val);
        return ans;
    }
}
```

### Solution 2: <br/>

In the previous solution, some redundant paths will be visited. Also, we don't need to go to the end to know the sum is not valid in some cases. Hence, we use a HashMap as a cache to memorize the sum of the previous path. The idea is similar to **1. Two Sum**. The key of the HashMap is the sum of nodes, and the value is its occurrence. Hence, we should put (0,1) in the cache first. The initial state is the summation 0 with 1 as frequency. As with the normal recursion, we should check if the node is null first. Then, add the value of the current node to `currSum`. Since the `curSum` may be greater than the target value at this time, we subtract the `target` from curSum and find the mapping value of this difference in HashMap. If the mapping value is greater than 0, it means that the endpoint is the current node, and the path contains a series of nodes with summation equals to the target. When `curSum` is equal to `target`, it indicates that the way from the root node to the current node is precisely the path that meets the criteria. Now, the occurrence of `currSum` should add 1 and put back to the cache.  Note that `getOrDefault` in Java can handle the situation that if the key is not in the cache, its value should be 0. Next, the answer should add the value of using the left or right child as the starting point.
Last, before returning, we should remove the current sum from the cache to not use it during the parallel subtree processing.

Time complexity: $O(n)$</br> 
Space complexity: $O(h)$ 

#### Java
```java
//inspired by tankztc
class Solution {
    public int pathSum(TreeNode root, int sum) {
        if(root == null) return 0;
        HashMap<Integer, Integer> cache = new HashMap<>();
        cache.put(0, 1);
        return dfs(root, 0, sum, cache);
    }
    
    private int dfs(TreeNode root, int currSum, int target, HashMap<Integer, Integer> cache){
        if(root == null) return 0;
        
        currSum += root.val;
        //fetch the frequence of the old path sum, if there is
        int ans = cache.getOrDefault(currSum - target, 0);
        
        //add this path to the cache, if currSum == target, we increment the frequency and get another path
        cache.put(currSum, cache.getOrDefault(currSum, 0) + 1);
        
        ans += dfs(root.left, currSum, target, cache);        
        ans += dfs(root.right, currSum, target, cache);
        
        //this path is not available in later traverse.
        cache.put(currSum, cache.get(currSum) - 1);
        return ans;
    }
}
```


<Disqus shortname="patricksudo" />