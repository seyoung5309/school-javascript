// 퀴즈 3, 코드를 실행했을 때 출력되는 결과값으로 옳은 것을 고르시오.
// 1. ["blue", "purple"]
// 2. ["red", "blue", "purple"]
// 3. ["orange", "red", "purple"]
// 4. ["orange", "blue", "purple"]
// 5. ["orange", "red", "blue", "purple"]

let colors = ["red", "orange", "yellow"];

colors.pop();
colors.unshift(colors.pop());
colors.push("blue");
colors.shift(2);
colors.push("purple");

console.log(colors);
