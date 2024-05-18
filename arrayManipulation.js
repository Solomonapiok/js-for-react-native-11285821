// Task 1
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
}
// example
const result = processArray([1, 2, 3, 4]);
console.log(result); // result [3, 4, 9, 16]

//task 2

function formatArrayStrings(stringArr, numArr) {
    return stringArr.map((str, index) => {
        if (numArr[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
        });
    }

    // example
const strings = ['dog', 'sharp', 'bus', 'bowl'];
const numbers = processArray([1, 2, 3, 4]);
const formattedStrings = formatArrayStrings(strings, numbers); 
console.log(formattedStrings);
// output [ 'dog', 'SHARP', 'bus', 'BUS' ]