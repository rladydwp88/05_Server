// 목록으로 버튼 클릭 시 "/" 이동(Get요청)

const goToList = document.querySelector("#goToList");

// 목록으로 버튼이 클릭된 경우

goToList.addEventListener("click", ()=>{
  // "/" 메인페이지 요청(GET 방식)
  location.href = "/";
});

// 할 일 상세 조회 페이지에서 쿼리스트링 값 얻어오기
// url에서 얻어오면 된다! (쿼리스트링 부분 : 주소?todoNo=6)

// location.search : 쿼리스트링만 얻어오기
// URLSearchParams() : 쿼리스트링을 객체 형태로 다룰 수 있는 객체
const todoNo = new URLSearchParams(location.search).get("todoNo")

console.log(todoNo);

// 완료 여부 변경
const completeBtn = document.querySelector("#completeBtn");
completeBtn.addEventListener("click", ()=>{

  // 현재보고있는 Todo의 완료 여부를
  // O(true) <-> X(false) 변경 요청하기 (GET 요청)
  location.href = "/todo/complete?todoNo=" + todoNo;

});

// 삭제 버튼
const deleteBtn = document.querySelector("#deleteBtn");

deleteBtn.addEventListener("click", () => {
  const confirmDelete = confirm("정말 삭제하시겠습니까?");
  if(confirmDelete) {
    location.href = "/todo/delete?todoNo=" + todoNo;
  }
});

// 수정 버튼

