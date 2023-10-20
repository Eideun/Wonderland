import setNav from "/nav/nav.js";
import { checkEmail } from "/src/views/utils.js";

const idInput = document.querySelector("#id-input");
const passwordInput = document.querySelector("#password-input");
const loginButton = document.querySelector("#login-button");

setNav(false);
addAllEvents();

// addEventListener들을 묶어주는 코드
function addAllEvents() {
  loginButton.addEventListener("click", onClickLogin);
}

// 로그인 진행
async function onClickLogin(e) {
  e.preventDefault();

  const id = idInput.value;
  const password = passwordInput.value;

  if (!id) {
    return alert("아이디(이메일)를 입력해 주세요");
  } else if (!checkEmail(id)) {
    return alert("아이디(이메일)를 울바르게 입력해 주세요");
  }

  if (!password) {
    return alert("비밀번호를 입력해 주세요");
  } else {
    // TODO: 비밀번호 입력규칙 있다면 검사
  }
}

// function onClickNonMemberLogin(e) {
//   e.preventDefault();
//   e.stopImmediatePropagation(); // onClickLogin()가 자꾸 호출되어 막음.

//   alert("비회원 로그인");

//   //window.location.href = ".html";
// }
