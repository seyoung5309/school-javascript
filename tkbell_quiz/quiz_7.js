// 문제 7, aiArr 배열의 Grok을 제거하고, addArr가 가진 요소들을 추가하여 아래의 주석과 같이 출력하도록 p1, p2, p3를 입력하시오.

let aiArr = ["chatGPT", "Grok", "Claude"];
let addArr = ["Copilot", "Gemini"];

aiArr.splice(1, 1, ...addArr); // aiArr.splice(p1, p2, p3);

console.log(aiArr);
// [ 'chatGPT', 'Copilot', 'Gemini', 'Claude' ]
