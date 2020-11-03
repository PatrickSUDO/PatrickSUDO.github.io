---
title: 0957. Prison Cells After N Days
date: 2020-09-24
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Hash Table
categories:
  - LeetCode
---
[LeetCode 0957. Prison Cells After N Days](https://leetcode.com/problems/prison-cells-after-n-days/)

---
**Problem:** <br/>

There are 8 prison cells in a row, and each cell is either occupied or vacant.

Each day, whether the cell is occupied or vacant changes according to the following rules:

If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
Otherwise, it becomes vacant.
(Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.)

We describe the current state of the prison in the following way: cells[i] == 1 if the i-th cell is occupied, else cells[i] == 0.

Given the initial state of the prison, return the state of the prison after N days (and N such changes described above.)

Example 1:

    Input: cells = [0,1,0,1,1,0,0,1], N = 7
    Output: [0,0,1,1,0,0,0,0]
    Explanation: 
    The following table summarizes the state of the prison on each day:
    Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
    Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
    Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
    Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
    Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
    Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
    Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
    Day 7: [0, 0, 1, 1, 0, 0, 0, 0]
  
Example 2:

    Input: cells = [1,0,0,1,0,0,1,0], N = 1000000000
    Output: [0,0,1,1,1,1,1,0]
 

Note:

1. cells.length == 8
2. cells[i] is in {0, 1}
3. 1 <= N <= 1E+9


---
**Solution:** <br/>

We know that the current state depends on the last state, so if the day is big enough, we can consider there is a repeating pattern with certain period exists.
Since the first and last element will remain 0 all the time, and the length of prison is fixe to 8, hence we have only $2^6$ of possible configurations. We record the configuration seen before in a hashmap, and if the same configuration occurs again, we can have the period of the pattern. Then, we only need to exert the get the modulo in the remaining days.


Time $O(2^6)$  <br />
Space $O(2^6)$


```python
class Solution:
    def prisonAfterNDays(self, cells: List[int], N: int) -> List[int]:
        seen = dict()
        seen[str(cells)] = N
        total = N - 1
        while N > 0:  
            seen[str(cells)] = N
            N -= 1
            cells = [0] + [cells[i - 1] ^ cells[i + 1] ^ 1 for i in range(1, 7)] + [0] 
            if str(cells) in seen:
                #cycle period = (first index encountered - current)
                N %= seen[str(cells)] - N
        return cells 
```
<Disqus shortname="patricksudo" />
