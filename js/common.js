/**
 * 부가세를 계산해서 리턴하는 함수
 * @param {*} productPrice
 * @returns
 */

function taxAmount(productPrice) {
  let tax = 0.1;
  return productPrice * tax;
}

/**
 * 한국 부자
 * @returns
 */
function getTop5() {
  return ["a", "b", "c", "d"];
}

/**
 * 며칠 전 후를 구하는 함수
 * @param {*} date
 * @returns
 */
let getIntervalDate = (date) => {
  let now = new Date();
  let toDay = now.getTime();
  let currentDay = 24 * 60 * 60 * 1000 * date;
  let result = new Date(toDay + currentDay);
  return (
    String(result.getMonth() + 1).padStart(2, 0) +
    "/" +
    String(result.getDate()).padStart(2, 0)
  );
};
