// let a = "I love python full stack";
// let count = 0;
// for (let i = 0; i < a.length; i++) {
//   if ("AEIIOUaeiou".includes(a[i])) {
//     count++;
//   }
// }
// console.log(count);

let ch = "@";
if (ch.length != 1) {
  console.log("please enter single letter");
} else {
  let a = ch.charCodeAt();
  if ((a >= 65 && a <= 90) || (a >= 97 && a <= 122)) {
    console.log("Alphabet");
  } else if (a >= 48 && a <= 57) {
    console.log("Digit");
  } else {
    console.log("Spicial Symbol");
  }
}
