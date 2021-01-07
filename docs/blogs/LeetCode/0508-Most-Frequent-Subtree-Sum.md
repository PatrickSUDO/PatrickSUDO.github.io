---
title: 508. Most Frequent Subtree Sum
description: leetcode 508. Most Frequent Subtree Sum    
date: 2021-01-07
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Tree
categories:
  - LeetCode
---
[LeetCode 0508. Most Frequent Subtree Sum](https://leetcode.com/problems/most-frequent-subtree-sum/)

---
### Problem: <br/>

Given the root of a tree, you are asked to find the most frequent subtree sum. The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself). So what is the most frequent subtree sum value? If there is a tie, return all the values with the highest frequency in any order.


#### Example 1:
Input:
      5
     /  \
    2   -3

#### Example 2:
Input:
      5
     /  \
    2   -5

return [2], since 2 happens twice, however -5 only occur once.

**Note:** You may assume the sum of values in any subtree is in the range of 32-bit signed integer.

---
### Solution: <br/>

We need a DFS function to get the sum of all the subtree and put them in a HashMap in which the key is the sum, and the value is its frequency. Also, a number recording the max frequency should be assigned as a global variable. After collecting all the sum and its frequency in the HashMap, we add the key which value is equal to the maximum frequency to the `ans`. In Java, the `ans` should be output as `int array`.`mapToInt` and `toArray` can be used to do this job in 1 line.

Time complexity: $O(n)$</br>
Space complexity: $O(n)$ 
</br>
</br>

#### Python
```python
from collections import Counter
class Solution:
    def findFrequentTreeSum(self, root: TreeNode) -> List[int]:
        if not root: return 
        self.f = Counter()
        self.treeSum(root)
        maxf = max(self.f.values())
        return [s for s in self.f.keys() if self.f[s] == maxf]
              
    def treeSum(self, root):
        if not root: return 0
        _sum = root.val + self.treeSum(root.left) + self.treeSum(root.right)
        self.f[_sum] += 1
        return _sum
```


#### Java
```java
class Solution {
    int maxFreq = 0;
    public int[] findFrequentTreeSum(TreeNode root) {
        HashMap<Integer, Integer> counter = new HashMap<>();
        List<Integer> ans = new ArrayList<>();
        dfs(root, counter);
        for(Integer key: counter.keySet()){
            if(counter.get(key) == maxFreq){
                ans.add(key);
            }
        }
        return ans.stream().mapToInt(i -> i).toArray();
    }
    private int dfs(TreeNode root, HashMap<Integer, Integer> counter){
        if(root == null) return 0;
        int currSum = root.val + dfs(root.left, counter) + dfs(root.right, counter);
        counter.put(currSum ,counter.getOrDefault(currSum, 0) + 1);
        maxFreq = Math.max(maxFreq, counter.get(currSum));
        return currSum;
    }
}
```

<Disqus shortname="patricksudo" />