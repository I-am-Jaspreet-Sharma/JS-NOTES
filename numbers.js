console.log(typeof 40);
console.log(typeof 142.42);
console.log(typeof 300_000_000);
console.log(typeof Infinity);
console.log(typeof -Infinity);

console.log(40);
console.log(142.42);
console.log(300_000_000);
console.log(Infinity);
console.log(-Infinity);

const value = "Jaspreet" ** 2;
console.log(Number.isNaN(value));

console.log(Number.isInteger("100"));

const fuel = "142.75 tons";
console.log(parseInt(fuel));

console.log(parseInt("0xA3"));
console.log(parseInt("007"));

console.log(parseInt("111", 2));

console.log(Number.EPSILON);

const value2 = "11" / 1;
console.log(value2);

console.log(NaN === NaN); // false
console.log(typeof NaN === typeof NaN); // true
