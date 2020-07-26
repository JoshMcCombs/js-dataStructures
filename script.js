// function arrayToList(array) {
//     let list = null;
//     for (let i = array.length - 1; i >= 0; i--) {
//         list = {'value': array[i], 'rest': list}
//     }
//     return list;
// }

// function listToArray(list) {
//     const array = [];
//     for (let node = list; node; node = node.rest) {
//         array.push(node.value);
//     }
//     return array;
// }

function makePass(num) {
    let pass = '';
    let char;
    const arr = `1234567890aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ!@#$%^&*()`.split('');
    for (let i = 0; i < num; i++) {
      char = arr[Math.floor(Math.random() * arr.length)];
      pass = pass.concat(char);
    }
    return pass;
  }

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {'value': array[i], 'rest': list}
    }
    return list;
}

function listToArray(list) {
    const array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
} 

function recursiveRange(num) {
    if (num <= 1) return num;
    else return num + recursiveRange(num - 1);
}

function fib(num) {
    if (num <= 2) {
        return 1;
    } else {
        return (fib(num - 2) + fib(num - 1));
    }
}

function reverse(str){
    if (str.length <= 1) return str[0];
    return str[str.length - 1].concat(reverse(str.slice(0, str.length - 1)))
}

function isPalindrome(str){
    if (str === reverse(str)) return true;
    return false;
}

function linearSearch(array, searchTerm) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchTerm) {
            return i;
        }
    }
    return -1;
}
function binarySearch(sortedArray, searchTerm) {
    let leftPointer = 0;
    let rightPointer = sortedArray.length - 1;
    let pivot = Math.floor((leftPointer + rightPointer) / 2);

    while (leftPointer <= rightPointer && sortedArray[pivot] !== searchTerm) {
        if (sortedArray[pivot] < searchTerm) leftPointer = pivot + 1;
        else rightPointer = pivot - 1;
        pivot = Math.floor((leftPointer + rightPointer) / 2)
    }
    return sortedArray[pivot] === searchTerm ? pivot : -1;
}
// console.log(binarySearch(["a", "b", "c", "d", "e"], 'c'))

function naiveSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++;
        }
    }
    return count;
}
// console.log(naiveSearch('a test string to test', 'test'));

function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function bubbleSort(array) {
    for (let i = array.length; i > 0; i--) {
        let noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, (j + 1))
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return array;
}

function randomArray(length = 10) {
    let randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random() * 100) + 1)
    }
    return randomArray;
}

function selectionSort(array) {
    let lowest;
    for (let i = 0; i < array.length; i++) {
        lowest = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[lowest]) lowest = j;
        }
        if (lowest !== i) swap(array, i, lowest);
    }
    return array;
}

//Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

const longestCommonPrefix = function(str) {
    let longest = '';
    let char;
    if (!str.length) return '';
    for (let i = 0; i < str[0].length; i++) {
        char = str[0][i]
        for (let j = 0; j < str.length; j++) {
            if (str[j][i] !== char) {
                return longest;
            }
        }
        longest = longest.concat(char);
    }
    return longest;
};

// let arrOfStrings = ['dog', 'done', 'does', 'don\'t'];
let arrOfStrings = 'abc';
console.log(longestCommonPrefix(arrOfStrings));