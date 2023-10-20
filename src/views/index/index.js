let productId;
getQueryParam();

function getQueryParam() {
    // 현재 페이지의 URL에서 쿼리 파라미터를 추출
    const queryString = window.location.search;

    // URLSearchParams 객체를 사용하여 쿼리 파라미터 파싱
    const params = new URLSearchParams(queryString);

    // 특정 키에 대한 값 가져오기
    productId = params.get('productId');

    requestData();
}

async function requestData() {
  // 임시로 더미 json 파일 가져다가 화면에 표시
  try {
    const response = await fetch("main-data.json");
    const jsonData = await response.json();
    console.log(jsonData);

    for (const data of jsonData.dummyData) {
      if(data.productId == productId){
        setBookInfo(data);
        break;
      }
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

function setBookInfo(data) {
   let imgUrl = data.img;

   // getElementId()나 querySelector()로 제목 부분 요소 가져와서 title 넣음
   let title_element = document.querySelector(".intro > p");
   title_element.textContent = data.title;
   // getElementId()나 querySelector()로 가격 부분 요소 가져와서 price 넣음
   let price_element = document.querySelector(".intro .price > strong");
   price_element.textContent = data.price;
   // getElementId()나 querySelector()로 책표지 부분 가져와서 이미지 넣음
   // [예제코드]
   // let img_element = document.getElementById("book-image");
   // img_element.src = imgUrl;
   let img_element = document.querySelector(".thumnail_img");
   img_element.src = data.img;

   // getElementId()나 querySelector()로 아래 상세설명 부분 가져와서 이미지 넣음
   // [예제코드]
   // let detailImg_element = document.querySelector(".img-container > img");
   // detailImg_element.src = detailImgUrl;
   let detailImg_element = document.querySelector(".img > img");
   detailImg_element.src = data.detailImg;
}