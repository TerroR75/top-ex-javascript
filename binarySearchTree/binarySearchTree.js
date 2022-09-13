class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(array) {
        this.sortedArray = mergeSort(array);
        this.root = new Node(this.sortedArray[Math.floor(this.sortedArray.length / 2)]);
    }

    buildTree() {

    }
}


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