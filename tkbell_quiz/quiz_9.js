// 문제 9, 코드를 실행했을 때 출력되는 결과값으로 옳은 것을 고르시오.
// 1. 56
// 2. 85
// 3. 207
// 4. 276
// 5. undefined

let points = [5, 92, 17, 81, 34];

const ascPoints = points.sort(function (a, b) {
  return a - b;
});

const descPoints = [...points].sort((a, b) => b - a);

console.log(points[0] + ascPoints[1] + descPoints[2]);
