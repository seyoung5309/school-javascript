// 문제 6, 인덱스를 모른다고 가정할 때, animals 배열의 cat 요소 뒤에 있는 모든 요소를 삭제하는데에 적합한 것을 선택하시오.

let animals = ["dog", "cat", "lion", "bird"];

// animals.`?`;

console.log(animals);

animals.pop(animals.indexOf("cat"), animals.length);
animals.shift(animals.length, animals.indexOf("cat"));
animals.slice(0, animals.indexOf("cat") + 1);
animals.splice(animals.indexOf("cat") + 1); // 인자값을 하나만 주면, 그 위치부터 뒤를 전체 삭제한다.
animals.remove(animals.indexOf("cat"), animals.length);
