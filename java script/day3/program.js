// console.log("THis is sai");

// let arr = ["Apple", "Banana", "Mangoo"];

// arr.splice(1, 1, "Goa", "Carrot", "orange");
// console.log(arr);

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(`${arr[i]} power 2 is : ${arr[i] ** 2}`);
}
//for-of loop for array
for (let item of arr) {
  console.log(`${item} power 3 is ${item ** 3}`);
}

//for-in loop for array
for (let idx in arr) {
  console.log(`${idx} power 4 is ${arr[idx] ** 4}`);
}

//