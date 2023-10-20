import setNav from "/nav/nav.js";
setNav(false);

let cartItems = [
  {
    product: "나의 첫 국어사전",
    price: 50000,
    imagePath: "../images/나의 첫 국어사전.jpg",
  },
  {
    product: "요술지팡이 이솝우화 전 20권, 그린키즈",
    price: 45900,
    imagePath: "../images/요술지팡이 이솝우화 전 20권, 그린키즈.jpg",
  },
  {
    product: "요미몬빅북 호기심나라 사운드북",
    price: 49800,
    imagePath: "../images/요미몬빅북 호기심나라 사운드북.jpg",
  },
  {
    product: "콩닥콩닥 감정표현 동화 (전10권)",
    price: 31500,
    imagePath: "../images/콩닥콩닥 감정표현 동화 (전10권).jpg",
  },
  {
    product: "생각콩콩 탈무드동화 전 10권",
    price: 31500,
    imagePath: "../images/생각콩콩 탈무드동화 전 10권.jpg",
  },
  {
    product: "스웨덴 인성동화 세트 전 12권",
    price: 36000,
    imagePath: "../images/스웨덴 인성동화 세트 전 12권.jpg",
  },
  {
    product: "꿈꾸는 윌리",
    price: 8550,
    imagePath: "../images/꿈꾸는 윌리.jpg",
  },
];
const cartItemsTableBody = document.getElementById("cartItemsTableBody");

if (cartItems.length === 0) {
  const emptyCart = document.querySelector(".empty-cart");
  emptyCart.style.display = "flex";
} else {
  cartItems.forEach((item) => {
    const row = document.createElement("tr");
    row.classList.add("cart-container");

    const checkboxCell = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "select-each";
    checkboxCell.appendChild(checkbox);
    row.appendChild(checkboxCell);

    // 체크박스 개별 상품 선택기능
    checkbox.addEventListener("change", function () {
      const row = this.parentNode.parentNode;
      if (this.checked) {
        row.classList.add("selected");
      } else {
        row.classList.remove("selected");
      }
      updateSelectedTotal();
    });

    const imageCell = document.createElement("td");
    imageCell.classList.add("image-list");
    const image = document.createElement("img");
    image.src = item.imagePath;
    image.width = "125";
    image.height = "125";
    image.alt = item.product;
    imageCell.appendChild(image);
    row.appendChild(imageCell);

    const itemCell = document.createElement("td");
    itemCell.classList.add("item-list");
    itemCell.textContent = item.product;
    row.appendChild(itemCell);

    const priceCell = document.createElement("td");
    priceCell.classList.add("price-list");
    priceCell.textContent = item.price.toLocaleString("ko-KR") + "원";
    row.appendChild(priceCell);

    const quantityCell = document.createElement("td");
    quantityCell.classList.add("quantity-list");

    const minusIcon = document.createElement("i");
    minusIcon.classList.add("fa-sharp", "fa-solid", "fa-circle-minus", "fa-lg");
    minusIcon.style.color = "#000000";
    quantityCell.appendChild(minusIcon);

    const quantityInput = document.createElement("input");
    quantityInput.classList.add("quantity");
    quantityInput.type = "number";
    quantityInput.size = "1";
    quantityInput.value = "1";
    quantityInput.min = "0";
    quantityInput.max = "99";
    quantityCell.appendChild(quantityInput);

    const plusIcon = document.createElement("i");
    plusIcon.classList.add("fa-sharp", "fa-solid", "fa-circle-plus", "fa-lg");
    plusIcon.style.color = "#222326";
    quantityCell.appendChild(plusIcon);

    row.appendChild(quantityCell);

    const totalCell = document.createElement("td");
    totalCell.classList.add("total-list");
    totalCell.textContent = "100,000원";
    row.appendChild(totalCell);

    cartItemsTableBody.appendChild(row);
  });
  const rows = document.querySelectorAll(".cart-container");
  rows.forEach((row) => {
    addRowControls(row);
  });
}

/* 체크박스 전체 선택 기능 */
const selectAll = document.querySelector("#select-all");
selectAll.addEventListener("click", toggleCheckbox);

function toggleCheckbox() {
  const selectEach = document.querySelectorAll(".select-each");
  selectEach.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
    const row = checkbox.parentNode.parentNode;
    if (selectAll.checked) {
      row.classList.add("selected");
    } else {
      row.classList.remove("selected");
    }
  });
}

// 삭제버튼 클릭이벤트
const deleteModal = document.querySelector(".delete-modal");
const deleteQuantityElement = deleteModal.querySelector(".variable-quantity");

function deleteItem() {
  const selectedRows = document.querySelectorAll(".selected");
  if (selectedRows.length > 0) {
    deleteModal.classList.add("show");
    body.style.overflow = "hidden";
  } else {
    noModal.classList.add("show");
    body.style.overflow = "hidden";
  }
  displayUpdate();
}
const deleteBtn = document.querySelector(".del-btn");
deleteBtn.addEventListener("click", deleteItem);

// 구매하기 클릭 이벤트
const body = document.querySelector("body");
const orderModal = document.querySelector(".order-modal");
const variableQuantityElement = orderModal.querySelector(".variable-quantity");
const noModal = document.querySelector(".no-modal");

function purchaseItem() {
  const selectedRows = document.querySelectorAll(".selected");
  if (selectedRows.length > 0) {
    const selectedQuantities = Array.from(selectedRows).map((row) => {
      const quantityElement = row.querySelector(".quantity");
      return parseInt(quantityElement.value);
    });
    const totalQuantity = selectedQuantities.reduce((acc, cur) => acc + cur, 0);
    variableQuantityElement.textContent = totalQuantity;
    orderModal.classList.add("show");
    body.style.overflow = "hidden";
  } else {
    noModal.classList.add("show");
    body.style.overflow = "hidden";
  }
}

const orderBtn = document.querySelector(".pur-btn");
orderBtn.addEventListener("click", purchaseItem);

// 전체상품 구매하기 클릭이벤트
const allModal = document.querySelector(".all-modal");

function purchaseAll() {
  const selectedRows = document.querySelectorAll(".selected");
  if (selectedRows.length > 0) {
    allModal.classList.add("show");
    body.style.overflow = "hidden";
  } else {
    noModal.classList.add("show");
    body.style.overflow = "hidden";
  }
}

const allOrderBtn = document.querySelector(".confirm-btn");
allOrderBtn.addEventListener("click", purchaseAll);

// no-modal 확인 버튼 클릭 이벤트
const noModalProcessBtn = document.querySelector("#no-popup-process");
noModalProcessBtn.addEventListener("click", () => {
  noModal.classList.remove("show");
  body.style.overflow = "auto";
});

// delete-modal 클릭 이벤트
function closeDelModal() {
  deleteModal.classList.remove("show");
  body.style.overflow = "auto";
}

function deleteProcess() {
  const selectedRows = document.querySelectorAll(".selected");
  selectedRows.forEach((row) => {
    row.remove();
    closeDelModal();
  });
  displayUpdate();
}

function displayUpdate() {
  const updatedItemCheckbox = document.querySelectorAll(".select-each");
  const emptyCart = document.querySelector(".empty-cart");
  if (updatedItemCheckbox.length === 0) {
    emptyCart.style.display = "flex";
  } else {
    emptyCart.style.display = "none";
  }
}

const deleteCancel = document.querySelector("#delete-popup-cancel");
deleteCancel.addEventListener("click", closeDelModal);

const deleteYes = document.querySelector("#delete-popup-process");
deleteYes.addEventListener("click", deleteProcess);

// order-modal 클릭 이벤트
function closeOrderModal() {
  orderModal.classList.remove("show");
  body.style.overflow = "auto";
}

function processModal() {
  window.location.href = "/src/views/payment/payment.html";
}

const orderCancel = document.querySelector("#order-popup-cancel");
orderCancel.addEventListener("click", closeOrderModal);

const orderProcess = document.querySelector("#order-popup-process");
orderProcess.addEventListener("click", processModal);

/* all-modal 클릭 이벤트 */
function closeAllModal() {
  allModal.classList.remove("show");
  body.style.overflow = "auto";
}

const allCancelBtn = document.querySelector("#all-popup-cancel");
allCancelBtn.addEventListener("click", closeAllModal);

const allProcessBtn = document.querySelector("#all-popup-process");
allProcessBtn.addEventListener("click", processModal);

// 수량조절 클릭이벤트
function addRowControls(row) {
  const plusBtn = row.querySelector(".fa-circle-plus");
  const minusBtn = row.querySelector(".fa-circle-minus");
  const itemQuantity = row.querySelector(".quantity");
  const totalPriceElement = row.querySelector(".total-list");
  const priceElement = row.querySelector(".price-list");

  function increaseQuantity() {
    itemQuantity.value = parseInt(itemQuantity.value) + 1;
    updateTotal();
  }

  function decreaseQuantity() {
    if (itemQuantity.value === "0") {
      return;
    }
    itemQuantity.value = parseInt(itemQuantity.value) - 1;
    updateTotal();
  }
  console.log(plusBtn);
  plusBtn.addEventListener("click", increaseQuantity);
  minusBtn.addEventListener("click", decreaseQuantity);
  itemQuantity.addEventListener("input", updateTotal);
  itemQuantity.addEventListener("blur", updateTotal);

  updateTotal();

  function removeComma(str) {
    return str.replace(/,/g, "");
  }

  function calculateTotal() {
    let price = parseFloat(removeComma(priceElement.textContent));
    let quantity = parseInt(itemQuantity.value);
    let total = price * quantity;
    return total;
  }

  function removeComma(str) {
    return str.replace(/,/g, "");
  }

  function calculateTotal(price, quantity) {
    return price * quantity;
  }

  function updateTotal() {
    const totalPriceElements = document.querySelectorAll(".total-list");
    const lowerEmptyPrice = document.querySelector(".lower-emptyprice");
    const lowerTotal = document.querySelector(".lower-emptytotal");
    const rows = document.querySelectorAll(".cart-container");
    let subtotal = 0;

    rows.forEach((row) => {
      const priceElement = row.querySelector(".price-list");
      const quantityElement = row.querySelector(".quantity");
      const rowTotalElement = row.querySelector(".total-list");
      const price = parseFloat(removeComma(priceElement.textContent));
      const quantity = parseInt(quantityElement.value);
      const total = calculateTotal(price, quantity);

      rowTotalElement.textContent = total.toLocaleString("ko-KR") + "원";

      if (row.classList.contains("selected")) {
        subtotal += total;
      }
    });

    let totalSum = subtotal;
    lowerEmptyPrice.textContent = subtotal.toLocaleString("ko-KR") + "원";
    lowerTotal.textContent = totalSum.toLocaleString("ko-KR") + "원";
  }
}

// 쉼표 제거 함수
function removeComma(str) {
  return str.replace(/,/g, "");
}

function updateSelectedTotal() {
  const selectedRows = document.querySelectorAll(".cart-container.selected");
  let subtotal = 0;

  selectedRows.forEach((row) => {
    const priceElement = row.querySelector(".price-list");
    const quantityElement = row.querySelector(".quantity");
    const price = parseFloat(removeComma(priceElement.textContent));
    const quantity = parseInt(quantityElement.value);
    const total = price * quantity;
    subtotal += total;
  });

  const lowerEmptyPrice = document.querySelector(".lower-emptyprice");
  const lowerTotal = document.querySelector(".lower-emptytotal");
  const deliveryPriceElement = document.querySelector(".lower-emptydelivery");
  let deliveryPrice = parseFloat(removeComma(deliveryPriceElement.textContent));

  if (subtotal === 0) {
    deliveryPrice = 0;
    deliveryPriceElement.textContent = "0원";
  } else {
    deliveryPrice = 5000;
    deliveryPriceElement.textContent = "5,000원";
  }

  const totalSum = subtotal + deliveryPrice;
  lowerEmptyPrice.textContent = subtotal.toLocaleString("ko-KR") + "원";

  if (deliveryPrice !== 0) {
    lowerTotal.textContent = (subtotal + 5000).toLocaleString("ko-KR") + "원";
  } else {
    lowerTotal.textContent = totalSum.toLocaleString("ko-KR") + "원";
  }
}

let isValid = true;
const itemQuan = document.querySelectorAll(".quantity");

itemQuan.forEach((input) => {
  input.addEventListener("input", function (event) {
    const value = event.target.value;
    if (/^\d+$/.test(value) === false) {
      if (isValid) {
        alert("숫자를 입력해주세요!");
        isValid = false;
      }
      input.value = 1;
    } else {
      isValid = true;
    }
  });

  input.addEventListener("blur", () => {
    isValid = true;
  });
});
