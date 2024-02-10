"use strict";
console.log("hello world");
// 1. Given a string, reverse each word in ths sentence

let sentence = "Hello world";

function sentenceReverse(srt) {
  let array = srt.split(" ").map(function (word) {
    return word.split("").reverse().join("");
  });
  return array.join(" ");
}
console.log(sentenceReverse(sentence));

// 2. How to check if an object is an array or not?
function checkArray(str) {
  return Array.isArray(str);
}
console.log(checkArray({}));

// 3. How to empty an array in js ?

function emptyArray(arr) {
  return (arr.length = 0);
}

let domeArray = [1, 2, 3, 4, 5];

console.log(emptyArray(domeArray));

// 4. How would you check if a number is an interger

function intergerWithMethod(number) {
  return Number.isInteger(number);
}
console.log(intergerWithMethod(23));

function intergerCheck(num) {
  if (num % 1 === 0) {
    return true;
  } else return false;
}

console.log(intergerCheck(23.5));

// 5. Make array duplicate function

function arrayDuplicate(arr) {
  return [...arr, ...arr];
}
let domeArray2 = [1, 2, 3, 4, 5];
console.log(arrayDuplicate(domeArray2));

// 6. Write a js function that reverse a number

function reverseNumber(number) {
  return Number(number.toString().split("").reverse().join(""));
}
console.log(reverseNumber(123456));

function reverseNumber2(number) {
  var rev = 0;
  while (number > 0) {
    var rem = number % 10;
    rev = rev * 10 + rem;
    number = Math.floor(number / 10);
  }
  return rev;
}
console.log(reverseNumber2(1234));
// 7. Write a js function that check whether a passed string is palindrom or not

function checkPalindrom(string) {
  let newStr = string.split("").reverse().join("");
  return string === newStr ? true : false;
}
console.log(checkPalindrom("lool"));

// 8. Write a js function that  return a passed string with letters in alphabetical order

function alphabeticalOrder(string) {
  return string.split("").sort().join("");
}
console.log(alphabeticalOrder("dcba"));

// 9. Write a js function that accepts a string as a parameter and convert the first letter of each word of the
// string in upper case

function stringUppercase(string) {
  let newString = string.split(" ").map(word => {
    console.log(word.charAt(0));
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return newString.join(" ");
}

console.log(stringUppercase("Hello new world"));

// 10. Write a js function which accepts an argument and returns the type

function returnTypeOf(arg) {
  let typeOf = typeof arg;
  return typeOf;
}

console.log(returnTypeOf(true));

// 11. Write a js function to get the number of occurrences of each letter in specified string

function checkOccurrences(str) {
  let obj = {};
  str.split("").forEach(function (e) {
    if (obj.hasOwnProperty(e) === false) {
      obj[e] = 1;
    } else {
      obj[e]++;
    }
  });
  return obj;
}
console.log(checkOccurrences("akash"));

// 12. Loop an array and add all number of it

function arraySum(arr) {
  let sum = 0;
  arr.forEach(function (e) {
    sum = sum + e;
  });
  return sum;
}

console.log(arraySum([2, 5, 4, 32]));

// 13. Loop an array with string and add all number of it
function arraySum2(arr) {
  let sum = 0;
  arr.forEach(function (e) {
    if (typeof e === "number") {
      sum = sum + e;
    }
  });
  return sum;
}
console.log(arraySum2([2, 5, 4, 2, "qewr", "qewr"]));

// 14. loop an array of object and remove all object which dont have gender's value male

let person = [
  {
    name: "John",
    gender: "male"
  },
  {
    name: "John",
    gender: "female"
  },
  {
    name: "John",
    gender: "female"
  }
];

let newperson = person.filter(e => {
  if (e.gender === "male") {
    return e;
  }
});
console.log(newperson);

// 15. Write a js function to clone an array

function cloneArray(arr) {
  return [...arr];
}

console.log(cloneArray([1, 2, 3, 4, 5]));

// 16. Write a js function to get the first element of an array.
// passing a parameter 'n' will return the first 'n' element of the array

function retrive(arr = [], n = 1) {
  if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      console.log(arr[i]);
    }
  }
}

retrive([1, 2, 4, 5], 3);
// 16. Write a js function to get the last element of an array.
// passing a parameter 'n' will return the last 'n' element of the array
function retriveLast(arr = [], n = 1) {
  if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      console.log(arr[arr.length - 1 - i]);
    }
  }
}

retriveLast([1, 2, 4, 5], 3);

// 17 Write a js program to find the most frequent item of an array

function frequency(arr) {
  var freq = {};
  arr.forEach(elem => {
    if (freq.hasOwnProperty(elem)) {
      freq[elem]++;
    } else {
      freq[elem] = 1;
    }
  });
  var ans = Object.keys(freq).reduce((acc, next) => {
    return freq[acc] > freq[next] ? acc : next;
  });
  return ans;
}

console.log(frequency([2, 3, 45, 3, 4, 5, 3, 2, 2, 2]));

// 18 write a js program to suffle an array

function shuffle(arr) {
  var totalShuffleArea = arr.length;
  while (totalShuffleArea > 0) {
    totalShuffleArea--;
    var index = Math.floor(Math.random() * totalShuffleArea);
    var temp = arr[totalShuffleArea];
    arr[totalShuffleArea] = arr[index];
    arr[index] = temp;
  }
  return arr;
}

// console.log(shuffle([2,1,3,5]))

// 19 How do you verify two strings are anagrams?

function anagramsFunction(a, b) {
  console.log(a.split("").sort().join(""));
  console.log(b.split("").sort().join(""));
  return a.split("").sort().join("") === b.split("").sort().join("");
}
console.log(anagramsFunction("tea", "eat"));

// 78. What is the output of below code?
try {
  setTimeout(() => {
    console.log("try block");
    //   throw new Error(`An exception is thrown`);
  }, 1000);
} catch (err) {
  console.log("Error: ", err);
}

const a = new Number(10);
const b = 10;
console.log(a === b);

let obj1 = {};
let obj2 = {};
console.log(obj1 === obj2);

console.log(+true);

const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};

//   console.log(mouse.bird.size,"asdf")
console.log(mouse[bird.size]);
console.log(mouse[bird["size"]]);

let greeting;
greeting = {};
console.log(greeting);

function bark() {
  console.log("Woof!");
}

console.log((bark.animal = "dog"));

let newP = new Promise((res, rej) => {
  let rand = Math.floor(Math.random() * 10);
  if (rand < 5) {
    res("Promiess fullfiled");
  } else {
    rej("Promiss Not fullfiled");
  }
});
console.log(newP);

console.log({ ...bird, ...mouse });

// create object using class

class Person {
  constructor(name, email) {
    (this.name = name), (this.email = email);
  }

  greet() {
    return this.name;
  }
}

let objnew = new Person("akash", "test@gmail.com");
console.log(objnew.greet());

function createObject(name, email) {
  return {
    name: name,
    email: email,
    greet: function () {
      return this.name;
    }
  };
}
let funobj = createObject("akash", "test@gmail.com");
console.log(funobj.greet());

let newObj = Object.create({
  name: "akash"
});

//Object shallocopy and deep copy

let shallocopy = {
  name: "akash",
  age: 28,
  key3: {
    key: "asdf"
  }
};
let copy = { ...shallocopy };

copy.key3.key = "adsfas";
console.log(copy);
console.log(shallocopy);

let deepcopy = JSON.parse(JSON.stringify(shallocopy));
deepcopy.key3.key = 121234;
console.log(deepcopy);
console.log(shallocopy);

//How to lock a object property is js
let user = {
  name: "akash",
  email: "test@gmail.com"
};
// Object.defineProperty(user,email,{writable:true})

//Faltten Neasted Arrays is js

function FalttenArrays(arr) {
  let f = [];
  arr.forEach(e => {
    if (Array.isArray(e) === true) {
      f = f.concat(FalttenArrays(e));
    } else {
      f.push(e);
    }
  });
  return f;
}

console.log(FalttenArrays([1, 2, 3, [1, 4, 2], 12]));
let falttenArr = [1, 2, 3, [[1, 2, 4], 3], [1, 2, 4]];
console.log(falttenArr.flat(Infinity));

function RotateArr(arr, k) {
  let orignl = arr;
  let karr = arr.slice(k);
  console.log(karr);
  console.log(orignl.slice(k).concat(arr));
}

RotateArr([1, 2, 4, 32, 4], 2);

//what is call back function

function addTwo(a, b) {
  return a + b;
}
function displayresults(a, b, callFunc) {
  let result = callFunc(a, b);
  return result;
}

console.log(displayresults(4, 6, addTwo));

//Certainly! Below is an implementation of a custom map function for arrays using prototypes in JavaScript:

Array.prototype.customMap = function (callback) {
  let mappedArray = [];
  for (let i = 0; i < this.length; i++) {
    mappedArray.push(callback(this[i], i, this));
  }
  return mappedArray;
};

Array.prototype.customFilter = function (callback) {
  let filteredArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      filteredArray.push(this[i]);
    }
  }
};

// Write a function that return the reverse of a string?
function reverseString(string) {
  let reversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}

function reverseString2(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString("akash"));
console.log(reverseString2("akash"));

//Write a function that return the longest word in the sentence.

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";

  // for(let word of words) {
  //   if (word.length > longestWord.length) {
  //     longestWord = word;
  //   }
  // }
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  })
  return longestWord
}


console.log(findLongestWord("I love coding in javascript"))

//write a function that checks whether a given string is palindrome or not?

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("")
  return str === reversed
}

console.log(isPalindrome('lool'))


// Write a function to remove duplicates elements from an array

function removeDuplicates(arr) {
  const uniqueElements = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueElements.indexOf(arr[i]) === -1) {
      uniqueElements.push(arr[i]);
    }
  }
  return uniqueElements
}

console.log(removeDuplicates([1, 2, 1, 2, 14, 53, 1, 2, 3]))

function removeDuplicates2(arr) {
  return [...new Set(arr)]
}
console.log(removeDuplicates2([1, 2, 1, 2, 14, 53, 1, 2, 3]))


// Write a function that checks whether two string are anagrams or not

function anagramsString(str1, str2) {
  let strValue1 = str1.sort();
  let strValue2 = str2.sort();
  return strValue1 === strValue2
}

console.log(anagramsFunction("tea", "eat"))

// write a function that return the number of vowels in a string

function countVowels(str) {
  let vowelsArr = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowelsArr.includes(char)) {
      count++
    }
  }
  return count
}
console.log(countVowels("hello world"))

function findLargestNumber(arr) {
  let largestNumber = arr[i]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i]
    }
  }

  return largestNumber

}

// Write a function to check if a given number is prime or not

function isPrime(number) {

  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true;
}
console.log(isPrime(10))

// write a function to calculate the factorial of a number.

function factorial(number) {
  if (num === 0) {
    return 1
  }

  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i
  }
  return factorial
}
//Problem statemet : given a positive number 'num',
//  find it binary equvalent using recursion
// 
function binaryEquvalent(num) {
  if (num === 0 || num === 1) {
    return String(num)
  }

  return binaryEquvalent(Math.floor(num / 2)) + String(num % 2);
}
console.log(binaryEquvalent(2))

function binarySearch(arr, searchValue, low = 0, high = arr.length - 1) {

  if (high < low || arr.length === 0) return -1

  const mid = low + Math.floor((high - low) / 2)
  console.log(mid, "mid")

  if (arr[mid] === searchValue) {
    return mid
  }

  if (arr[mid] > searchValue) {
    return binarySearch(arr, searchValue, low, mid - 1)
  }
  console.log(arr)
  return binarySearch(arr, searchValue, mid + 1, high)
}

console.log(binarySearch([1, 2, 3, 4, 5], 5))


//Calculates GCD of two numbers using euclidean recursive algorithm

function gcd(num, num2) {
  if (num2 === 0) {
    return num
  } else {
    return gcd(num2, num % num2)
  }
}
console.log(gcd(48, 12))

function gcd2(f, s) {
  while (s !== 0) {
    const temp = s;
    s = f % s;
    f = temp
  }
  return f
}
console.log(gcd2(48, 12))


// find factoial using recuursion
function factoial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError("Input should be a non-negative whole number")
  }
  if (n === 0) {
    return 1
  }

  return n * factoial(n - 1)

}


// Fibonacci function to return the n-th fibonacci number

function fibonacciSeries(n) {
  if (n < 2) {
    return n
  }
  return fibonacciSeries(n - 2) + fibonacciSeries(n - 1)
}
console.log(fibonacciSeries(25))

function ReverseArray() {
  for (let i = 0; j = arr.length - 1;
    i < (anagramsFunction.length / 2); i++ j-- ) {

  }
}