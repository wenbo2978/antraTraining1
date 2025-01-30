/////////////////////////////////////////////////////////////////

// Javascript is single threaded, non-blocking 

// Synchronous/ Asynchronous
// Synchronous code runs in sequence. 
// This means that each operation must wait for the previous one to complete before executing.
// Asynchronous code runs in parallel. 
// This means that an operation can occur while another one is still being processed.
// console.log('--------- work synchronously -------------');
// console.log('Finish Cooking');   // 10 mins
// console.log('Finish Eating');    // 10 mins
// console.log('Finish Washing Clothes');   //40mins

// console.log('--------- work asynchronously ------------');
// setTimeout(() => console.log('Finish Washing Clothes'), 10000);  //40 mins
// console.log('Finish Cooking');  //10 min
// console.log('Finish Eating');  //10 mins


// Event Loop
// image : https://medium.com/@Rahulx1/understanding-event-loop-call-stack-event-job-queue-in-javascript-63dcd2c71ecd
// heap/ call stack/ callback queue(event queue)/ Web Api
// https://nodejs.dev/en/learn/the-nodejs-event-loop

function sync(ms) {
    let start = Date.now(),
        now = start;
    while (now - start < ms) {
      now = Date.now();
    }
    console.log("Sync: finish main stack in " + ms/1000 + " seconds")
}

// sync(2000)
// sync(3000)
// sync(1000)

function async(ms){
    setTimeout(() => {
        console.log("Async: used " + ms/1000 + " seconds to finish")
    }, ms);
}

// async(3000)
// async(4000)
// async(2000)

async(0)
sync(2000)
sync(3000)


////////////////////////////////////////////////////////////////////
// callback hell
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
// doStep1 => use result for doStep2 => use result for doStep3

// const AuthA = () => {
//     setTimeout(()=>{return "A is true"}
//         , 1000)
// }
// const AuthB = () => {
//     setTimeout(()=>{return "B is true"}
//         , 500)
// }


// const AuthC = () => {
//     setTimeout(()=>{return "C is true"}
//         , 400)
// }

// const AuthAll = () => {
 
//    setTimeout(()=>{
      
//       setTimeout(()=>{return "A is true"}
//       , 1000)

//       return "B is true"

//    }

//    , 500)

// } 

// is there anyway that we can chain them as AsyncA.then(AsyncB).then(AsyncC)

//////////////////////////////////////////////////////////////////////////
// Promise

// promise
// 3 states

// pending
// fullfilled
// reject



// const returnPromise = new Promise((resolve, reject) => {

//    // console.log("Initial");
//    let indicator = true;
//   //  if(!validate) reject("error here")
//   //  else resolve(123);
// //   resolve(123)
// reject("error here")

// })

// this.data = 0;


// returnPromise.then(
//    res =>{
//       console.log("resolve" + res)
//       this.data = res;
//       // console.log(this.data)
//    }).catch(error=> console.log(error))

// returnPromise.then(
//    res=> {
//       if(res){
//       return true
//    }else return false
//    }, 
//    error=>{
//       console.log(error)
//    }
//    ).then(res=>{
//       // console.log(res)
//       return "you pass validation"
//    },
//    error=>{}).then(res=>console.log(res)

//    )


// console.log(1)
// new Promise((resolve, reject) => {
//     console.log(2)
//     resolve();
//     console.log(3)
//     }).then(item => console.log(5))
// console.log(4)



// .then(
//     (res) => { console.log(res += res)},
//     (error) => console.log(error))

// Promise.then(a,b)  === Promise.then(a).catch(b)

///////////////////////////////////////////////////////
// promise.all()

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 300, 'foo 300');
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 200, 'foo 200');
// });
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'foo 100');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// });
// expected output: Array [3, 42, "foo"]

// Micro Task / Macro Task
// job queue

// console.log('Message no. 1: Sync');

// setTimeout(function() {
//    console.log('Message no. 2: setTimeout');
// }, 0);

// var promise = new Promise(function(resolve, reject) {
//    resolve();
// });

// promise.then(function(resolve) {
//    console.log('Message no. 3: 1st Promise');
// })
// .then(function(resolve) {
//    console.log('Message no. 4: 2nd Promise');
// });

// console.log('Message no. 5: Sync');




////////////////////////////////////////////////////////////////////
//https://medium.com/@armando_amador/how-to-make-http-requests-using-fetch-api-and-promises-b0ca7370a444

// fetch(url).then(res=> console.log(res))


// Async Await

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }

//  resolveAfter2Seconds().then(res1=>console.log(res1))
//  resolveAfter2Seconds().then(res2=>console.log(res2))

 
//   console.log(1)
//  async function asyncCall() {
//     const result = await resolveAfter2Seconds();
//     console.log(result)
//     const result2 = await resolveAfter2Seconds().then().catch();
//     console.log(result2)
//    }
  
// asyncCall();
// console.log("here")
  
  

