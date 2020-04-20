let obos = "HolaMUNDO";

console.log(obos.substr(0, 3));

console.log(Math.max(3, 3));

let list = [5,4,4,3, 5,6,7, 60]


console.log(list.sort((a, b)=> a - b));

let obo = [
{ name: "Some Person", jobTitle: "Boss Person", age: 30 },
{ name: "xxxx", jobTitle: "Boss Person", age: 30 },
{ name: "yyyy", jobTitle: "Boss Person", age: 20 },
];
console.log(obo.map((person)=> person.name));

const ages =  obo.map((person)=> person.age);
console.log(ages.reduce((a, b)=> a + b));
let average = ages.reduce((a, b)=> a + b) / ages.length