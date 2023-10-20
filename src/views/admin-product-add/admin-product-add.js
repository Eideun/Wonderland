import { _setLeftZeroRemove, confirmFileExtension, setThousandsSeparator } from "/src/views/utils.js";

const dropdown = document.querySelector(".dropdown");
const dropdownText = document.getElementById("dropdown-text");
const dropdownItems = document.getElementsByClassName("dropdown-item");

const priceInput = document.getElementById("price-input");

const imageInput = document.querySelector("#image-upload input[type=file]");
const imageNameSpan = document.querySelector("#image-upload .file-name");

addAllEvents();

// addEventListener들을 묶어주는 코드
function addAllEvents() {
  dropdown.addEventListener("click", onClickDropdown);
  for (let i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].addEventListener("click", function () {
      dropdownText.textContent = dropdownItems[i].textContent;
    });
  }

  priceInput.addEventListener("focusout", function (e) {
    // 입력된 값을 가져옴
    let value = e.target.value;

    // 숫자만 남기고 모든 문자 제거
    value = value.replace(/\D/g, "");

    // 가격의 유효성 검사
    value = _setLeftZeroRemove(value);

    if (value.length) {
      // 천단위마다 콤마(,) 추가
      value = setThousandsSeparator(value);
    }

    // 수정된 값을 다시 입력 필드에 설정
    e.target.value = value;
  });

  imageInput.onchange = () => {
    if (imageInput.files.length > 0) {
      const fileName = imageInput.files[0].name;

      // 확장자를 검사해서 이미지 파일이 맞는지 체크한다.
      if (confirmFileExtension(fileName)) {
        imageNameSpan.textContent = fileName;
      } else {
        alert("이미지 파일이 아닙니다.");
      }
    }
  };
}

function onClickDropdown(e) {
  //console.log(e);
  e.preventDefault();
  dropdown.classList.toggle("is-active");
}
