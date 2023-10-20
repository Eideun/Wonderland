import setNav from "/nav/nav.js";
import { checkEmail, checkPhoneNumber } from "/src/views/utils.js";

const registerButton = document.querySelector("#register-button");

const nameInput = document.querySelector("#name-input");
const idInput = document.querySelector("#id-input");
const passwordInput = document.querySelector("#password-input");
const passwordConfirmInput = document.querySelector("#password-confirm-input");
const phoneNumberInput = document.querySelector("#phone-number-input");

setNav(false);
addAllEvents();

// addEventListener들을 묶어주는 코드
function addAllEvents() {
  registerButton.addEventListener("click", onClickRegister);
}

// 회원가입 처리
async function onClickRegister(e) {
  e.preventDefault();

  const name = nameInput.value;
  const id = idInput.value;
  const password = passwordInput.value;
  const passwordConfirm = passwordConfirmInput.value;
  const phoneNumber = phoneNumberInput.value;

  if (!name) {
    return alert("이름(닉네임)을 입력해 주세요");
  } else {
    // TODO: 이름(닉네임) 입력규칙 있다면 검사
  }

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

  if (!passwordConfirm) {
    return alert("위에서 입력한 비밀번호를 다시 한번 입력해 주세요.");
  } else if (password !== passwordConfirm) {
    return alert("위에서 입력한 비밀번호와 동일하게 입력해 주세요.");
  }

  if (!phoneNumber) {
    return alert("연락처를 입력해 주세요.");
  } else if (!checkPhoneNumber(phoneNumber)) {
    return alert("연락처를 올바르게 입력해 주세요.");
  }

  try {
    alert("회원가입 처리");
  } catch (error) {
    console.error(error.stack);
    alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
  }
}
