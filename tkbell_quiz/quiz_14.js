// 문제 14, 코드를 실행했을 때 출력되는 결과로 옳은 것을 고르시오.
// ① 9000 true 1 B,C,D	정답
// ② 1000 true 1 B,C,D
// ③ 3000 false 1 B,C,D
// ④ 9000 true 0 B,C,D
// ⑤ 9000 true 1 C,D

const items = [
  { name: "A", price: 3000 },
  { name: "B", price: 1000 },
  { name: "C", price: 2000 },
];

const sorted = items.sort((a, b) => a.price - b.price);
const cheap = items.filter((i) => i.price <= 2000);
const names = cheap.map((i) => i.name);

cheap[0].price = 9000;
cheap.shift(2);
names.push("D");

console.log(items[0].price, sorted === items, cheap.length, `${names}`);
