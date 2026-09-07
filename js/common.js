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

let getIntervalDateFormat2 = (day, format) => {
  let date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * day);
  let result = format;
  result = result.replace("YYYY", String(date.getFullYear()));
  result = result.replace("YY", String(date.getFullYear()).slice(2));
  result = result.replace("MM", String(date.getMonth() + 1).padStart(2, 0));
  result = result.replace("DD", String(date.getDate()).padStart(2, 0));
  console.log(result);
};

/**
 * 최소값과 최대값을 받아 랜덤한 수를 구하는 함수
 **/

function getRandomInteger(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}
