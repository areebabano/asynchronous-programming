// asynchronous programming
// concurrency (allows you to multi tasking at once)
// 3 strategies to achieve concurrency
// 1. callbacks
// 2. promises
// 3. async await => Await
// behind this stratigies working
// event loop node Api's and web Api'
// make promises to achieve concurrency
function washClothes() {
    console.log("washing started....");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("washing done!");
            // reject("fail")
        }, 5000);
    });
}
function soakClothes() {
    console.log("soaking started....");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("soaking done!");
            //   reject("fail");
        }, 3000);
    });
}
function dryClothes() {
    console.log("drying started....");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("drying done!");
            // reject("fail")
        }, 2000);
    });
}
let washingProcess = async () => {
    try {
        let result1 = await washClothes();
        console.log(result1);
        let result2 = await soakClothes();
        console.log(result2);
        let result3 = await dryClothes();
        console.log(result3);
    }
    catch (error) {
        console.log("process " + error);
    }
    finally {
        console.log("I am finally...");
    }
};
console.log("making pizza");
washingProcess();
console.log("eating pizza"); // now we achieve concurrency with async await
export {};
