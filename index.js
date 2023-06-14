//Destrukturisasi Array

// let numbers = [1, 2, 3, 4, 5];

// let [num1, num2, num3, num4, num5] = numbers;

// console.log(num1, num2, num3, num4, num5);
// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(num5);

// let [num1, , num3, , num5] = numbers; Kalau mau ambil sebagian

//Destrukturisasi Object

// let john = {
//     fullName: "John Doe",
//     age: 33,
//     isMarried: false,
// };

// let {fullName, age, isMarried} = john;
// console.log(fullName);
// console.log(age);
// console.log(isMarried);

//Destrukturisasi pada parameter fungsi
// const greetings = ({ fullName, age }) => {
//     return `Hello my name is ${fullName} and I'm ${age} years old`;
// };

// console.log(greetings(john));

/////////////////////////////////////////////
// import { nama, john, angka } from "./tes.js";
// import greetings from "./tes.js";

// console.log(nama);
// console.log(john);
// console.log(angka);

// console.log(greetings);
/////////////////////////////////////////////

//Asynchronous

// console.log("proses 1");
// console.log("proses 2");
// console.log("proses 3");
// console.log("proses 4");

const addNumber = (a, b, c, d, e, f, g) => {
    var numbers = [a, b, c, d, e, f, g];
    var sum = 0;
    for(var i=0;i<numbers.length;i++){
            sum += numbers[i];
    }
    return sum;
}

console.log(addNumber(1,2,3,4,5,6,7));

var phi = 3.14;
var power = 2;
var radius = 0;
 
var calculateArea = function (obj) {
  return phi * Math.pow(obj.radius, obj.power);
};
 
radius = 21;
var area21 = calculateArea({radius: radius, power: 2 });
 
radius = 7;
var area7 = calculateArea({radius: radius, power: 2 });
 
console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);

// const makeAjaxRequest = (url, method) => {
//     if(!method){
//            method = ‘GET’
//     }
//     console.log(url, method);
//     }
     
//     makeAjaxRequest(‘www.google.com’);

function calculateAge(birthYear){
	return 2019 - birthYear;
}
 
function yearUntilRetirement(object){
	var age = calculateAge(object.year);
	var retirement = 60 - age;
   
	if(retirement > 0){
    	console.log(object.firstName + ' retires in '+ retirement + ' years');
	} else {
    	console.log(object.firstName + ' is already retired.');
	}
}
 
yearUntilRetirement({year: 1987, firstName: 'John'});
