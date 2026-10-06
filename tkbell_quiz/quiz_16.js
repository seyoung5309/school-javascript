// 문제 16, 다음 중 옳은 설명을 고르시오.

const arr = [10, 20, 30, 40, 50];
const users = [{ name: "Kim" }, { name: "Lee" }];

// ① arr는 const로 선언했으므로 arr.push(60)은 에러가 발생한다.
// ② const copy = [...users] 후 copy[0].name = "Park"을 실행해도 users[0].name은 "Kim"이다.
// ③ arr.splice(2)를 실행하면 arr는 [10, 20, 40, 50]이 된다.
// ④ arr.push(60)의 반환값은 [10, 20, 30, 40, 50, 60]이다.
// ⑤ arr.reduce((acc, cur) => acc + cur)에서 첫 콜백 호출 시 acc는 10이다.
