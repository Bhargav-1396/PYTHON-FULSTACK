let arr = [5, 6, 37, 894, 88, 55, 4];

//sorting in array
arr.sort();
console.log(arr);

//sorting in decending  order
arr.reverse();
console.log(arr);

//searching a value in arr using lastindexof: from right
let res2 = arr.lastIndexOf(6);
console.log(res2);

arr[2] = 4;
console.log(arr);

let s = arr.tostring();
console.log(s);
console.log(typeof s);
