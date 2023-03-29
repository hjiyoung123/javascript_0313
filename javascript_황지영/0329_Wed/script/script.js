function sum() {
  let sum = 0;
  for(let i = 0; i < arguments.length; i++) { //for문의 초기값 //arguments를 사용함으로써 매개변수를 사용하지 않음에도 사용자가 입력한 데이터를 가져올 수 있음
    sum += arguments[i]; //한번 반복시마다 arguments에 인덱스 값을 넣어라
  } 
  document.write(sum);
}

let a = prompt("수학점수를 입력해주세요", "");
let b = prompt("국어점수를 입력해주세요", "");
let c = prompt("영어점수를 입력해주세요", "");

sum(Number(a), Number(b), Number(c));