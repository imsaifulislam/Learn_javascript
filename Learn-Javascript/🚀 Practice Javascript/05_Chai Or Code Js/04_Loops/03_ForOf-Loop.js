//* For of
/*
 * =>
 */

const arr = [1, 2, 3, 4, 5];
for (const arrys of arr) {
  //   console.log(arrys);
}

const greetings = "hello World";

for (let greet of greetings) {
  if (greet === " ") {
    continue;
  }
  console.log("Each Char is: ", greet);
}
