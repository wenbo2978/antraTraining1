// loops

// for of
// const arr2 = [1,8,7,6,5]
// for (let ele in arr2) {
//     console.log(ele);
// }


// for in
// obj1 = {name:"JR", age:20, school:"vt"}
// for (let key in obj1) {
    // console.log(key)
    // console.log(obj1[key])
    // console.log(key + ": " + obj[key]);
// }

// argument
// function foo() {
//     console.log(arguments)
//     for (let index = 0 ; index < arguments.length; index++) {
//         console.log(arguments[index]);
//     }
// }
// const foo = () => {
//     for (let index = 0 ; index < arguments.length; index++) {
//         console.log(arguments[index]);
//     }
// }
// foo(1, 2, 3, 4, 5, 6);
//--------------------------------------------------
// rest parameter vs spread operator ...

//rest parameter
// function foo2(a,b,c,...arr) {
//     console.log(arr)

// }
// foo2(1, 2, 3, 4, 5, 6);
// const [a,b,c,...rest] = [1,2,3,4,5,6,7,8,9]
// console.log(rest)


// spread operator
// function sum(x, y, z) {
//     return x + y + z;
// }
// const numbers = [1, 2, 3]
// console.log(sum(...numbers));

// const arr1 = [1, 2, 3];
// const [a,b,c] = [...arr1]
// const arr2 = [0,9,...arr1,4,5,6]
// console.log(arr1 === arr2);
// console.log(arr1 == arr2);
// console.log(arr2)
// let obj1 = { name: "Bob" , age:10}
// let obj2 = { ...obj1, school:"elementary" }
// console.log(obj2)
// console.log(obj1 === obj2);


// Shallow copy VS deep copy
// shallow copy
// const a = {
//     name: {
//         firstName: "Chris",
//     }
// }
// const b = {
//     name: {
//         firstName: "Chris",
//     }
// }
// const b = a

// b.name.firstName = "JR"
// console.log(a)



//deepcopy => structuredClone()

// b.name.firstName = "Max"
// console.log("object a", a)
// console.log("object b", b)
// const a = {
//     name: {
//         firstName: function(){return 1},
//     }
// }
// const str = JSON.stringify(a);
// console.log(str)
// const c = JSON.parse(str);
// console.log(c)
// c.name.firstName = "Max"
// console.log("string a", str)
// console.log("object c", c)

// OOP Object - Oriented Programming

// Abstraction
// Encapsulation
// Inheritance
// Polymorphism


// Abstaction
// class Person {
//     constructor(){
//         if(this.constructor == Person){
//             // throw new error("You cannot create an instance of Abstract Class")
//         }
//     }
//     info(){
//         throw new error("Added abstract Methods has no implementation")        

//     }
// }
// class Trainer extends Person {
//     info(){
//         // super.info();
//         console.log("I am a trainer")
//     }
// }
// const JR = new Trainer();
// JR.info();

// Encapsulation
// class Person {
//     constructor(name, age) {
//         this._name = name;
//         this._age = age;
//     }

//     get name() {
//         console.log('Get Name');
//         return this._name;
//     }

//     set name(newName) {
//         console.log('Set name');
//         this._name = newName;
//     }
// }

// let p = new Person('Bob', 18);
// console.log(p.name);
// p.name = "Pat";
// console.log(p.name);


// // inheritance
// class Person {
//     constructor(name, age) {
//         this._name = name;
//         this._age = age;
//         this.salary = 0;
//     }

//     get name() {
//         console.log('Get Name');
//         return this._name;
//     }

//     set name(newName) {
//         console.log('Set name');
//         this._name = newName;

//     }

//     getSalary() {
//         console.log('without param');
//         return this.salary;
//     }
// }

// class Employee extends Person {
//     constructor(name, age, company) {
//         super(name, age);
//         this.company = company
//     }

//     getSalary(baseSalary) {
//         console.log('With param');
//         return this.salary + baseSalary; // 0 + undefined => NaN
//     }
//     greetings(){ 
//         // 
//     }
// }
// const JR = new Employee("JR",30,"Antra")
// console.log(JR.getSalary(3000))

//Polymorphism
//make class reusable

///////////////////////////////////////////////////////
// prototype
// Object is the prototype of Array

// console.log(typeof Array.prototype)
// const trainer ={
//     name:"JR"
// }
// console.log(trainer)


// class Person{
//     constructor(){

//     }
// }
// Person.prototype

// const trainer = new Person()
// trainer.__proto__




// https://learnbatta.com/course/javascript/prototypes/

// function Trainer(){
//     this.name = "JR";
// }
// Trainer.prototype.name = "David"

// Trainer.prototype.getSalary = function(base){ return base}

// const trainer = new Trainer()
// console.log(trainer.getSalary(3000))

// portotype chain

// function Person(name){
   
//     this.name  = name
    
// }
// function Student(){
//     this.name = "student"
// }


// Student.prototype = Object.create(Person.prototype)
// const JR = new Student()

// console.log(JR)
// console.log(JR)

////////////////////////////////////////////////////////////////

// const arr = [1,2,3,4,5]
// console.log(arr.__proto__);

// const timesTwo = function(number){
//     return number*2
// }
// const newArr = arr.map(timesTwo)

// console.log(newArr);

// Implement Array.myMap

// Array functions
// map filter forEach reduce 
// Array.prototype.Mymap  MyReduce

// custom function

// const arr = [1,2,3,4,5]

// Array.prototype.myFilter = () => {

// }