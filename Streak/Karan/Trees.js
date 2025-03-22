// Print Preorder
var findPreOrder = (node,preOrder) => {
    if(node == null) return
    preOrder.push(node.val)
    findPreOrder(node.left,preOrder)
    findPreOrder(node.right,preOrder)
}
var preorderTraversal = function(root) {
    let preOrder = []
    // pre-order Root->Left->Right
    findPreOrder(root,preOrder)
    return preOrder
};

// Print Inorder
var findInOrder = (node,inOrder) => {
    if(node == null) return
    findInOrder(node.left,inOrder)
    inOrder.push(node.val)
    findInOrder(node.right,inOrder)
}
var inorderTraversal = function(root) {
    //LEFT->ROOT->RIGHT
    let inOrder = []
    findInOrder(root,inOrder)
    return inOrder
};

// Print post order
var findPostOrder = function(node,postOrder) {
    if(node == null) return
    findPostOrder(node.left,postOrder)
    findPostOrder(node.right,postOrder)
    postOrder.push(node.val)
}
var postorderTraversal = function(root) {
    //LEFT->RIGHT->ROOT
    let postOrder = []
    findPostOrder(root,postOrder)
    return postOrder
};

// BFS in binary trrees
class CustomQueue {
    constructor() {
        this.items = []
    }

    enqueue(ele) {
        return this.items.push(ele)
    }
    dequeue() {
        return this.items.length ? this.items.shift() : null
    }
    isEmpty() {
        return this.items.length === 0
    }
    front() {
        return this.items.length ? this.items[0] : null
    }
    size() {
        return this.items.length
    }
}
var levelOrder = function(root) {
    if(root == null) return []
    let ans = []
    let q = new CustomQueue()
    q.enqueue(root)
    while(!q.isEmpty()) {
        let size = q.size()
        let level = []
        for(let i = 0; i< size; i++) {
            let front = q.front()
            q.dequeue()
            if(front.left != null) q.enqueue(front.left)
            if(front.right != null) q.enqueue(front.right)
            level.push(front.val)
        }
        ans.push(level)
    }
    return ans
};

// Print preorder using stack

class CustomStack {
    constructor() {
        this.items = []
    }
    push(ele) {
        return this.items.push(ele)
    }
    pop() {
        return this.items.length ? this.items.pop() : null
    }
    top() {
        return this.items.length ? this.items[this.items.length - 1] : null
    }
    isEmpty() {
        return this.items.length === 0;
    }
 }
var preorderTraversal = function(root) {
    if (root == null) return [];
    let preOrderAns = []
    let stk = new CustomStack()
    stk.push(root)

    while(!stk.isEmpty()) {
        let top = stk.pop()

        if(top.right != null) stk.push(top.right)
        if(top.left != null) stk.push(top.left)
        preOrderAns.push(top.val)
    }

    return preOrderAns
};

// Max depth
var maxDepth = function(root) {
    if(root == null) return 0

    let lh = maxDepth(root.left)
    let rh = maxDepth(root.right)

    return 1 + Math.max(lh,rh)
};

// is balanced tree
var findHight = (root) => {
    if(root == null) return 0

    let lh = findHight(root.left)
    let rh = findHight(root.right)

    if(lh == -1 || rh == -1) return -1
    if(Math.abs(lh - rh) > 1) return -1

    return 1 + Math.max(lh,rh)
}
var isBalanced = function(root) {
    let height = findHight(root)
    if (height == -1) return false
    return true
};

// Diameter of a binary tree
var findmaxHeight = function(root,maxi) {
    if(root == null) return 0

    let lh = findmaxHeight(root.left,maxi)
    let rh = findmaxHeight(root.right,maxi)

    maxi.val = Math.max(maxi.val,lh+rh)
    return 1 + Math.max(lh,rh)
}
var diameterOfBinaryTree = function(root) {
    let maxi = {val : 0}
    findmaxHeight(root,maxi)
    return maxi.val
};
// Max sum path
var findmaxSum = function(root, maxi) {
    if(root == null) return 0

    let leftSum = Math.max(0,findmaxSum(root.left,maxi))
    let rightSum = Math.max(0,findmaxSum(root.right,maxi))
    maxi.val = Math.max(maxi.val,leftSum + rightSum + root.val)
    return root.val + Math.max(leftSum,rightSum)
}
var maxPathSum = function(root) {
    let maxi = {val:-Infinity}
    findmaxSum(root,maxi)
    return maxi.val
};

// is same tree
var isSameTree = function(p, q) {
    if(p == null || q == null) {
        return p == q
    }
    return p.val == q.val && 
    isSameTree(p.left,q.left) && 
    isSameTree(p.right,q.right)
};

// print zigzag traversals

var zigzagLevelOrder = function(root) {

    if(root == null) return []
    let ans = []
    let flag = 0
    let q = new CustomQueue()

    q.enqueue(root)

    while(!q.isEmpty()) {
        let size = q.size()
        let level = []

        for(let i = 0; i < size; i++) {
            let front = q.front()
            q.dequeue()
            if(front.left != null) q.enqueue(front.left)
            if(front.right != null) q.enqueue(front.right)
            level.push(front.val)
        }
        if(!flag) ans.push(level)
        else ans.push([...level].reverse())
        flag = !flag
    }
    return ans
};