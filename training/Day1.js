// ------- Primitive data types
// number, boolean, string, undefined, null,
// bigInt, symbol

// let regInt = 123412341245125411231232123123123235125125n;
// console.log(typeof regInt)
// console.log(regInt)
// let bigInt2 = 123412341245125411231232123123123235125125n;
// console.log(bigInt+ bigInt2);

// null and undefined
// console.log(typeof undefined);
// console.log(typeof null); 

// const str = "sa";
// console.log(typeof str);

// const flag = true;

// console.log(typeof flag);

// ------- object/ reference Type
// Array, Function, Object, Date, Regex

// console.log(typeof [])
// console.log(typeof Function)

// const a = new Array()
// console.log(typeof a)
// console.log(a)

// const sy = Symbol('xxx');
// console.log(typeof sy);
// console.log(sy);



// ------- heap stack


// https://blog.devgenius.io/mutable-and-immutable-in-javascript-78a3cbc6187c

// ------- Pass by reference / Pass by value
// let a = 10;
// let b = a;
// b = 12
// console.log(a)

// const a = {number : 10};
// const b = a;
// b.number = 12
// console.log(a)

// ------- Mutable(changeable) / Immutable (unChangeable)
// datasource
// let arr = [1,2]
// arr.filter()
// let a = 123
// a = 234;
// console.log(a)

// let b = {name:"JR"}
// b["age"] = 16;
// console.log(b)

// let arr = [1, 2, 3];
// let newArr = arr.concat(4);  // Creates a new array
// console.log(arr);  // [1, 2, 3]
// console.log(newArr);  // [1, 2, 3, 4]


// ------ Coercion

// 
// implicit vs explicit coercion(type casting)
// https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/


// Primitive types to Primitive types
// to String

// "+" with a string in the calculation  

// to Number : Math Operators. unary +   

// to Boolean: Logic operator, if/while

// examples
// let res = 1 + "1"
// let res = 6 + "20" + 5
// let res = null + "5";
// let res = null + 5;
// let res = 12 / "2i"
// let res = 12 / "2"
// let res = + "123"
// let res = + false
// let res = + "abc"
// let res = true + false + "1";
// let res = true + (false + "1");
// console.log(res);
// Do explicit conversion. + is also an explicit way.

// Object to primitive types
// const a = {name : "JR"}
// console.log(a)
// console.log("my name is" + a)


// ------ == (lose equility)/ === (strict equility)
// console.log('1' == 1);

// const a  = {
//     content:{
//         name:"JR"
//     }
// }
// const b = {
//     content:a.content
// }
// console.log( a.content === b.content)
// console.log( a === b)

// console.log(false === false)
// console.log(NaN === NaN)   // False. Since NaN = Not a Number, but we do not what the type is.
// console.log(false === NaN)

// ------ Truthy and falsy


// let val = 
// if(val){
//     console.log("its truthy")
// }else{
//     console.log("its falsy")
// }


//falsy 
// console.log(Boolean(''))           // false, only when the string is empty
// console.log(Boolean(0))            // false     
// console.log(Boolean(-0))           // false
// console.log(Boolean(NaN))          // false

// console.log(typeof NaN)
// console.log(NaN === NaN)
// console.log(Boolean(null))         // false
// console.log(Boolean(undefined))    // false
// console.log(Boolean(false))        // false

//truthy
// console.log(Boolean({}))           // true
// console.log(Boolean([]))             // true
// console.log(Boolean(function() {}))  // true

// console.log(Boolean(Symbol()))       // true
// console.log(!!Symbol())              // true

// const arr = [1, 2, 4];
// if (arr.length){
//     for (let i = 0; i < arr.length; i++){
//         // do sth here
//     }
// }
// Cannot directly use the object since it will always be true

// ------ Object

// ------ Create an Object
// let obj = {
//     name: ""
// }
// console.log(obj);

// let obj2 = Object.create({name:"JR"});
// console.log(obj2);

// let obj3 = new Object({});
// console.log(obj3);

// ------ access Object Property
// const personInfo = {name : "JR"}

// console.log(personInfo.name)
// console.log(personInfo["name"])

// const property = "name"
// console.log(personInfo[property])

// Object common used static methods
// let objectSample = { name : "JR",
//                      gender:"male",
//                      Occupation:"trainer"}
// console.log(Object.keys(objectSample))
// console.log(Object.values(objectSample))
// console.log(Object.entries(objectSample))
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object


// Other types of Object
// Class
// class Person {
     
//     constructor(name,age) {
//         this.name = name ? name : "JR"
//         this.age = age;
//     }
//     isHumanBeing = true;

//     firstCharofName(){
//         return this.name.charAt(1)
//     }
// }

// const trainer = new Person("David",40,)
// console.log(trainer.name)

// function createPerson(name,age){
//     const newPerson = {}
//     newPerson.name = name;
//     newPerson.age = age;
//     newPerson.firstCharofName = () => {
//         console.log("hello i am from function");
//         return name.charAt(1)
//     }
//     return newPerson
// }

// const createPersonwithArrow = (name,age) => { 
//     console.log(name);
//     console.log(age)
// }


// ------ Declaring Variables in Javascript
// Var vs let vs const : scopes : global / function /block

// function foo() {
//     if (true) {
//         let a = 3;
//         if(true){
//             console.log(a);
//         }  
//     }
// }
// foo();

// let a = 100
// a = 105
// console.log(a)

// const b = 200
// b = 205
// console.log(b);

// ------ scopes
// global scope, function scope, block scope
// const length = 4;
// const fns = [];
// const fns2 = [];
// for (var i = 0; i < length; i++) {
//     fns.push(()=> console.log(i));
// }
// for (let i = 0; i < length; i++) {
//     fns2.push(()=> console.log(i));
// }
// fns.forEach(fn => fn());
// fns2.forEach(fn => fn());
// ------ When to use const / let
// const obj = { name: 'Anna' };
// obj.name = "bob";
// obj.address = '123 tst ST'
// obj = {};
// console.log(obj);

// null vs. undefined vs. not defined 
// return obj1.name
// cannot get property "name" of null/ cannot of property "name" of undefined



// variable & hoisting: works on declarations/name, not about initialization

// console.log(hoist);
// let hoist = 12;

// ------ function hoisting

// named();
// function named() {
//     console.log('hello');
// }



// function foo() {
//   console.log(a);
//   if (true) {
//     var a = 5;
//   }
//   console.log(a);
// }
// foo();

// function foo() {
//   console.log(a);
//   let a = 5;
//   console.log(a);
// }
// foo();

// console.log(null == undefined);  //true