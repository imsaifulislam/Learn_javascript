/* let checkFileExtention = (str) => str.slice(str.lastIndexOf("."));

console.log(checkFileExtention("index.html"));
console.log(checkFileExtention("index.txt"));
console.log(checkFileExtention("index.mp3"));
console.log(checkFileExtention("index.mp4"));
 */

function checkExtention(str) {
  return str.slice(str.lastIndexOf("."));
}

let x = "index.html.js";
let result = checkExtention(x);
console.log(result);