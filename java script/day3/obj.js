//creation of object
let student1 = {
  id: 1,
  name: "Bhargav",
  branch: "ECE",
};

let student2 = new Object({
  id: 2,
  name: "Sai",
  branch: "ECE",
});
console.log(student1);
console.log(student2);

//reading individual item
console.log(student1.name);

//adding an item to exisiting object

student1.marks = 95;
console.log(student1);

//updating an item to exisiting object

student1.name = "sai";
console.log(student1);

//deleting the item

delete student1.branch;

//for-in loop
for (let key in student1) {
  console.log(`${key} => ${student1.key}`);
}
