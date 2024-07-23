// callback
// function hello(name: string) {
//   console.log(`Hello! ${name}`);
// }
// function greet(callback: (name: string) => void) {
//   callback("Areeba");
//   console.log("How are you....");
// }
// greet(hello);
// asynchronous programming
// concurrency (allows you to multi tasking at once)
// 3 strategies to achieve concurrency
// 1. callbacks
// 2. promises
// 3. async await => Await
// behind this stratigies working
// event loop node Api's and web Api's
// make callbacks to achieve concurrency
function washing(callback) {
    console.log("washing started....");
    setTimeout(() => {
        console.log("washing done!");
        callback();
    }, 5000);
}
function soaking(callback) {
    console.log("soaking started....");
    setTimeout(() => {
        console.log("soaking done!");
        callback();
    }, 3000);
}
function drying() {
    console.log("drying started....");
    setTimeout(() => {
        console.log("drying done!");
    }, 2000);
}
console.log("making biryani");
washing(() => {
    soaking(() => {
        drying();
    });
}); // this is called a callback hell or pyramid of doom
console.log("Folding clothes"); // now we achieve concurrency with callbacks 
export {};
