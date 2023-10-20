import setNav from "/nav/nav.js";

const accountSecurity = document.querySelector("#account-security");
const accountOrders = document.querySelector("#account-orders");
const customerInquiry = document.querySelector("#customer-inquiry");

setNav();
addAllEvents();

// addEventListener들을 묶어주는 코드
function addAllEvents() {
  accountSecurity.addEventListener("click", onClickAccountSecurity);
  accountOrders.addEventListener("click", onClickAccountOrders);
  customerInquiry.addEventListener("click", onClickCustomerInquiry);
}

function onClickAccountSecurity() {
  window.location.href = "/src/views/account-security/account-security.html";
}

function onClickAccountOrders() {
  window.location.href = "/src/views/account-orders/account-orders.html";
}

function onClickCustomerInquiry() {
  window.location.href = "/src/views/customer-inquiry/customer-inquiry.html";
}
