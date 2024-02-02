console.log("hello world");
// 1. Given a string, reverse each word in ths sentence

let sentence = "Hello world";

function sentenceReverse(srt) {
  let array = srt.split(" ").map(function(word) {
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
  str.split("").forEach(function(e) {
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
  arr.forEach(function(e) {
    sum = sum + e;
  });
  return sum;
}

console.log(arraySum([2, 5, 4, 32]));

// 13. Loop an array with string and add all number of it
function arraySum2(arr) {
  let sum = 0;
  arr.forEach(function(e) {
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

let newperson = person.filter((e)=>{
    if(e.gender === "male"){
        return e
    }
})
console.log(newperson)

// 15. Write a js function to clone an array

function cloneArray(arr) {
    return [...arr]
}

console.log(cloneArray([1,2,3,4,5]))

// 16. Write a js function to get the first element of an array.
// passing a parameter 'n' will return the first 'n' element of the array

function retrive(arr = [], n= 1){
    if(n <= arr.length){
        for(let i = 0; i < n; i++){
            console.log(arr[i])
        }
    }
}

retrive([1,2,4,5],3)
// 16. Write a js function to get the last element of an array.
// passing a parameter 'n' will return the last 'n' element of the array
function retriveLast(arr = [], n= 1){
    if(n <= arr.length){
        for(let i = 0; i < n; i++){
            console.log(arr[arr.length - 1 - i])
        }
    }
}

retriveLast([1,2,4,5],3)


// Write a js program to find the most frequent item of an array

function frequency(arr) {
    var freq = {}
    arr.forEach((elem)=>{
        if(freq.hasOwnProperty(elem)){
            freq[elem]++
        }else{
            freq[elem] = 1
        }
    })
    var ans = Object.keys(freq).reduce((acc, next)=>{
        return freq[acc] > freq[next] ? acc : next;
    })
    return ans
}

console.log(frequency([2,3,45,3,4,5,3,2,2,2]))


// write a js program to suffle an array

function shuffle(arr){
  var totalShuffleArea =  arr.length;
  while(totalShuffleArea > 0){
    totalShuffleArea--;
    var index = Math.floor(Math.random() * totalShuffleArea)
    var temp = arr[totalShuffleArea]
    arr[totalShuffleArea] = arr[index]
    arr[index] = temp;
  }
  return arr;

}

// console.log(shuffle([2,1,3,5]))