// #1 Reverse Linked List

var reverseList = function(head) {
    if(!head || head.next === null) return head
    let newHead = reverseList(head.next)
    let front = head.next
    front.next = head
    head.next = null
    return newHead
};

// #2 Linked List Cycle
// BRUTE
var hasCycle = function(head) {
    let nodeCnt = new Map()
    let temp = head
    while(temp != null) {
        if(nodeCnt.has(temp)) return true
        nodeCnt.set(temp,1)
        temp = temp.next
    }
    return false
};

//Using Tortoise and here algorithm
var hasCycle = function(head) {
    if(!head || !head.next) return false
    let slow = head
    let fast = head
    while(fast != null && fast.next !=null) {
        slow = slow.next
        fast = fast.next.next
        if(fast !=null && slow !=null && fast == slow) return true
    }
    return false
};

// #3 Linked List Cycle II
var detectCycle = function(head) {
    let isCycleExist = false
    let slow = head
    let fast = head
    while(fast != null && fast.next !=null) {
        slow = slow.next
        fast = fast.next.next
        if(slow != null && fast != null && slow == fast) {
            isCycleExist = true
            break;
        }
    }
    if(isCycleExist) {
        slow = head
        while(slow != fast) {
            slow = slow.next
            fast = fast.next
        }
    }else {
        return null
    }
    return slow
};

// #4 Find length of Loop
class Solution {
    // Function to find the length of a loop in the linked list.
    countNodesinLoop(head) {
        let slow = head
        let fast = head
        while(fast !== null && fast.next !==null) {
            slow = slow.next
            fast = fast.next.next
            if(slow != null && fast != null && slow == fast) {
                let cnt = 1
                slow = slow.next
                while(slow != fast) {
                    cnt++
                    slow = slow.next
                }
                return cnt
            }
        }
        return 0
    }
}

// #5 Palindrome Linked List

var isPalindrome = function(head) {
    if(head == null || head.next == null) return true
    // find middle
    let slow = head
    let fast = head
    while(fast.next != null && fast.next.next != null) {
        slow = slow.next
        fast = fast.next.next
    }
    let newHead = reverse(slow.next) // head of second reversed half
    // comparision
    let first = head
    let second = newHead
    while(second != null) {
        if(first.val !== second.val) {
            reverse(newHead)
            return false
        }
        first = first.next
        second = second.next
    }
    reverse(newHead)
    return true
};