---
title: 1041. Robot Bounded In Circle
description: leetcode 1041. Robot Bounded In Circle
date: 2020-02-16
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Hard
  - DP
categories:
  - LeetCode
---
[LeetCode 1041. Robot Bounded In Circle](https://leetcode.com/problems/robot-bounded-in-circle/)

---
### Problem: <br/>

On an infinite plane, a robot initially stands at `(0, 0)` and faces north. The robot can receive one of three instructions:

- "G": go straight 1 unit;
- "L": turn 90 degrees to the left;
- "R": turn 90 degrees to the right.
The robot performs the `instructions` given in order, and repeats them forever.

Return `true` if and only if there exists a circle in the plane such that the robot never leaves the circle.

#### Example 1:

    Input: instructions = "GGLLGG"
    Output: true
    Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
    When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.

#### Example 2:

    Input: instructions = "GG"
    Output: false
    Explanation: The robot moves north indefinitely.

#### Example 3:

    Input: instructions = "GL"
    Output: true
    Explanation: The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...



#### Constraints:

- 1 <= instructions.length <= 100
- instructions[i] is 'G', 'L' or, 'R'.


---
### Solution: <br/>

It's a problem can be solve by simple linear algebra. We define `[dx, dy]` as the vector representing the direction, then the rotation can be written as $\begin{pmatrix}
  x & y 
\end{pmatrix}$  $\cdot$  $\begin{pmatrix}
  \cos\theta & -\sin\theta\\ 
  \sin\theta & \cos\theta
\end{pmatrix}$.

Two rotation conditions are shown below:
1. Turn right, $\theta = 90\degree$ , dx, dy = dy, -dx
2. Turn right, $\theta = -90\degree$ , dx, dy = -dy, dx

When it goes straight, it will be `x += dx`, `y += dy`. After iterating all the instructions, is it is still at origin, or the direction is not same as the initial direction (mean no parallel), we get a circle.

Time complexity: $O(n)$</br>
Space complexity: $O(1)$ 
</br>
</br>

#### Python
```python
class Solution:
    def isRobotBounded(self, instructions: str) -> bool:
        x, y = 0, 0
        dx, dy = 0, 1
        for sign in instructions:
            if sign == "G":
                x += dx
                y += dy
            elif sign == "L":
                dx, dy = dy, -dx
            elif sign == "R":
                dx, dy = -dy, dx
        return (x, y) == (0, 0) or (dx, dy) != (0, 1)
                
```

#### Java
```java
class Solution {
    public boolean isRobotBounded(String instructions) {
        int x = 0, y = 0;
        int dx = 0, dy = 1;
        for(char c: instructions.toCharArray()){
            if(c == 'G') {
                x += dx;
                y += dy;
            } else if (c == 'L'){
                int temp = dx;
                dx = -dy;
                dy = temp;
            } else if (c == 'R'){
                int temp = dx;
                dx = dy;
                dy = -temp;
            }
        }
        return ((x == 0 && y == 0) || !(dx == 0 && dy == 1)) ? true : false;
    }   
}
```
<Disqus shortname="patricksudo" />