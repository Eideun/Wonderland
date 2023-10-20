const orderCheck = document.querySelector(".ordercheck");
const conShopping = document.querySelector(".continue-shopping");
orderCheck.addEventListener("click", mypage);
conShopping.addEventListener("click",returnPage);

function mypage() {
    window.location.href = "/src/views/mypage/mypage.html"
}

function returnPage() {
    window.location.href = "/src/views/index/index.html"
}

