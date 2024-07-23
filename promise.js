// // promises
// let promise = new Promise(()=> {})
// console.log(promise);// output promise pending 
// // promise k 3 stage hoty hen 
// // 1. pending
// // 2. fullfilled / resolve
// // 3. reject 
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("success")
//         reject("failure")
//     }, 2000);
// })
// p1.then((value)=> {
//     console.log("Resolved " + value);
// }).catch((error)=> {
//     console.log("Error " + error);
// });
// asynchronous programming
// concurrency (allows you to multi tasking at once)
// 3 strategies to achieve concurrency
// 1. callbacks
// 2. promises
// 3. async await => Await
// behind this stratigies working
// event loop node Api's and web Api's
// make promises to achieve concurrency
function washingClothes() {
    console.log("washing started....");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("washing done!");
            // reject("fail")
        }, 5000);
    });
}
function soakingClothes() {
    console.log("soaking started....");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("soaking done!");
            // reject("fail")
        }, 3000);
    });
}
function dryingClothes() {
    console.log("drying started....");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("drying done!");
            // reject("fail")
        }, 2000);
    });
}
console.log("making pulao");
washingClothes()
    .then((value) => {
    console.log(value);
    return soakingClothes();
}).then((value) => {
    console.log(value);
    return dryingClothes();
}).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("I am Finally...");
}); // this is called promise chaining 
console.log("folding clothes"); // now we achieve concurrency with promises 
export {};
