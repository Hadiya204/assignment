//question no 1 
function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    
    return reversedArr;
}
//question no 2
function filterNegativeNumbers(arr) {
    return arr.filter(number => number >= 0);
}
let testArray = [-5, 3, -2, 8, 0, -1, 4];
let filteredArray = filterNegativeNumbers(testArray);
console.log(filteredArray); 
//question no 3
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
     return count;
}
console.log(countVowels("Hello World")); 
console.log(countVowels("JavaScript")); 
console.log(countVowels("AEIOU"));       
console.log(countVowels("rhythm"));     
//question no 4
function isPalindrome(str) {
    const normalizedStr = str
        .replace(/[^a-zA-Z0-9]/g, '') 
        .toLowerCase();
    const reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}
console.log(isPalindrome("kayak"));        
console.log(isPalindrome("refer"));        
console.log(isPalindrome("hello"));        
console.log(isPalindrome("A man, a plan, a canal, Panama")); 
console.log(isPalindrome("No 'x' in Nixon"));
//question no 5
function isInRange(val1, val2) {
    const lowerLimit = 50;
    const upperLimit = 99;
  return (val1 >= lowerLimit && val1 <= upperLimit) || (val2 >= lowerLimit && val2 <= upperLimit);
}
console.log(isInRange(45, 55));
console.log(isInRange(50, 100)); 
console.log(isInRange(49, 49)); 
console.log(isInRange(101, 95)); 
console.log(isInRange(50, 99)); 

