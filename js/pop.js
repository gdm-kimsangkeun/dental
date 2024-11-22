
// 메뉴 아이템 클릭 시 이미지 변경
const menuItems = document.querySelectorAll('.menu-item');
const popupImage = document.getElementById('popupImage');
const closePopupBtn = document.getElementById('closePopup');
const noShowTodayCheckbox = document.getElementById('noShowToday');

// 메뉴 클릭 이벤트
menuItems.forEach(item => {
item.addEventListener('click', () => {
  // 기존 active 클래스 제거
  menuItems.forEach(i => i.classList.remove('active'));

  // 클릭된 아이템 활성화 및 이미지 변경
  item.classList.add('active');
  const imageSrc = item.getAttribute('data-image');
  popupImage.src = imageSrc;
});
});

// 닫기 버튼 클릭 시 팝업 숨기기
closePopupBtn.addEventListener('click', () => {
document.getElementById('popup').style.display = 'none';

// 24시간 동안 다시 열리지 않음 설정
if (noShowTodayCheckbox.checked) {
  const now = new Date();
  const expireTime = now.getTime() + 24 * 60 * 60 * 1000;
  localStorage.setItem('noShowPopup', expireTime);
}
});

// 페이지 로드 시 팝업 표시 여부 확인
document.addEventListener('DOMContentLoaded', () => {
const noShowPopup = localStorage.getItem('noShowPopup');
const now = new Date().getTime();

if (noShowPopup && now < noShowPopup) {
  document.getElementById('popup').style.display = 'none';
}
});




//  스크롤 고정