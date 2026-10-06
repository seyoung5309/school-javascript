// 문제 10, 코드를 실행했을 때 출력되는 결과값으로 옳은 것을 고르시오.

const users = [
  { name: "Kim", age: 21 },
  { name: "Lee", age: 35 },
  { name: "Park", age: 18 },
];

let adults = users.filter((u) => u.age >= 25);
adults[0].age = 10;
adults.pop();

console.log(users.length, users[1].age);

// 3 10
