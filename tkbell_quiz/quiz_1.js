// 퀴즈 1, 배열 2개가 주어지고, 이를 console.log()로 출력했을 때 결과값이 다른 하나를 고르시오.

console.log("\n퀴즈 1");

let langs = ["c", "java", "python"];
let oss = ["Windows", "Linux"];
console.log(`?`);

console.log(langs + oss);
console.log(langs.concat(oss).join(","));
console.log([...langs, ...oss].join(","));
console.log(langs.concat(oss).toString());
console.log(String(langs.concat(oss)));
