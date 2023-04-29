// // ARRAY CONCAT METHOD CONCAT TWO OR MORE ARRAY INTO EACH OTHER AND RETURN NEW ARRAY BUT DOES NOT CHANGE THE NEW ARRAY HERE YOU CAN SEE THE EXAMPLE GIVEN BELOW

// let array1 = [
//   {
//     name: "masood",
//   },
// ];
// let array2 = [
//   {
//     name: "shakoor",
//   },
// ];

// console.log(array1.concat(array2));
// let array3 = array1.concat(array2);
// array1;
// array2;
// array3;
// let array4 = [{ name: "fakhoor" }];
// let array5 = array4.concat(array1, array2, array3);
// array5;

// //ARRAY PUSH METHOD HELPS TO PUSH ANY THING IN THE EXISTING ARRAY AND YOU CAN MORE THE ONE STRING,NUMBER IN THE EXISTIN ARRAY AND CHANGE THE EXISTING ARRAY AND RETURNS THE LENGHT OF THE ARRAY HERE IS TEH EXAMPLE GIVEN BELOW

// let newArray = [];
// console.log(newArray.push("Masood", "Rabeet", "Salman")); //returns length of array
// console.log(newArray.length);
// newArray;

// if (1) {
//   newArray.push("shakoor");
// } else {
//   console.log("nhi push hwa");
// }
// newArray;

// let newObj = {
//   studentNames: [],
//   studentAge: [],
// };

// console.log(newObj.studentNames.push("shumaila", "shakila", "Jameela")); //returns length of array
// let studentName = newObj.studentNames;
// studentName;

// console.log(newObj["studentAge"].push(23, 34, 55)); //returns lenght of array
// let studentAge = newObj.studentAge;
// studentAge;

// //ARRAY POP METHOD DELETED THE LAST ITEM FROM THE EXISTING ARRAY AND CHANGE THE EXISTING ARRAY AND RETURNS THE DELETED ITEM

// let arrayForPop = [0, 1, "FIVE"];
// console.log(arrayForPop.pop()); //returns deleted item from last index
// arrayForPop;

// let emptyPop = [""];
// console.log(emptyPop.pop());
// emptyPop;

// //ARRAY SHIFT METHOD DELETED THE FIRST ITEM FROM THE EXISTING ARRAY AND CHANGE THE EXISTING ARRAY AND RETURNS THE DELETED ITEM

// let arrayForShift = ["e", "f", "g", "h"];
// console.log(arrayForShift.shift()); //returns deleted item from last index
// arrayForShift;

// let emptyShift = [""];
// console.log(emptyShift.pop());
// emptyPop;

// //ARRAY UNSHIFT METHOD ADD ANYTHING WHICH IS ACCEPTED BY ARRAY FROM THE START AND YOU CAN ALSO ADD MORE THAN ONE ITEMS AND CHANGE THE EXISTING ARRAY AND RETURNS THE LENGTH

// let arrayForUnshift = ["asim", "wasi", "hasham"];
// console.log(arrayForUnshift.unshift("faheeem")); //returns length of array
// arrayForUnshift;

// //ARRAY SPLICE METHOD DELETED THE ITEM FROM THE ARRAY BUT THERE IS SOME CONCEPT IF YOU WANT TO DELETE ONLY SPLICE TOOK TWO ARGUMENTS FIRST WHERE TO DELETE AND HOW MUSH DELETE AND AND IF YOU WANT TO ADD AND DELETE ALSO SPLICE TOOK THREE ARGUMENTS FIRST WHERE TO ADD AND HOW MANY INDEX WANTS DELETE AND WHERE TO ADD AND RETURN THE ARRAY OF DELETED ITEMS AND IF YOU DID NOT DELET ANYTHING IT RETURNS THE EMPTY ARRAY

// let arrayForSplice = ["a", "b", "c", "d", "e"];
// console.log(arrayForSplice.splice(3, 1, "0"));
// arrayForSplice;

// //ARRAY SLICE METHOD HELP TO COPY THE ARRAY ITEMS AND IT ONE AND TWO ARGUMENTS FROM WHERE TO WHERE END AND IT DO NOT CHANGE THE EXISTING ARRAY AND RETURNS THE COPIED ITEM

// let arrayForSlice = ["a", "b", "c", "d"];
// console.log(arrayForSlice.slice(1, 3));
// arrayForSlice;

// //ARRAY JOIN METHOD JUST JOIN ALL THE ITEM IN THE GIVEN ARRAY AND return string

// const arrayForJoin = ["Banana", "Orange", "Apple", "Mango"];
// // const number=[1,2,3]
// console.log(arrayForJoin.join(""));
// console.log(typeof arrayForJoin.join());
// arrayForJoin;

// //ARRAY INDEXOF METHOD FIND THE FIRST ITEM WHICH WAS GIVEN IN ITS PARAMETER AND SEARCHES LEFT TO RIGHT INTIALLY THE DEAFAULT VALUE IS ZERO BUT YOU CAN DEFINE THE INDEX POSITION WHERE TO START SEARCHING AND IF YOU GIVE PARA IN MINUS ITS START FROM RIGTH BUT STILL SEARCHES LEFT TO RIGHT

// const arrayForIndexOf = [
//   "Banana",
//   "Orange",
//   "Apple",
//   "Mango",
//   "Apple",
//   "Orange",
// ];
// console.log(arrayForIndexOf.indexOf("Apple", 3));
// arrayForIndexOf;

// const cars = [
//   "corolla",
//   "vigo",
//   "corolla",
//   "mehran",
//   "suzuki",
//   "hyundai",
//   "lexus",
// ];
// console.log(cars.indexOf("mehran"));
// cars;

// const stInfo = [
//   { st: "abd", age: 12 },
//   { st: "xyz", age: 13 },
// ];
// console.log(stInfo.indexOf()); //not working on objects
// //INDEXOFF

// const arrayForLastIndexOf = ["C", "C", "C", "a", "C", "b", "d"];
// console.log(arrayForLastIndexOf.lastIndexOf("C", 5));

// //ARRAY FROEACH //RETURNS UNDEFINED

// let fruits = "";
// const fruitsItem = ["apple", "banana", "orange", "pinapple", "abc"];
// const lalla = fruitsItem.forEach((item, index) => {
//   item;
//   index;
//   fruits += index + ":" + item;
// });

// lalla;
// fruits;

// let sum = null;
// const numbers = [1, 2, 3, 4, 6, 7];
// numbers.forEach(Sum);

// function Sum(item, index, array) {
//   item;
//   index;
//   console.log(item * index);
//   sum = item * index;
//   array[index] = item * 2;
//   //   multipleOFtwo
// }
// numbers;
// sum;

// const users = [
//   {
//     id: 1,
//     name: "Alice",
//     lastLogin: "2022-02-01",
//     email: "alice@example.com",
//   },
//   {
//     id: 2,
//     name: "Bob",
//     lastLogin: "2022-02-15",
//     email: "bob@example.com",
//   },
//   {
//     id: 3,
//     name: "Charlie",
//     lastLogin: "2022-01-01",
//     email: "charlie@example.com",
//   },
//   {
//     id: 4,
//     name: "Dave",
//     lastLogin: "2022-02-20",
//     email: "dave@example.com",
//   },
// ];

// const today = new Date();

// users.forEach((user) => {
//   console.log(user.lastLogin);
//   const lastLoginDate = new Date(user.lastLogin);
//   lastLoginDate;
//   const timeDiff = Math.abs(today.getTime() - lastLoginDate.getTime());
//   timeDiff;
//   const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
//   daysDiff;

//   if (daysDiff > 400) {
//     console.log(`Sending reminder email to ${user.email}`);
//     // code to send email reminder goes here
//   }
// });

// const singular = [
//   {
//     sname: "masood",
//     age: 12,
//   },
//   {
//     sname: "rabeet",
//     age: 13,
//   },
//   {
//     sname: "salaman",
//     age: 14,
//   },
//   {
//     sname: "shumaila",
//     age: 10,
//   },
// ];

// singular;
// singular.forEach((element, index, array) => {
//   console.log(element.sname);
//   console.log(element.sname + "'s");
//   //    array[index]=element.sname+"'s"
//   let updatedName = element.sname + "'s";
//   updatedName;
//   array[index] = { ...element, sname: updatedName };
// });
// singular;
// singular.forEach((item) => {
//   item;
// });

// const veg = ["potato", "tomato", "garlic"];
// veg;

// veg.forEach((item, index, veg) => {
//   if (index === 1) {
//     veg[1] += ",s";
//   }
// });
// veg;

// const evenNumber = [2, 4, 6, 8, 10];
// const returnNewArray = evenNumber.map((item) => item * 2);
// evenNumber;
// returnNewArray;

// let anObject = [
//   {
//     color: "purple",
//     type: "minivan",
//     registration: new Date("2023-2-28"),
//     capacity: "7",
//   },
//   {
//     color: "green",
//     type: "bigvan",
//     registration: new Date("2023-2-1"),
//     capacity: "4",
//   },
//   {
//     color: "red",
//     type: "vegan",
//     registration: new Date("2023-2-2"),
//     capacity: "5",
//   },
//   {
//     color: "purple",
//     type: "minicar",
//     registration: new Date("2023-2-3"),
//     capacity: "3",
//   },
//   {
//     color: "red",
//     type: "croser",
//     registration: new Date("2023-2-4"),
//     capacity: "8",
//   },
//   {
//     color: "purple",
//     type: "cororlla",
//     registration: new Date("2023-2-4"),
//     capacity: "6",
//   },
// ];

// const filterItem = anObject.filter((item) => item.color === "green");

// filterItem;

// const wholeNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const filterOddNumber = wholeNumber.filter(SortingOddNumer);

// function SortingOddNumer(numbers) {
//   console.log(numbers % 2 !== 0);
//   if (numbers % 2 !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(!isNaN("1"));
// filterOddNumber;

// const reduceMethod = filterOddNumber.reduce((num1, num2, num3) => {
//   num1;
//   num2;
//   num3;
//   console.log(num1 + num2);
//   console.log(num1 + num2 + num3);

//   let newNum = num1 + num2;
//   return newNum;
// });

// reduceMethod;

// const stringForReduce = [2,100, 279];
// let newString = stringForReduce.reduce((st1, st2) => {
//     console.log(st2)
//     return st1 + st2;
// });
//     let myArry  =[1,3, 2]

// let newAryyy =  [... new Set(myArry)]

// console.log(newArray)
// console.log(typeof newString);
// newString;

//PUSH EXERCISE

// Create an empty array named fruits. Use the push() method to add the following strings to the array: "apple", "banana", "cherry". Print the array to the console.

const fruits = [];
const returValue = fruits.push(
  "Apple",
  "Banana",
  "Pineapple",
  "Orange",
  "Strawberry",
  "Grapes"
);
console.log(returValue);
console.log(fruits);

// Create an empty array named numbers. Use a loop to add the numbers 1 to 5 to the array using the push() method. Print the array to the console.

const number = [];

for (let i = 1; i < 6; i++) {
  let returValue = number.push(i);
  returValue;
}

console.log(number);

//Push the specific key to a ney array

let anObj = [
  {
    studentName: "Masood",
    age: 20,
  },
  {
    studentName: "Rabeet",
    age: 22,
  },
  {
    studentName: "Salaman",
    age: 23,
  },
  {
    studentName: "Sinan",
    age: 24,
  },
  {
    studentName: "Ali",
    age: 24,
  },
  {
    studentName: "Anas",
    age: 20,
  },
];

// let allStudentName=anObj.map((values)=>values.studentName)
// allStudentName

let allStudentName = [];
anObj.map((obj) => {
  allStudentName.push(obj.studentName);
});

allStudentName;

// Create an empty array named evenNumbers. Use a loop to add the even numbers between 1 and 10 to the array using the push() method. Print the array to the console.

let evenNumber = [];

for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    evenNumber.push(i);
  }
}

evenNumber;

// Create an array called numbers containing the numbers 1 through 5. Use the push() method to add the number 6 to the end of the array. Print the final array to the console.

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.push(6));
numbers;

// Create an empty array called people. Use the push() method to add two objects to the array. Each object should have two properties: "name" (a string) and "age" (a number). Print the final array to the console.

let people = [];

const newObj1 = {
  name: "Sultan",
  age: 29,
};

const newObj2 = {
  name: "Shadab",
  age: 29,
};

console.log(people.push(newObj1, newObj2));

people;

// Create an array named shoppingList with the following items: "milk", "bread", "eggs". Use the push() method to add "cheese" to the beginning of the array and "juice" to the end of the array. Print the array to the console.

const shopingList = ["milk", "bread", "eggs"];
console.log(shopingList.unshift("cheese"));
console.log(shopingList.push("juice"));
shopingList;

// Create an array called books containing the strings "To Kill a Mockingbird" and "1984". Use the push() method to add the string "Pride and Prejudice" to the array after "To Kill a Mockingbird". Print the final array to the console.

const books = ["To Kill a Mockingbird", "1993"];
console.log(books.splice(1, 0, "pride", "prejudice"));
books;

// Write a program that takes an array of numbers as input and uses the push() method to add the squares of those numbers to a new array. Then, print the new array to the console.

const inputNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squreNumber = [];
for (let i = 0; i < inputNumbers.length; i++) {
  let squreNumber1 = i * i;
  squreNumber.push(squreNumber1);
}

squreNumber;

const squaredNUmber = inputNumbers.map((number, index) => number * index);
squaredNUmber;

// Write a function that takes an array of words as input and uses the push() method to add a "!" at the end of each word. Then, return the new array.

const newArr1 = ["Mobile", "Ball", "Basket", "Battle"];

let updatedArray = [];
function AddExclamation(newArr1) {
  //   let updatedArray = newArr1.map((arr) => arr + "!");
  //   return updatedArray;
  for (let i = 0; i < newArr1.length; i++) {
    console.log(newArr1[i] + "!");
    updatedArray.push(newArr1[i] + "!");
  }
  updatedArray;
}

const updatedArr = AddExclamation(newArr1);
updatedArray;

const commentsArr = [
  {
    userId: 1,
    comment: "somethingggggggg",
  },
  {
    userId: 3,
    comment: "heelloooooooo",
  },
  {
    userId: 4,
    comment: "okkkkzzzzzzzz",
  },
  {
    userId: 2,
    comment: "yahyashydashydh",
  },
  {
    userId: 1,
    comment: "hheeeelllooo worldddddd",
  },
  {
    userId: 3,
    comment: " goinggggg",
  },
  {
    userId: 2,
    comment: "ok buddyyyyy",
  },
  {
    userId: 4,
    comment: "you got my pointtttt",
  },
];

const users = [
  {
    id: 1,
    userName: "Masood",
    gender: "male",
  },
  {
    id: 2,
    userName: "Farukh",
    gender: "male",
  },
  {
    id: 3,
    userName: "Salman",
    gender: "male",
  },
  {
    id: 4,
    userName: "Rabeet",
    gender: "male",
  },
];

const a = [];

users.map((obj, index) => {
  commentsArr.filter((value, i) => {
    if (obj.id === value.userId) {
      const newObj = {
        usersName: obj.userName,
        comment: [],
      };
      newObj.comment.push(value.comment);
      a.push(newObj);
    }
  });
});

console.log(a);
