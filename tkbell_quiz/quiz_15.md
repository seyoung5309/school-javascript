문제 15, 원본을 변경하는 메서드만 포함된 것을 고르시오.

① sort, splice, unshift O
② sort, slice, push
③ filter, map, concat
④ splice, pop, toSorted
⑤ reduce, shift, join

---

원본을 변경하는 메서드

메서드 동작 반환값
push 맨 뒤에 추가 새 길이
pop 맨 뒤 1개 제거 제거된 요소
unshift 맨 앞에 추가 새 길이
shift 맨 앞 1개 제거 제거된 요소
splice 특정 위치에 추가/삭제 삭제된 요소들의 배열
sort 정렬 원본 배열 (같은 참조)
reverse 순서 뒤집기 원본 배열 (같은 참조)
fill 특정 값으로 채우기 원본 배열 (같은 참조)

원본을 변경하지 않는 메서드

메서드 동작 반환값
filter 조건에 맞는 요소만 추림 새 배열
map 각 요소를 변환 새 배열
slice 일부 구간을 잘라냄 새 배열
concat 배열을 이어붙임 새 배열
toSorted 정렬 (sort의 비변경 버전) 새 배열
toReversed 뒤집기 (reverse의 비변경 버전) 새 배열
toSpliced 추가/삭제 (splice의 비변경 버전) 새 배열
reduce 하나의 값으로 누적 누적된 값
join 문자열로 합침 문자열
indexOf, includes 요소 검색 인덱스 / boolean
find, findIndex 조건으로 검색 요소 / 인덱스
forEach 각 요소에 대해 실행 undefined
