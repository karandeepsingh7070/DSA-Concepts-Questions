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

// find path to leaf node 
class Solution {
    /**
    * @param Node root

    * @returns number[][]
    */
    findPath(node,ans,ds) {
        if(node == null) {
            return true
        }
        ds.push(node.data)
        let leftCheck = this.findPath(node.left,ans,ds)
        let rightCheck = this.findPath(node.right,ans,ds)
        if(leftCheck && rightCheck) {
            ans.push([...ds])
        }
        ds.pop()
        return false
        
        
    }
    Paths(root) {
        let ans = []
        let ds = []
        this.findPath(root,ans,ds)
        return ans
    }
}

// Lowest Common Ancestor of a Binary Tree - leetcode 236
var lowestCommonAncestor = function(root, p, q) {
    if(root == null || root == p || root == q) return root
    
    let lNode = lowestCommonAncestor(root.left,p,q)
    let rNode = lowestCommonAncestor(root.right,p,q)
    if(lNode == null) {
        return rNode
    }else if(rNode == null) {
        return lNode
    }else return root
};

// Construct Binary Tree from Inorder and Postorder Traversal - lletcode 106
var constructTree = function(inorder, is, ie, postorder, ps, pe, hm) {
    if(ps > pe || is > ie) return null
    let root = new TreeNode(postorder[pe],null,null)
    
    let inRoot = hm[postorder[pe]]
    let numLeft = inRoot - is

    root.left = constructTree(inorder, is, inRoot - 1, postorder, ps, ps + numLeft - 1, hm)
    root.right = constructTree(inorder, inRoot + 1, ie, postorder, ps + numLeft, pe - 1, hm)

    return root
}
var buildTree = function(inorder, postorder) {
    if(inorder == null || postorder === null || inorder.length != postorder.length) return null
    let ans = []
    let hm = {}
    for(let i = 0; i< inorder.length; i++) {
        hm[inorder[i]] = i
    }
    return constructTree(inorder, 0, inorder.length - 1, postorder, 0,postorder.length - 1, hm)
};



class CustomQueue {
    constructor() {
        this.items = []
    }
    enqueue(elm) {
        return this.items.push(elm)
    }
    dequeue() {
        return this.items.shift()
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

// Serialize and Deserialize Binary Tree - leetcode 297
var serialize = function(root) {
    if (root === null) return "#";

    let serialized = "";
    let q = new CustomQueue();
    q.enqueue(root);

    while (!q.isEmpty()) {
        let size = q.size();
        let level = "";
        for (let i = 0; i < size; i++) {
            let front = q.dequeue();
            if (front === null) {
                level += "#,";
                continue;
            }
            level += front.val + ",";
            q.enqueue(front.left);
            q.enqueue(front.right);
        }
        serialized += level;
    }
    return serialized;
};

var deserialize = function(data) {
    if (data === "" || data === "#") return null;
    let deserialized = []
    let values = data.split(",")
    let root = new TreeNode(parseInt(values[0]))
    let q = new CustomQueue();
    q.enqueue(root);
    let strI = 1
    while (!q.isEmpty()) {
        let front = q.dequeue();

        if (values[strI] !== "#") {
            let leftNode = new TreeNode(parseInt(values[strI]));
            front.left = leftNode;
            q.enqueue(leftNode);
        }
        strI++;

        if (values[strI] !== "#") {
            let rightNode = new TreeNode(parseInt(values[strI]));
            front.right = rightNode;
            q.enqueue(rightNode);
        }
        strI++;
    }
    return root
};

// width of Tree
var widthOfBinaryTree = function(root) {
    if (!root) return 0;
     let q = new CustomQueue();
     q.enqueue({ node: root, lvl: 0 });
     let res = 1;
 
     while(!q.isEmpty()) {
         let size = q.size()
         let first = 0
         let last = 0
         let levelMin = q.front().lvl; // to normalize index
         for(let i = 0; i < size; i++) {
             let front = q.front();
             let cur_id = front.lvl - levelMin;
             if(i === 0) first = cur_id
             if(i === size - 1) last = cur_id
             q.dequeue()
             if(front.node.left != null) q.enqueue({node : front.node.left, lvl : 2 * cur_id + 1})
             if(front.node.right != null) q.enqueue({node : front.node.right, lvl : 2 * cur_id + 2})
 
         }
         res = Math.max(res,last - first + 1)
     }
 
     return res
 };