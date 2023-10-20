// NOTE: https://7942yongdae.tistory.com/67
export default function setNav(onLogo = true) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/nav/nav.html", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var navbarContent = xhr.responseText;

      // onLogo가 false라면 로고를 안 보이게 한다.
      if (!onLogo) {
        navbarContent = navbarContent.replace('style="display: block"', 'style="display: none"');
      }

      // 사전에 모든 html에 "navbar"라는 id를 가진 요소를 배치해두고,
      // 그걸 getElementById()로 가져와서 그 하위에 nav.html의 내용을 넣는다.
      var navbarElement = document.getElementById("navbar");
      navbarElement.innerHTML = navbarContent;
    }
  };
  xhr.send();
}
