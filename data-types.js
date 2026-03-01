const x = 10n;
console.log(typeof x);

let y;
console.log(typeof y);

const z = null;
// console.log(typeof z == null);

const uniqueRuneId = Symbol("rune of fire");
console.log(typeof uniqueRuneId);
// console.log(uniqueRuneId.toString());

function add(a,b)
{
    return a+b;
}

const original = {
    names: {
        1: "A",
        2: "B",
    },
    age: {
        1: 10,
        2: 20
    }
};
console.log(original);
const copies = structuredClone(original);
console.log(copies);

const spell = ["lightning", "rage", "poison"];
console.log(Array.isArray(original));

const partner = null;
console.log(partner === null);

console.log(typeof false); // "boolean"
console.log(typeof 0); // "number"

console.log(0 == false); // true
// == does type coercion, it converts false into number which is 0, so expression becomes 0 == 0 which is true