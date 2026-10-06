// 문제 5, 코드를 실행했을 때 출력되는 결과값으로 옳은 것을 고르시오.
// 1. [{ name: "Kim" }, { name: "Park" }]
// 2. [{ name: "Kim" }, { name: "Lee" }, { name: "Park" }]
// 3. [{ name: "Kang" }, { name: "Park" }]
// 4. [{ name: "Kang" }, { name: "Lee" }, { name: "Park" }]
// 5. [{ name: "Kang" }, { name: "Kim" }, { name: "Lee" }, { name: "Park" }]

let users1 = [{ name: "Kim" }, { name: "Lee" }];
let users2 = [{ name: "Park" }];

let userAll = [...users1, ...users2];

users1.pop();
users1[0].name = "Kang";

console.log(userAll);
