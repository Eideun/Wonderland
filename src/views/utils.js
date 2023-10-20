// 이메일 유효성 검사
export function checkEmail(str) {
  var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if (!reg_email.test(str)) {
    return false;
  } else {
    return true;
  }
}

export function checkPhoneNumber(phoneNumber) {
  return isTelFormat(phoneNumber) || isHpFormat(phoneNumber);
}

// 일반 전화번호 유효성 검사
function isTelFormat(tel) {
  if (tel == "") {
    return true;
  }
  var phoneRule = /^(070|02|0[3-9]{1}[0-9]{1})-([0-9]{3,4})-([0-9]{4})$/;
  return phoneRule.test(tel);
}

// 휴대폰 번호 유효성 검사
function isHpFormat(hp) {
  if (hp == "") {
    return true;
  }
  var phoneRule = /^(01[016789]{1})-([0-9]{3,4})-([0-9]{4})$/;
  return phoneRule.test(hp);
}

// NOTE: https://1061025.tistory.com/90
// 2자리수 이상 일 경우 앞에 0으로 시작하면 없애주는 로직
export function _setLeftZeroRemove(vValue) {
  var vVal = vValue;

  if (vVal.length > 1) {
    vVal = vVal.replace(/(^0+)/, "");

    if (vVal.length == 0) {
      vVal = 0;
    }
  }

  return vVal;
}

// 천단위마다 콤마(,) 추가
export function setThousandsSeparator(value) {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// NOTE: https://wickedmagica.tistory.com/120
// 이미지 파일 업로드시 확장자 검사하기
export function confirmFileExtension(file) {
  //console.log(file);

  // 정규식을 사용히여 jpg, jpeg, png, gif, bmp등 이미지파일의 확장자를 가진것을 추려낸다.
  let reg = /(.*?)\.(jpg|jpeg|png|gif|bmp)$/;
  if (file.match(reg)) {
    return true;
  }

  return false;
}
