// 문제 8, 상품을 가격 오름차순으로, 만약 가격이 같다면 id를 내림차순으로 정렬하려고 한다. (가)와 (나)에 들어갈 것으로 옳은 것은?

let proArr = [
  { id: 36, price: 6000 },
  { id: 9, price: 4500 },
  { id: 49, price: 6000 },
  { id: 25, price: 10000 },
  { id: 16, price: 6000 },
  { id: 4, price: 12000 },
];

proArr.sort((p1, p2) => {
  if (p1.price == p2.price) {
    return /* (가) */;
  }
  return /* (나) */;
});

console.log(proArr);

proArr.sort((p1, p2) => {
  if (p1.price == p2.price) {
    return p2.id - p1.id;
  }
  return p1.price - p2.price;
});
