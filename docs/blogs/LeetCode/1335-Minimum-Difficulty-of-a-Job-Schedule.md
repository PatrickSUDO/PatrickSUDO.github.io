---
title: 1335. Minimum Difficulty of a Job Schedule
description: leetcode 1335. Minimum Difficulty of a Job Schedule
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
[LeetCode 1335. Minimum Difficulty of a Job Schedule](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/)

---
### Problem: <br/>

You want to schedule a list of jobs in d days. Jobs are dependent (i.e To work on the `i-th` job, you have to finish all the jobs `j` where `0 <= j < i`).

You have to finish **at least** one task every day. The difficulty of a job schedule is the sum of difficulties of each day of the `d` days. The difficulty of a day is the maximum difficulty of a job done in that day.

Given an array of integers `jobDifficulty` and an integer `d`. The difficulty of the `i-th` job is `jobDifficulty[i]`.

Return the minimum difficulty of a job schedule. If you cannot find a schedule for the jobs return **-1**.

#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2020/01/16/untitled.png" style="width: 365px; height: 230px;">

    Input: jobDifficulty = [6,5,4,3,2,1], d = 2
    Output: 7
    Explanation: First day you can finish the first 5 jobs, total difficulty = 6.
    Second day you can finish the last job, total difficulty = 1.
    The difficulty of the schedule = 6 + 1 = 7 

#### Example 2:

    Input: jobDifficulty = [9,9,9], d = 4
    Output: -1
    Explanation: If you finish a job per day you will still have a free day. you cannot find a schedule for the given jobs.

#### Example 3:

    Input: jobDifficulty = [1,1,1], d = 3
    Output: 3
    Explanation: The schedule is one job per day. total difficulty will be 3.

#### Example 4:

    Input: jobDifficulty = [7,1,7,1,7,1], d = 3
    Output: 15

#### Example 5:

    Input: jobDifficulty = [11,111,22,222,33,333,44,444], d = 6
    Output: 843


#### Constraints:

- 1 <= jobDifficulty.length <= 300
- 0 <= jobDifficulty[i] <= 1000
- 1 <= d <= 10


---
### Solution: <br/>

First, we handle the particular case. When the number of days is larger than the number of jobs, it will return -1 since every day should have a job to do. We define `dp[i]` as the minimum job difficulty when there are i days remaining. Then, we iterate through the day. Next, we define under k days how will i jobs be distributed in k-1 days and in the last available day. The difficulty is defined by the maximum of the current difficulty and difficulties in the remaining jobs on the last available day. We update the minimum difficulties with the maximum difficulties in the current day and the minimum difficulty in the day interval.


Time complexity: $O(knn)$</br>
Space complexity: $O(n)$ 
</br>
</br>

#### Python
```python
class Solution:
    def minDifficulty(self, jobDifficulty: List[int], d: int) -> int:
        n = len(jobDifficulty)
        if d > n: return -1
        dp = [2**32] * n + [0] # The minimum difficulties to in K remaining days
        
        # i is all the job s done in k days
        # j is the remaining jobs in i jobs and will be done at last day
        for k in range(1, d + 1):
            for i in range(n - k + 1):
                maxd, dp[i] = 0, 2**32  #maxd: Maximum job difficulty at last few day of the interval
                for j in range(i, n - k + 1):
                    maxd = max(maxd, jobDifficulty[j])
                    dp[i] = min(dp[i], dp[j+1] + maxd)
        return dp[0]

```

#### Java
```java
class Solution {
    public int minDifficulty(int[] jobDifficulty, int d) {
        int n = jobDifficulty.length;
        if(n < d) return -1;
        int[] dp = new int[n+1];
        for (int i = n - 1; i >= 0; i--){
            dp[i] = Math.max(jobDifficulty[i], dp[i+1]);
        }
        for(int k = 1; k <= d; k ++){
            for(int i = 0; i <= n - k; i ++){
                int maxd = 0;
                dp[i] = Integer.MAX_VALUE;
                for(int j = i; j <= n - k; j ++){
                    maxd = Math.max(maxd, jobDifficulty[j]);
                    dp[i] = Math.min(dp[i], maxd + dp[j+1]);
                }
            }
        }
        return dp[0];
    }
}
```
<Disqus shortname="patricksudo" />