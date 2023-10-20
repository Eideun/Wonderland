import setNav from "/nav/nav.js";

const inquiryList = document.querySelector("#inquiry-list");

setNav(false);
addAllEvents();
requestInquiryData();

// addEventListener들을 묶어주는 코드
function addAllEvents() {}

// TODO: 더미데이터 지우고 서버요청 보내야함
async function requestInquiryData() {
  // 임시로 더미 json 파일 가져다가 화면에 표시
  try {
    const response = await fetch("dummy-inquiry.json");
    const jsonData = await response.json();
    console.log(jsonData);

    for (const inquiry of jsonData.dummyData) {
      createItem(inquiry);
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

function createItem(inquiry) {
  // 문의 제목
  let inquiryTitle = document.createElement("em");
  inquiryTitle.textContent = inquiry.inquiryTitle;

  // 문의 날짜
  let inquiryDate = document.createElement("span");
  inquiryDate.textContent = inquiry.inquiryDate;

  // 문의 클릭시 이동을 위한 링크
  let inquiryLink = document.createElement("a");
  inquiryLink.className = "inquiry-link";
  inquiryLink.href = `/Mall/Help/CS/View?AplNo=${inquiry.inquiryId}`;
  inquiryLink.appendChild(inquiryTitle);
  inquiryLink.appendChild(inquiryDate);

  let newLi = document.createElement("li");
  newLi.style.marginBottom = "10px";
  newLi.appendChild(inquiryLink);
  inquiryList.appendChild(newLi);
}
