// function myFunc() {
//   var name = prompt("Hi, what is your name?");
//   var newEl = document.createElement("div");
//   newEl.innerText = "Hello, " + name;
//   var body = document.getElementById("name");
//   body.appendChild(newEl);
// }

// var age1 = myFunc();
// var age2 = myFunc();
// var age3 = myFunc();

// console.log(age1, age2, age3);

// ---------------------------
// Užduotis 1
// ---------------------------
// function myFunctionSum(a, b) {
//   sum = a + b;
//   return sum;
// }

// function myFunctionMin(a, b) {
//   min = a - b;
//   return min;
// }

// function myFunctionDaug(a, b) {
//   daug = a * b;
//   return daug;
// }

// function myFunctionDal(a, b) {
//   dal = a / b;
//   return dal;
// }

// var mySum = myFunctionSum(1, 2);
// var myMin = myFunctionMin(4, 3);
// var myDaug = myFunctionDaug(2, 2);
// var myDal = myFunctionDal(8, 2);

// console.log(mySum, myMin, myDaug, myDal);
// console.log(mySum);
// console.log(myMin);
// console.log(myDaug);
// console.log(myDal);

// ---------------------------
// Užduotis 2
// sprendimas 45 min.
// ---------------------------
// function a(x) {
//   return x * 2;
// }

// function b(x) {
//   return a(x) * a(x - 2);
// }

// var z = b(4);
// console.log(z);

// ---------------------------
// Užduotis 3
// ---------------------------
// for (var i = 0; i <= 100; i = i + 3) {
//   console.log(i);
//   document.writeln(i);
// }

// ---------------------------
// Užduotis 4
// ---------------------------
// var arr1 = ["Petras", "Juozas", "Marija", "Onute"];

// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);
// console.log(arr1[3]);

// for (var i = 0; i < arr1.length; i = i + 1) {
//   console.log(i);
//   console.log(arr1[i]);
// }

// ---------------------------
// ANTRA DALIS PO PERTRAUKOS 12:40
// ---------------------------

// var nickName = prompt("What is your nickname?");

// while (nickName.length < 3) {
//   alert("Sorry your Nickname too short!");
//   nickName = prompt("What is your nickname?");
// }

// console.log(nickName);

// ---------------------------
// Užduotis 5
// ---------------------------

// var masyvas = [];
// for (var i = 0; i < 1000; i = i + 7) {
//   masyvas.push(i);
// }
// console.log(masyvas);

// // Algirdo pvz:
// var arr1 = [
//   "Petras",
//   "Juozas",
//   "Marija",
//   "Onute",
//   "Petras",
//   "Juozas",
//   "Marija",
//   "Onute",
//   "Petras",
//   "Juozas",
//   "Marija",
//   "Onute",
//   "Petras",
//   "Juozas",
//   "Marija",
//   "Onute",
//   "Petras",
//   "Juozas",
//   "Marija",
//   "Onute",
//   "Petras",
//   "Juozas",
//   "Marija",
//   "Onute",
// ];

// function genderSeparator() {
//   var male = [];
//   var female = [];

//   for (var i = 0; i < arr1.length; i++) {
//     var currentElement = arr1[i];
//     if (currentElement.endsWith("s")) {
//       male.push(currentElement);
//     } else {
//       female.push(currentElement);
//     }
//   }
//   console.log(male);
//   console.log(female);
// }
// genderSeparator();

// ---------------------------
// 2021-11-07 Basics of programming in JavaScript
// ---------------------------

// var human = {
//   firstName: "Albertas",
//   lastName: "Rinkevicius",
//   age: 43,
//   say: function () {
//     console.log("Hello! 🙂");
//     return "reiksme";
//   },
// };
// console.log(human);
// console.log(human.firstName, human.lastName, human.age, human.say);

// var result = human.say();
// console.log(result, "result");

// ---------------------------
// po pirmos pertraukos 10:15
// ---------------------------

// var human = {
//   name: "Petras",
//   surname: "Petraitis",
//   "second name": "Juozas",
//   age: 18,
//   sayHello: function () {
//     console.log("Hello World " + this.name + " " + this.surname);
//     return this.name;
//   },
// };

// var arr1 = [10, 20, 30];
// arr1[2];
// var ageKey = "age";
// //console.log(human[ageKey]);

// for (var raktas in human) {
//   console.log(raktas, ": ", human[raktas]);
// }

// ---------------------------
// mano sprendimas
// ---------------------------
// var audi = {
//   brand: "Audi",
//   model: "A4",
//   year: 2015,
// };

// var vw = {
//   brand: "VW",
//   model: "Golf",
//   year: 2016,
// };

// var ford = {
//   brand: "Ford",
//   model: "Fiesta",
//   year: 2017,
// };

// var toyota = {
//   brand: "Toyota",
//   model: "Corrola",
//   year: 2018,
// };

// var bmw = {
//   brand: "BMW",
//   model: "X3",
//   year: 2019,
// };

// var cars = [audi, vw, ford, toyota, bmw];

// var cars2015 = [];

// for (var i = 0; i < cars.length; i++) {
//   var currentCar = cars[i];
//   if (currentCar.year > 2015) {
//     cars2015.push(currentCar);
//   }
// }

// for (var car of cars2015) {
//   console.log(car.brand);
// }

// console.log(cars2015);
// // console.log(cars);

// destytojo pvz.
var persons = [
  { name: "Ona", age: 25 },
  { name: "Janina", age: 35 },
  { name: "Danute", age: 45 },
];

var olderThan30 = [];

for (var i = 0; i < persons.length; i++) {
  var currentPerson = persons[i];
  if (currentPerson.age > 30) {
    olderThan30.push(currentPerson);
  }
}

// for (var older of olderThan30) {
//   console.log(older.name);
// }

for (var manoNorimasParametras of olderThan30) {
  console.log(manoNorimasParametras.name);
}
