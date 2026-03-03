function init(){
    let name = "Hitesh";
    function displayName(){
        console.log(name);
    }
    displayName();
}
init(); // "Hitesh"

// console.log(name); // ReferenceError

function makeFunc(){
    const name = "Jaspreet";
    function displayName(){
        console.log(name);
    }
    return displayName;
}
const myFunc = makeFunc();
myFunc(); // "Jaspreet"

// const regular = function(){
//     console.log(name);
// }
// regular(); // ReferenceError

function startCompany(){
    function ca(name){
        return `Name of your company is ${name}`;
    }
    return ca;
}
const getMeACompany = startCompany();
console.log(getMeACompany("Zomato")); // "Name of your company is Zomato"

function eternal(guest){
    const guestName = guest;
    let count = 0;
    function zomato(){
        if(count === 5) return;
        console.log(`Hi ${guestName}, from Zomato`);
        count++;
    }
    function blinkit(){
        if(count === 2) return;
        console.log(`Hi ${guestName}, from Blinkit`);
        count++;
    }
    function getCount(){
        return count;
    }
    return {zomato, blinkit, count, getCount};
}
const hitesh = eternal("Hitesh");
hitesh.zomato(); // "Hi Hitesh, from Zomato"
hitesh.blinkit(); // "Hi Hitesh, from Blinkit"
hitesh.blinkit(); // NOTHING WILL BE PRINTED
hitesh.blinkit(); // NOTHING WILL BE PRINTED
hitesh.blinkit(); // NOTHING WILL BE PRINTED
hitesh.zomato(); // "Hi Hitesh, from Zomato"
hitesh.zomato(); // "Hi Hitesh, from Zomato"
hitesh.zomato(); // "Hi Hitesh, from Zomato"
hitesh.zomato(); // NOTHING WILL BE PRINTED
console.log(hitesh.count); // 0
console.log(hitesh.getCount()); // 5

// This is the implementation of useMemo() react Hook. I think it is used so that multiple similar requests should be ignored. Instead of computing the function again and again, we return the value stored in the cache.

const cache = {};
function add(a, b){
    const key = `${a}:${b}`;
    if(cache[key]) return cache[key];
    const result = a+b;
    cache[key] = result;
    return result;
}
console.log(add(3,2)); // 5
console.log(add(3,2)); // 5
console.log(add(3,2)); // 5
console.log(add(3,2)); // 5
console.log(add(3,2)); // 5
console.log(add(3,2)); // 5
console.log(add(3,2)); // 5
console.log(add(3,2)); // 5
console.log(add(3,2)); // 5
console.log(add(3,2)); // 5
console.log(add(3,2)); // 5
console.log(add(3,2)); // 5
console.log(add(3,2)); // 5
console.log(add(3,2)); // 5
console.log(cache); // {"3:2": 5}

// But in above example, I have to create different cache for each function like cacheForMultiplication, cacheForSubtraction, etc.

function optimizedVersion(fn){
    const cache = {};
    return function optimize(...args){
        const key = JSON.stringify(args);
        console.log(cache);
        if(cache[key]) return cache[key];
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}
function add2(a,b){
    return a + b;
}
const optimizedAdd = optimizedVersion(add2);
console.log(optimizedAdd(3,2)); // 5
console.log(optimizedAdd(3,2)); // 5
console.log(optimizedAdd(3,2)); // 5
console.log(optimizedAdd(4,1)); // 5
console.log(optimizedAdd(4,1)); // 5
console.log(optimizedAdd(4,1)); // 5

const optimizedSubtraction = optimizedVersion(function(a,b){
    return a-b;
});
console.log(optimizedSubtraction(3,2)); // 1

// Closure is created everytime a function is called
// Closures does not save memory. In this case also, unique cache {} is created for each function (add, subtract, etc.). Same as previous code. The only difference is there we have to manually create cache {} every time for a new function, but here cache {} is created automatically.

