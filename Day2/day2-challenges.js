console.log("Challenges Day 2");
//Given an array of numbers, find and return the maximum value using the reduce method
const num=[3,8,5,7,2];
const max=num.reduce((a, b) => (a > b ? a : b));
console.log("1:", max);

//Given a string containing multiple words separated by spaces, return a new string with the words in reverse order.
const sentence = "day two challenges";
const reversed = sentence.split(" ").reverse().join(" ");
console.log("2:" ,reversed);

//Swap two numbers with destructuring 
let a = 10, b = 20;
[a, b] = [b, a];
console.log("3:", a, b); 

//Unique array – From [1,2,2,3,3,3] return [1,2,3].
const ar=[1,2,2,3,3,3];
const unique=[...new Set(ar)];
console.log("4:", unique);

//Capitalize each word "nimesh hasith"
const names=["nimesh","hasith"];
const capitalized=names.map(name=> name[0].toUpperCase() +name.slice(1));
console.log("5:", capitalized);

//Given two arrays, merge them into one and return the merged array sorted in ascending order.
const arr1= [2,5];
const arr2= [4,6];
const mergedSorted=[...arr1, ...arr2].sort((a,b) => a-b);
console.log("6:", mergedSorted);

//Instead of frequency  count how many letters are in the string.
const word = "banana";
console.log("7:", word.length);

//Show  even numbers.
const nums = [5,6,7,8];
const evens = nums.filter(n => n % 2 === 0);
console.log("8:", evens);

//Return a string without using Promise/async.
function greet(name) {
    return `Hello, ${name}`;
}
console.log("9:",greet("Nimesh"));

//Find the biggest salary value

const salaries = [5000, 7000, 6000];
const maxSalary = Math.max(...salaries);
console.log("10:",maxSalary);