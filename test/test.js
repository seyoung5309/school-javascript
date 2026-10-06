let arr1 = ["A", "B"];
let arr2 = ["C", "D", "E"];
let arr3 = arr1.concat(arr2);
let arr4 = [...arr1, arr2];

console.log(arr3.join("-")); // A-B-C-D-E
console.log(arr4.join("-")); // A-B-C,D,E

console.log("===");

let points = [40, 100, 1, 5, 25, 10];

const ascPoints = points.sort(function (a, b) {
  return a - b;
});

const descPoints = points.sort(function (a, b) {
  return b - a;
});

console.log(ascPoints[0], descPoints[0], points[0]);

console.log("===");

let d = new Date(24 * 60 * 60 * 1000 * 31);
console.log(d.getMonth(), d.getDate());
