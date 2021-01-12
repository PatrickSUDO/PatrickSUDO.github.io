---
title: 875. Koko Eating Bananas
description: leetcode 875. Koko Eating Bananas
date: 2021-01-12
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Binary Search
categories:
  - LeetCode
---
[LeetCode 875. Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)

---
### Problem: <br/>

Koko loves to eat bananas.  There are `N` piles of bananas, the `i`-th pile has `piles[i]` bananas.  The guards have gone and will come back in `H` hours.

Koko can decide her bananas-per-hour eating speed of `K`.  Each hour, she chooses some pile of bananas, and eats `K` bananas from that pile.  If the pile has less than `K` bananas, she eats all of them instead, and won't eat any more bananas during this hour.

Koko likes to eat slowly, but still wants to finish eating all the bananas before the guards come back.

Return the minimum integer `K` such that she can eat all the bananas within `H` hours.


#### Example 1:

    Input: piles = [3,6,7,11], H = 8
    Output: 4

#### Example 2:

    Input: piles = [30,11,23,4,20], H = 5
    Output: 30

#### Example 3:

    Input: piles = [30,11,23,4,20], H = 6
    Output: 23


#### Constraints:

- 1 <= piles.length <= 10<sup>4</sup>
- piles.length <= H <= 10<sup>9</sup>
- 1 <= piles[i] <= 10<sup>9</sup>


---
### Solution: <br/>

A variant of binary search. Because the output is the slowest speed and it is an integer.  That is, if the target speed `K` is the speed Koko finishing all the bananas in `H` hours, our goal is to get the first speed greater or equal to `K`which is the lower-bound of `K`.

The range of this speed must be between 1 and `max(piles)`, if it is greater than max(piles), it is not the slowest speed. Then we use Binary Search to calculate whether the time to finish eating at a certain speed meets time `H`. If the time is longer than `H`, she is eating too fast and should reduce the speed; otherwise, she should speed up.

The time to eat each bunch of bananas is `math.ceil (pile / speed)`, or just `(pile + K - 1)/K`.

Time complexity: $O(NlogW)$, where N is the number of piles, and W is the maximum size of a pile.</br> 
Space complexity: $O(1)$ 
</br>
</br>

#### Python
```python
class Solution:
    def minEatingSpeed(self, piles: List[int], H: int) -> int:
        l, r = 1, max(piles)+1
        while l < r:
            K = l + (r - l)//2
            h = 0 
            for p in piles:
                h += math.ceil(p / K) 
            if h > H:
                l = K + 1
            else:
                r = K
        return l 
```

#### Java
```java
class Solution {
    public int minEatingSpeed(int[] piles, int H) {
        int l = 1, r = getMax(piles);
        while (l < r) {
            int K = l + (r - l) / 2;
            int h = 0;
            for (int pile : piles) {
                h += (pile + K - 1) / K;
            }
            if (h > H) {
                l = K + 1;
            } else {
                r = K;
            }
        }
        return l;
    }
    private int getMax(int[] arr){
        int max = 0;
        for(int i=0; i < arr.length; i++){
            if(arr[i] > max) max = arr[i];
        }
        return max;
    }
}
```

<Disqus shortname="patricksudo" />