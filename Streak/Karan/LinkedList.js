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

// #9 Sort LL 148

var findMiddleNode = function(head) {
    let slow = head
    let fast = head.next
    while(fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}
var mergeList = function(leftHead, rightHead) {
    let dummyNode = new ListNode(-1); // Dummy node for the merged list
    let temp = dummyNode;

    // Merge two sorted lists
    while (leftHead !== null && rightHead !== null) {
        if (leftHead.data <= rightHead.data) {
            temp.next = leftHead;
            leftHead = leftHead.next;
        } else {
            temp.next = rightHead;
            rightHead = rightHead.next;
        }
        temp = temp.next;
    }

    // Append remaining nodes from either list
    if (leftHead !== null) temp.next = leftHead;
    else temp.next = rightHead;

    return dummyNode.next; // Return the merged list
};
var sortList = function(head) {
    if (head === null || head.next === null) return head; // Base case 

    // Split the list into two halves
    let middleNode = findMiddleNode(head);
    let rightHead = middleNode.next;
    middleNode.next = null;

    // Recursively sort the left and right halves
    let leftHead = sortList(head);
    rightHead = sortList(rightHead);

    // Merge the sorted halves
    return mergeList(leftHead, rightHead);
};

// #10 Sort a LL with 0's,1's & 2's
class Solution {
    // Function to sort a linked list of 0s, 1s and 2s.
    segregate(head) {
        let zeroHead = new Node(-1)
        let oneHead = new Node(-1)
        let twoHead = new Node(-1)
        let zero = zeroHead
        let one = oneHead
        let two = twoHead
        let temp = head
        while(temp) {
            if(temp.data == 0) {
                zero.next = temp
                zero = temp
            }else if (temp.data == 1) {
                one.next = temp
                one = temp
            }else {
                two.next = temp
                two = temp
            }
            temp = temp.next
        }
        two.next = null
        zero.next = oneHead.next ? oneHead.next : twoHead.next
        one.next = twoHead.next 
        return zeroHead.next
    }
}

// #11 Intersection of Two Linked Lists leetcode 160

var getIntersectionNode = function(headA, headB) {
    if (headA == null || headB == null) return null
    let t1 = headA
    let t2 = headB
    while(t1 != t2 && t1 != null && t2 != null) {
        t1 = t1.next
        t2 = t2.next
        if(t1 == t2) return t1
        if(t1 === null) t1 = headB
        if(t2 === null) t2 = headA
    }
    return t1 
};

// # 12 Add 1 to a Linked List Number

// BRUTE  - //***NOT WORKING***
class Solution {
    reverse(node) {
        if(node == null || node.next == null) return node
        let reverseHead = this.reverse(node.next)
        let front = node.next
        front.next = node
        node.next = null
        return reverseHead
    }
    addOne(node) {
        if(head == null) return head
        let revHead = this.reverse(node)
        let temp = revHead
        let carry = 1
        while(temp != null) {
            temp.data = temp.data + carry
            if(temp.data == 10) {
                temp.data = 0
                carry = 1
            }else {
                carry = 0
                break;
            }
            temp = temp.next
        }
        if(carry == 1) {
            let newHead = new Node(1);
            newHead.next = reverseHead; // Attach the new node at the front
            revHead = newHead;
        }
        return this.reverse(revHead)
    }
}

// WORKING
class Solution {
    carryHelper(head) {
        if(head == null) return 1
        let carry = this.carryHelper(head.next)
        head.data = head.data + carry
        if(head.data < 10) {
            return 0
        }
        head.data = 0
        return 1
        }
    addOne(node) {
        let carry = this.carryHelper(node)
        if(carry == 1) {
            let newHead = new Node(carry)
            newHead.next = node
            return newHead
        }
        return node
    }
}

// #13  Add Two Numbers - leetcode 2

var addTwoNumbers = function(l1, l2) {
    let dummyNode = new ListNode(-1)
    let curr = dummyNode
    let t1 = l1
    let t2 = l2
    let carry = 0
    while(t1 != null || t2 != null) {
        let sum = carry
        if(t1) sum = sum + t1.val
        if(t2) sum = sum + t2.val
        let digit = Math.floor(sum % 10)
        carry = Math.floor(sum / 10)
        let newNode = new ListNode(sum % 10)
        curr.next = newNode
        curr = newNode
        if(t1) t1 = t1.next
        if(t2) t2 = t2.next
    }
    if(carry > 0) {
        let newNode = new ListNode(carry)
        curr.next = newNode
    }
    return dummyNode.next
};
