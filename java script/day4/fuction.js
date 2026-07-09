// function sums(a, b) {
//   let res = a + b;
//   return res;
// }
// let ans = sums(3, 8);
// console.log("sum: ", ans);

let ans = function (a, b) {
  let res = a + b;
  return res;
};
console.log(ans(20, 50));

//arrow function
let anss = (x, y) => {
  let res = square(x) + square(y);
  return res;
};
console.log("sum of square", anss(35, 66));

//single line arrow function
let square = (z) => z ** 2;
console.log(ans(3, 7));
