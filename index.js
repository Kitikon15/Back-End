// import { add, minus, multiply, divide, modulus } from "./math.js";
// import * as Math from "./math.js"
// const a = 5;
// const b = 3;

// console.log(`${a} + ${b} =  ${Math.add(a, b)}`);
// console.log(`${a} - ${b} =  ${Math.minus(a, b)}`);
// console.log(`${a} * ${b} =  ${Math.multiply(a, b)}`);
// console.log(`${a} / ${b} =  ${Math.divide(a, b)}`);
// console.log(`${a} % ${b} =  ${Math.modulus(a, b)}`);

import "dotenv/config";

const port = process.env.PORT;
const name = process.env.NAME;

console.log(port);
console.log(name);
console.log(process.env.SECRET_KEY);