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
  const updatedItemCheckbox = document.querySelectorAll('#select-each');
  const emptyCart = document.querySelector(".empty-cart")
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
  window.location.href = ("src/views/payment/payment.html");
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

