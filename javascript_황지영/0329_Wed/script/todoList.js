let form = document.querySelector('form');
let input = document.querySelector('input');
let ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
  event.preventDefault(); //제출하면 초기화되므로 초기화 방지

  if(input.value !== '') { //안에 아무것도 없지 않다면
    let li = document.createElement('li'); //변수를 생성해라
    li.innerText = input.value;
    ul.appendChild(li); //부모요소인 ul의 자녀요소에 넣어줘

    input.value = ''; //input의 value 값을 공백으로
  } 
})