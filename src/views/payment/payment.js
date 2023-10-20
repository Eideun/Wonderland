const searchBtn = document.querySelector(".post-search")

function searchPost() {
    new daum.Postcode({
      oncomplete: function(data) {
        let address = '';
        let postNum = data.zonecode;
        
        if (data.userSelectedType === 'R') {
          address = data.roadAddress;
        } else {
          address = data.jibunAddress;
        }
        
        document.querySelector('.first-address').value = address;
        document.querySelector('.post-input').value = postNum;
      }
    }).open();
  }
  
  searchBtn.addEventListener("click", searchPost);

  const allModal = document.querySelector(".all-modal")
  function purchaseAll() {

      allModal.classList.add("show");
      body.style.overflow = "hidden";
  }
  const order = document.querySelector(".order-button")
  order.addEventListener("click", purchaseAll);

// order-modal 클릭 이벤트 
function closeOrderModal() {
  allModal.classList.remove("show");
  body.style.overflow = "auto";
}

function processModal() {
  window.location.href = ("/src/views/payment-complete/payment-complete.html");
}

const orderCancel = document.querySelector("#all-popup-cancel");
orderCancel.addEventListener("click", closeOrderModal);

const orderProcess = document.querySelector("#all-popup-process");
orderProcess.addEventListener("click", processModal);

