---
title: 142. Linked List Cycle II
description: leetcode 142. Linked List Cycle II
date: 2021-01-28
author: PatrickSUDO
sidebar: 'auto'
sidebarDepth: 2
tags: 
  - LeetCode-Medium
  - Linked List
  - Two Pointers
categories:
  - LeetCode
---
[LeetCode 0142. Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)

---
### Problem: <br/>

Given a linked list, return the node where the cycle begins. If there is no cycle, return `null`.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that `pos` is not passed as a parameter.**

**Notice** that you **should not modify** the linked list.


#### Example 1:
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png" style="height: 145px; width: 450px;">

    Input: head = [3,2,0,-4], pos = 1
    Output: tail connects to node index 1
    Explanation: There is a cycle in the linked list, where tail connects to the second node.

#### Example 2:
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png" style="height: 105px; width: 201px;">

    Input: head = [1,2], pos = 0
    Output: tail connects to node index 0
    Explanation: There is a cycle in the linked list, where tail connects to the first node.

#### Example 3:
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png" style="height: 65px; width: 65px;">

    Input: head = [1], pos = -1
    Output: no cycle
    Explanation: There is no cycle in the linked list.

#### Constraints:
- The number of the nodes in the list is in the range `[0, 104]`.
- `-105 <= Node.val <= 105`
- `pos` is `-1` or a **valid index** in the linked-list.

**Follow up:** Can you solve it using `O(1)` (i.e. constant) memory?

---
### Solution: <br/>

The diagram below is a linked list with loops. The number of steps from the head of the linked list to the starting point of the loop is K, the number of steps from the loop starting point to the meeting point is M, and the loop length is L.
Then we have the number of steps taken when the fast and slow pointers meet:

slow = K + M
fast = K + M + n*L

And because the fast pointer takes one more step every time:
fast = 2 * slow

It can be inferred from the above three formulas
K = nL-M

Therefore, when the fast and slow pointers meet at the meeting point, we assign the slow pointer return to the head. The faster stays at the meeting point. Then move forward both pointer simultaneously. Both pointers are taken one step at a time. When both pointers meet again, we can have the current node as the meeting point K.

<img src="https://i.imgur.com/uF5w3Ji.png" alt="" class="" data-position="356" data-size="36">

Time complexity: $O(n)$</br>
Space complexity: $O(1)$ 
</br>
</br>

#### Python
```python
class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
        
        slow, fast = head, head
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
            if fast == slow:
                break
                
        if not fast or not fast.next: return None
        slow = head
        while fast != slow:
            fast = fast.next
            slow = slow.next
        return fast
```

#### Java
```java
    public class Solution {
        public ListNode detectCycle(ListNode head) {
            ListNode slow = head, fast = head;
            while(fast != null && fast.next != null){
                fast = fast.next.next;
                slow = slow.next;
                if(slow.equals(fast)) break;
            }

            if(fast == null || fast.next == null) return null;

            slow = head;
            while(!slow.equals(fast)){
                slow = slow.next;
                fast = fast.next;
            }

            return slow;        
        }
    }
```


<Disqus shortname="patricksudo" />