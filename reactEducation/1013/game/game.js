// game.js

const rsp = { 1: "img/scissors.png", 2: "img/rock.png", 3: "img/paper.png" };
let comImg; // 컴퓨터 카위바위보 출력 태그(객체) 저장용
let comTurn; // 컴퓨터 가위바위보 제어용
let idx = 1; // 컴퓨터 가위바위보 값

// 브라우저에 화면 출력이 모두 끝난 다음 실행되는 함수 - onload
// window.onload는 웹 페이지가 열리고 자바스크립트에서 동작해야 되는 코드를 작성한다
// (웹 페이지를 사용하는 사용자가 아무것도 안해도 동작해야 되는것들)
window.onload = function () {

    // 브라우저 시작시 컴퓨터 가위바위보 이미지 띄우기
    // 1. 현재 html문서에서 컴퓨터 가위바위보 이미지 띄울 img 태그 가져오기
    comImg = document.getElementById("comPic");
    // comImg.src = "img/rock.png";
    // setInterval( 실행할 함수, 시간(밀리세컨드) )
    comTurn = setInterval(function () {
        comImg.src = rsp[idx.toString()];
        // String(idx);
        idx++;
        // ++ 는 1증가
        idx = idx == 4 ? 1 : idx;
        // 3이 보자기 이므로 4는 필요없다. 다시 1이 되어야
    }, 100);

    // 유저 가위바위보 클릭 이벤트 등록
    let userImgs = document.querySelectorAll(".userPic");
    // class명이 userPic인 img 태그 세개 전부 가져오기 - 배열구조
    // userImgs[0].addEventListener('click', function () {
    //     alert("가위");
    // });
    for (i in userImgs) {
        // for ~ in : 배열과 같은 구조를 순차적으로 순회하기 위한 반복문
        // 배열의 첫번째는 0 인덱스로 접근 할 수 있다.
        // 0 인덱스 부터 마지막 인덱스 까지 반복 해준다.
        userImgs[i].addEventListener("click", userSelect);
    }
}

function userSelect() {
    // alert(this.dataset.user);
    // this는 현재 클릭한 img 태그를 의미
    // 클릭한 img 태그의 dataset(date-user) 값 출력
    let userIdx = this.dataset.user;
    this.classList.add('select');
    // 태그에 클래스 이름 추가 하는 방법
    // .classList.add('클래스이름');
    // .classList.remove('클래스이름');

    // 컴퓨터 가위바위보 setInterval 멈추기
    clearInterval(comTurn);

    // 컴퓨터의 가위바위보와 내 가위바위보를 비교하여 결과를 화면에 출력
    idx = idx == 1 ? 3 : idx - 1;
    // setInterval 종료 시점에 idx가 1 증가하므로 값 변경 필요
    // 컴퓨터 가위바위보 멈출때 1증가 하고 멈추므로 -1을 해줘야한다

    // 값 비교 식 만들기
    // 결과 출력 태그 가져오기
    let result = document.querySelector("#result");

    let res = parseInt(userIdx) - idx;

    if (res === 0) {
        result.innerHTML = `<b>무승부</b>`;
    }
    else if (res === -2 || res === 1) {
        result.innerHTML = `<b>이겼다!</b>`;
    } else {
        result.innerHTML = `<b>졌다...</b>`;
    }
}