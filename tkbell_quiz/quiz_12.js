// 문제 12. 코드를 실행했을 때 출력되는 결과로 옳은 것을 고르시오.
// 1. 이 이미림 김
// 2. 이 이미림 박
// 3. 최 이미림 김
// 4. 최 최미림 김
// 5. 최 이미림 박

const userList = [
  { firstName: "미림", lastName: "이" },
  { firstName: "급식", lastName: "김" },
];

const listA = userList.map((user) => user);
const listB = userList.map((user) => {
  return { fullName: user.lastName + user.firstName };
});

listA[0].lastName = "최";
listB[1].fullName = "박급식";

console.log(userList[0].lastName, listB[0].fullName, userList[1].lastName);
