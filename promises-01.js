// const promise = new Promise(); // TypeError: Promise constructor takes a function argument
// console.log(promise); 

// const promise = new Promise(() => {});
// console.log(promise); // Object -> Promise {<pending>}

// const promise = new Promise((res, rej) => {res();});
// console.log(promise); // Object -> Promise {<resolved>}
// console.log(promise.then()); // Promise {<pending>}
// console.log(promise.then((value) => {console.log(value);})); // Promise {<pending>} // undefined -> Promise {<pending>} is printed first because it is synchronous code and undefined is printed later because it is asynchronous code.

// Promise -> then() returns a Promise. Like this we can create a promise chaining. Like firstly do this, then do this, then do this and so on.

// const promise = new Promise((resolve, reject) => {
//     resolve("ChaiCode");
// });
// console.log(promise); // Object -> Promise {<resolved>}
// promise.then((value) => console.log(value)); // "ChaiCode"
// promise.then(console.log); // "ChaiCode"

// const promise = new Promise((res, rej) => rej());
// console.log(promise); // Object -> Promise {<rejected>} | error: undefined

// const promise = new Promise((res,rej) => rej(new Error("promise is rejected")));
// console.log(promise); // Object -> Promise {<rejected>} | error: promise is rejected
// promise.then((value) => console.log(value), (err) => console.log(err.message)); // "promise is rejected"
// promise.catch((err) => console.log(err.message)); // "promise is rejected"

// const promise = new Promise((res, rej) => rej());
// console.log(promise.catch((err) => console.log(err))); // Object -> Promise {<pending>} // undefined

// Promise -> then() accepts two callbacks as arguments -> first argument -> onResolvedCallback and second argument -> onRejectedCallback
// Promise -> catch() is just a wrapper on top of then() made to only handle onRejectCallback which it takes as an only argument

// const turant = Promise.resolve("turant");
// console.log(turant); // Object -> Promise {<resolved>}

// const reject = Promise.reject("rejected");
// console.log(reject); // Object -> Promise {<rejected>} | error: rejected

// const allPromise = Promise.all([Promise.resolve("Hello"), Promise.resolve("Hi"), Promise.resolve("How are you?")]);
// console.log(allPromise); // Promise {<pending>}
// allPromise.then(console.log); // ["Hello", "Hi", "How are you?"]

// const allPromise = Promise.all([Promise.resolve("Hello"), Promise.resolve("Hi"), Promise.reject(new Error("How are you?"))]);
// console.log(allPromise); // Promise {<pending>}
// allPromise.catch((err) => console.log(err.message)); // "How are you?"

// Promise.all() takes an array of Promises as an argument and returns a new Promise 
// If all the promises are resolved, returned Promise resolves with an array of resolved values of all the promises taken as an argument
// If one of the promise is rejected, returned Promise rejects with that the rejected value of that promise
// If multiple promises are rejected, returned Promise rejects with the rejected value of the first promise

// Real World Analogy
//     |
//     V
// Semester Exam
//     |
//     V
// In order to pass the semester, you have to pass in all the subjects. 
// If you fail in any one of the subjects, you fail the semester.
// In this analogy, each subject is a promise, subject passed means promise resolved, subject failed means promise rejected, overall semester status is the returned new Promise

// const anyPromise1 = Promise.any([Promise.resolve("Hello"), Promise.resolve("Hi"), Promise.resolve("How are you?")]);
// console.log(anyPromise1); // Object -> Promise {<pending>}
// anyPromise1.then(console.log); // "Hello"

// const anyPromise2 = Promise.any([Promise.resolve("Hello"), Promise.resolve("Hi"), Promise.reject("How are you?")]);
// console.log(anyPromise2); // Object -> Promise {<pending>}
// anyPromise2.then(console.log); // "Hello"

// const anyPromise3 = Promise.any([Promise.reject("Hello"), Promise.resolve("Hi"), Promise.resolve("How are you?")]);
// console.log(anyPromise3); // Object -> Promise {<pending>}
// anyPromise3.then(console.log); // "Hi"

// const anyPromise4 = Promise.any([Promise.reject("Hello"), Promise.reject("Hi"), Promise.reject("How are you?")]);
// console.log(anyPromise4); // Object -> Promise {<pending>}
// anyPromise4.catch((err) => console.log(err.errors)); // ["Hello", "Hi", "How are you?"]

// Promise.any() takes an array of Promises as an argument and returns a new Promise 
// Returned Promise resolves with the resolved value of the first resolved promise
// If all the promises are rejected, returned Promise rejected with the rejected values of all the promises

// Real World Analogy
//     |
//     V
// Mr. Beast Challenge Videos
//     |
//     V
// Multiple contestants take part in the challenge, but the reward is given to the first person who successfully completes the challenge.
// In this analogy, each contestant is a promise, challenge completes means promise resolved, reward means the returned new promise.

// const racePromise1 = Promise.race([Promise.resolve("Hello"), Promise.resolve("Hi"), Promise.resolve("How are you?")]);
// console.log(racePromise1); // Object -> Promise {<pending>}
// racePromise1.then(console.log); // "Hello"

// const racePromise2 = Promise.race([Promise.reject("Hello"), Promise.resolve("Hi"), Promise.resolve("How are you?")]);
// console.log(racePromise2); // Object -> Promise {<pending>}
// racePromise2.catch(console.log); // "Hello"

// Promise.race() takes an array of Promises as an argument and returns a new Promise 
// Returned Promise settles (resolves/rejects) with the settled value of the first settled promise

// Real World Analogy
//     |
//     V
// Bomb Diffusion
//     |
//     V
// When Bomb threat is identified, bomb squad tries to defuse the bomb in order to save the civilians.
// If the first attempt to defuse the bomb is successful, civilians are saved.
// If the first attempt to defuse the bomb is unsuccessful, civilians are dead.
// In this analogy, each attempt is a promise, successful attempt means promise resolved, failed attempt means promise rejected, civilians means the returned new promise

// const allSettledPromise1 = Promise.allSettled([Promise.resolve("Hello"), Promise.resolve("Hi"), Promise.resolve("How are you?")]);
// console.log(allSettledPromise1); // Object -> Promise {<pending>}
// allSettledPromise1.then(console.log); // Array of objects -> [{status: "fulfilled", value: "Hello"}, {status: "fulfilled", value: "Hi"}, {status: "fulfilled", value: "How are you?"}]

// const allSettledPromise2 = Promise.allSettled([Promise.resolve("Hello"), Promise.reject("Hi"), Promise.resolve("How are you?")]);
// console.log(allSettledPromise2); // Object -> Promise {<pending>}
// allSettledPromise2.then(console.log); // Array of objects -> [{status: "fulfilled", value: "Hello"}, {status: "rejected", reason: "Hi"}, {status: "fulfilled", value: "How are you?"}]

// Promise.allSettled() takes an array of Promises as an argument and returns a new Promise 
// Returned Promise resolves with an array of objects with each object providing the status and value/reason of each promise

// Real World Analogy
//     |
//     V
// Teacher checking answer sheets
//     |
//     V
// Teacher checks each answer sheet and evaluate each of them by giving marks and status of pass or fail
// In this analogy, Teacher is allSettled(), each answer sheet is a promise, each evaluation is the object in the array of objects returned

// const hPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Masterji");
//     }, 3000);
// });

// function nice(){
//     const result = hPromise; 
//     console.log(result); // Object -> Promise {<pending>}
// }
// nice();

// hPromise.then(console.log); // "Masterji"

// async function nice2(){
//     const result = await hPromise;
//     console.log(result); // "Masterji"
// }
// nice2();

// const newResult = await hPromise;
// console.log(newResult); // "Masterji"

// const errorPromise = new Promise((res, rej) => setTimeout(() => rej("Error is there!"),3000));

// async function nice3() {
//     try {
//         const result = await errorPromise;
//         console.log(result);
//     } catch (error) {
//         console.log(error); // "Error is there!"
//     }
// }
// nice3();

// console.log("Swastik");
// Promise.resolve("resolved value").then(console.log);
// console.log("Avishek");
// "Swastik"
// "Avishek"
// "resolved value"

// Priority : Synchronous Code > Asynchronous code : Sync > Microtask > Macrotask

// function boilWater(ms){
//     return new Promise((res, rej) => {
//         console.log(`Krte h ji boil water`);
//         if(typeof ms !== "number" || ms < 0) return rej(new Error("ms must be a positive integer"));
//         setTimeout(() => res("UBAL GYA"), ms);
//     });
// }

// boilWater(3000)
// .then(console.log)
// .catch((err) => console.log(err.message));

// "Krte h ji boil water"
// "UBAL GYA"

// boilWater(-4545)
// .then(console.log)
// .catch((err) => console.log(err.message));

// "Krte h ji boil water"
// "ms must be a positive integer"

// async function result(ms) {
//     try {
//         const result = await boilWater(ms);
//         console.log(result);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// result(3000);

// "Krte h ji boil water"
// "UBAL GYA"

// result(-4545)

// "Krte h ji boil water"
// "ms must be a positive integer"

// function prepareOrder(dish){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(!dish){
//                 reject(new Error("No dish is there"));
//                 return;
//             }
//             console.log(`${dish} is prepared`);
//             resolve({dish, status: "prepared"});
//         }, 100);
//     });
// }
// function pickupOrder(order){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(!order){
//                 reject(new Error("No order is there"));
//                 return;
//             }
//             console.log(`${order.dish} is picked`);
//             resolve({...order, status: "picked"});
//         }, 100);
//     });
// }
// function deliverOrder(order){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(!order){
//                 reject(new Error("No order is there"));
//                 return;
//             }
//             console.log(`${order.dish} is delivered`);
//             resolve({...order, status: "delivered"});
//         }, 100);
//     });
// }

// prepareOrder("chai")
// .then(order => pickupOrder(order))
// .then(order => deliverOrder(order))
// .catch(error => console.error(error.message))