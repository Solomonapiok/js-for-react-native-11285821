// task 3
let id;
id = 1;

function createUserProfiles(names, modifiedNames) {
    return names.map(( name, index) => {
        return {
            originalName: name,
            modifiedNames: modifiedNames[index],
            id: id++,
        };
    });
}

//  example
// Using the names and modified names in Task 2
const number = [1, 2, 3, 4];
const processedNumber = processArray(number);
const names = ['dog', 'sharp', 'bus', 'bowl']
const modifiedNames = formatArrayStrings(names, processedNumber)
const userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);

// The User profile prints out like this 
// [
//   { originalName: 'dog', modifiedNames: 'king', id: 1 },
//   { originalName: 'SHARP', modifiedNames: 'FRED', id: 2 },
//   { originalName: 'bus', modifiedNames: 'sheep', id: 3 },
//   { originalName: 'BOWL', modifiedNames: 'CAT', id: 4 }
// ]