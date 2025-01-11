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

// #6 Odd Even Linked List - leetcode 328
var oddEvenList = function(head) {
    if(head == null || head.next == null) return head
    let odd = head
    let even = head.next
    let evenFirstNode = head.next
    while(even !=null && even.next != null) {
        odd.next = odd.next.next
        even.next = even.next.next
        even = even.next // remember you have already pointed odd and even next to updated positions
        odd = odd.next
    }
    odd.next = evenFirstNode
    return head
};

// #7 Remove Nth Node From End of List - leetcode 19
//BRUTE

var removeNthFromEnd = function(head, n) {
    if(head == null) return head
    let cnt = 0
    let current = head
    while(current != null) {
        cnt++
        current = current.next
    }
    if(cnt == n) {
        // removes head
        let newHead = head.next
        head.next = null
        return newHead
    }
    let res = cnt - n
    current = head
    while(current != null) {
        res--
        if(res == 0) break
        current = current.next
    }
    let deletingNode = current.next
    current.next = current.next.next
    deletingNode.next = null
    return head
};

var removeNthFromEnd = function(head, n) {
    if(head == null) return head
    let slow = head
    let fast = head
    // let cnt = 0
    // while(cnt == n) {
    //     cnt++
    //     fast = fast.next
    // }
    for(let i = 0; i< n; i++) {
        fast = fast.next
    }
    if(fast == null) { //asking to delete head i.e n = no of nodes
        let newHead = head.next
        head.next = null
        return newHead
    }
    while(fast.next != null) {
        slow = slow.next
        fast = fast.next
    }
    let deletingNode = slow.next
    slow.next = slow.next.next
    deletingNode.next = null
    return head
};

// #8 Delete the Middle Node of a Linked List - leetcode 2095

var deleteMiddle = function(head) {
    if(head == null) return head
    if(head.next == null) return null
    let slow = head
    let fast = head.next // slight change of tortoise and here solution, instead of starting form head, start from next node, it'll help with condition fat.next.next
    while(fast !=null && fast.next != null) {
        if(fast.next.next) {
        slow = slow.next
        fast = fast.next.next
        }else {
            break
        }
    }
    let deletingNode = slow.next
    slow.next = slow.next.next
    deletingNode.next = null
    return head
};
// alternate instad of starting of fast from head. nest, skip one step of slow
var deleteMiddle = function(head) {
    if(head == null) return head
    if(head.next == null) return null
    let slow = head
    let fast = head.next.next
    while(fast !=null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
    }
    let deletingNode = slow.next
    slow.next = slow.next.next
    deletingNode.next = null
    return head
};