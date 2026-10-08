console.log(Math.random());

// 활용1. 0~9
console.log(Math.random() * 10); //0보다는 크고 10보다 작은 수
console.log(Math.floor(Math.random() * 10)); //내림

// 활용2. 1~10
console.log(Math.floor(Math.random() * 10) + 1); //0~9를 구해서 +1

// 활용3. 1~100
console.log(Math.floor(Math.random() * 100) + 1);

// 활용4. 시작값과 종료값을 주면 사이값을 random하게 나오게 하는 함수를 작성하여 활용해보자
// 위의 3가지 사례를 min, max 에 넣어서 이해해보자.
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInteger(1, 10));
