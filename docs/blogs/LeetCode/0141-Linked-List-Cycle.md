---
title: 141. Linked List Cycle
description: leetcode 141. Linked List Cycle
date: 2021-01-01
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Easy
  - Linked List
  - Two Pointers
categories:
  - LeetCode
---
[LeetCode 0141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)

---
### Problem: <br/>

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's next pointer is connected to. **Note that `pos` is not passed as a parameter.**

Return `true` if there is a cycle in the linked list. Otherwise, return `false`.


#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png" style="width: 300px; height: 97px; margin-top: 8px; margin-bottom: 8px;">
    Input: head = [3,2,0,-4], pos = 1
    Output: true
    Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

#### Example 2:
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png" style="width: 141px; height: 74px;">
    Input: head = [1,2], pos = 0
    Output: true
    Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

#### Example 3:
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png" style="width: 45px; height: 45px;">
    Input: head = [1], pos = -1
    Output: false
    Explanation: There is no cycle in the linked list.

#### Constraints:
- The number of the nodes in the list is in the range `[0, 104]`.
- `-105 <= Node.val <= 105`
- `pos` is `-1` or a **valid index** in the linked-list.

---
### Solution: <br/>

1. We create two pointers, one fast and one slow. Keep travsersing, if they overlap, there is a loop, and return True. If .next=None, return False.
2. fast, slow = head, head. Both pointers point to head at the beginning.
3. Build a nested while loop with the conditions fast and fast.next are not null. If they do not exist, it means there is no cycle.
4. fast, slow = fast.next.next, slow.next
5. Pointer reiteration, if fast == slow: return True
6. Other conditions: return False


Time complexity: $O(n)$</br>
Space complexity: $O(1)$ 
</br>
</br>

#### Python
```python
class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        slow = head
        fast = head
        while fast and fast.next and fast.next.next:
            fast = fast.next.next
            slow = slow.next
            if slow == fast:
                return True
        return False
```

#### Java
```java
public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        while(fast != null && fast.next != null && fast.next.next != null){
            fast = fast.next.next;
            slow = slow.next;
            if (slow == fast){
                return true;
            }
        }
        return false;
    }
}
```


<Disqus shortname="patricksudo" />