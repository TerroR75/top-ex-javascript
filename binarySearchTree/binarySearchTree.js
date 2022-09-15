class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(array) {
        this.sortedArray = [...removeDuplicates(mergeSort(array))];
        this.root = this.buildTree(this.sortedArray, 0, this.sortedArray.length - 1);
    }

    buildTree(array, start, end) {
        if (start > end) {
            return null;
        }

        let mid = Math.floor((start + end) / 2);
        let root = new Node(array[mid]);

        root.left = this.buildTree(array, start, mid - 1);
        root.right = this.buildTree(array, mid + 1, end);

        return root;
    }
}


const tree = new BinaryTree([5, 2, 7, 4, 1, 3, 8, 6, 9, 0]);




// Instructions
console.log('To check the tree instance itself, type: %ctree', 'color: yellow; background:black;')
console.log('To visualize the binary tree, type: %cprettyPrint(tree.root)', 'color: yellow; background:black;')







// ARRAY SORTING FUNCTIONS
function mergeSort(array) {
    // If array's length is just 1 => return back the array (nothing to split and sort)
    if (array.length <= 1) {
        return array;
    }

    // Set middle index for the array (odd [1,2,3] and even [1,2,3,4] arrays)
    const middleIndex = Math.floor(array.length / 2);
    // Make copies of left and right array
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    return merge(
        mergeSort(leftArray),
        mergeSort(rightArray)
    );
}
function merge(leftArray, rightArray) {
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        const leftElement = leftArray[leftIndex];
        const rightElement = rightArray[rightIndex];

        if (leftElement < rightElement) {
            mergedArray.push(leftElement);
            leftIndex++;
        }
        else {
            mergedArray.push(rightElement);
            rightIndex++;
        }
    }

    return [...mergedArray, ...leftArray.slice(leftIndex), ...rightArray.slice(rightIndex)];
}

function removeDuplicates(array) {
    return [...new Set(array)];
}

// PrettyPrint - visualize binary tree
const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}