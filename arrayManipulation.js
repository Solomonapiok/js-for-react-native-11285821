// Task 1
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
}
// example
const result = processArray([1, 2, 3, 4]);
console.log(result); // result [3, 4, 9, 16]