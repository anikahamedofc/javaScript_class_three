// 1. comparision operator
// dobule equal ==
// it will give true when value is same it don't check data type.
console.log(8 == 8);
console.log(9 == 8);
console.log(9 == "9");

// Tripal equal ===
// it will give ture coz value & data type is same .
console.log(9 === 9);
//it will give false coz value is same but data type is not same.
console.log(9 === "9");

// not equal !=
console.log(9 != 9);
console.log(9 != 8);
// not equal !==
// check not equal  value or not equal type
console.log(9 !== "9");

// > greater then
console.log(9 > 8);
console.log(9 > 10);

// < less then
console.log(9 < 8);
console.log(9 < 10);

// >= greater then equal
// it will be true coz 9 is equal to 9
console.log(9 >= 9);
// it will be true coz 9 is big form 8
console.log(9 >= 8);
// false coz 9 is smaller then 10
console.log(9 >= 10);

// <= less then equal
// false coz 8 is big then 7 it check from left side data thekey right side data is big or small ki na or same
console.log(8 <= 7);
// true
console.log(8 <= 9);
// false
console.log(10 <= 8);

// ? ternary operator (we will learn later)

// 2.logical operators
//  && and
// || or
//  ! not

// logical && give us boolean value and compair both the data if both data is true then it gives us true result
let x = 9;
let y = 8;

console.log(x > 6);
console.log(y < 6);
console.log(x > 6 && y < 6);

// || or operator
console.log(x > 6);
console.log(y < 6);
console.log(x > 6 || y < 6);

// ! logical not
console.log(x == y); // false
console.log(!(x == y)); // true

// 3. oporator precedence
//  B O D M A S
// B = bracket
// O = order
// D = division
// M = multiply
// A = addition
// S = substruction

console.log((36 / 6) * 5 + 2 ** 2 - (5 + 6));
// 6 * 5 + 2 ** 2 - 11
// 6 * 5 + 4 - 11
// 30 + 4 - 11
// 34 - 11
// 23

// 4. Template Literals
const firstName = "Anik";
const lastName = "Ahmed";
const age = 28;
let job = "Web Development";
const countryName = "Bangladesh";

// `` this sign is call Bactic
// `${veriable}`
console.log(
  `I a'm ${firstName} ${lastName}, ${age} years old and learning ${job}. `
);

console.log(`my country is ${countryName}`);

// 5. If Else statment
if (5 > 3) {
  console.log("if its true please execue this line ");
} else {
  console.log("if its false please execue this line ");
}

if (5 < 3) {
  console.log("if its true please execue this line ");
} else {
  console.log("if its false please execue this line ");
}
