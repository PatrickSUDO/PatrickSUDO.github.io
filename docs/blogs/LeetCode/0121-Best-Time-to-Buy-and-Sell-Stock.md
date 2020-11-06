---
title: 121. Best Time to Buy and Sell Stock
description: leetcode 121. Best Time to Buy and Sell Stock
date: 2020-11-06
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - DP
categories:
  - LeetCode
---
[LeetCode 0121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

---
### Problem: <br/>

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

#### Example 1:

    Input: [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    Not 7-1 = 6, as selling price needs to be larger than buying price.

#### Example 2:

    Input: [7,6,4,3,1]
    Output: 0
    Explanation: In this case, no transaction is done, i.e. max profit = 0.


---
### Solution: <br/>
Dynamic programming solution is often used to solve problems asking for optimized value. Because buying stocks and then selling them requires a sequence, it must be the maximum value of the difference between the current state value and the previous minimum value.

Dynamic programming problems can be written in arrays. In this question, we can simplify using only variables to record the values. The steps are as follow:

1. Save the minimum value of all previous values when you see this value.
2. Record the difference between the current value and this minimum value.
3. Find the maximum value of the difference in all of them.


Time complexity: $O(n)$</br>
Space complexity: $O(1)$ 
</br>
</br>

#### Python
```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        res, cur = 0, 0
        for i in range(1, len(prices)):
            cur = max(0, cur + prices[i] - prices[i-1])
            res = max(res, cur)
        return res
```

#### Java
```java
class Solution {
    public int maxProfit(int[] prices) {
        int profit = 0;
        int ans = 0; 
        for (int i = 1 ; i < prices.length; i++){
            profit = Math.max(0, profit + prices[i] - prices[i-1]);
            ans = Math.max(ans, profit);
        }     
        return ans;
    }
}
```
<Disqus shortname="patricksudo" />