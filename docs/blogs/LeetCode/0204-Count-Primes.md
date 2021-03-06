---
title: 204. Count Primes
description: leetcode 204. Count Primes
date: 2020-10-24
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Hash Table
  - Math
categories:
  - LeetCode
---
[LeetCode 0204. Count Primes](https://leetcode.com/problems/count-primes/)

---
### Problem: 

Count the number of prime numbers less than a non-negative number, n.



#### Example 1:

    Input: n = 10
    Output: 4
    Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

#### Example 2:

    Input: n = 0
    Output: 0

#### Example 3:

    Input: n = 1
    Output: 0

#### Constraints:
- 0 <= n <= 5 * 10<sup>6</sup>


---
### Solution:
TLE if you use brute force without optimizing. There is a mathematical method to solve such a problem efficiently. That is **Sieve of Eratosthenes**. As the animation below, when we find a prime, we can simultaneously mark all its multiples to check the root mean square times of the given upper limit. 

![Alt Text](https://assets.leetcode.com/static_assets/public/images/solutions/Sieve_of_Eratosthenes_animation.gif)</br> (ref: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)

Time complexity: $O(n)$ </br>
Space complexity: $O(n)$
</br>
</br>

```python
class Solution:
    def countPrimes(self, n: int) -> int:
        if n < 3: return 0
        notPrime = set()
        notPrime.add(1)
        notPrime.add(0)
        for i in range(2, int(n**0.5) + 1):
            if i not in notPrime:
                for j in range(i*i,n,i):
                    notPrime.add(j)
        return n - len(notPrime)
```
<Disqus shortname="patricksudo" />

