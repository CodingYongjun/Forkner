# 🍴Forkner🍝 Page📄
<br>
<div align="center">
  <img src="https://user-images.githubusercontent.com/108567709/223972048-87a44677-f967-4284-b4cb-b3dd26e63adb.jpg">
</div>

## 프로젝트 소개
<p>
  평소 좋아하는 양식 레스토랑의 홈페이지가 따로 존재하지 않아 만약 있다면 어떤 느낌일까? 생각하며 퍼블리싱하여 만든 홈페이지 입니다.
  <br>
  레스토랑의 분위기와 대표 메뉴를 한 번에 알 수 있으며 그 외 가게의 정보 또한 한 번에 볼 수 있게 접근성을 고려해 기획 하였으며 
  <br>
  반응형 웹 사이트로 제작 했으며 이 README는 desktop의 대한 설명만 다루고 있습니다.
  <br><br>
  github이 아닌 호스팅 사이트를 통해 관리하고 있습니다. 
</p>

## 기술스택
<div align="center">
  <h3>📝SKill📖</h3>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white" width="15%" height="50" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white" width="15%" height="50" />
  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white" width="15%" height="50" />
  <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white" width="15%" height="50" />
</div>
<br>
<div align="center">
  <h3 align="center">🎮Tools🎮</h3>
  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=flat-square&logo=Visual%20Studio%20Code&logoColor=white" />
</div>

## 구현기능

<ol>
  <li>
    <h3>Main Page (fullpage , fadein/out , slideup/down , addClass/removeClass ,scrollTop) </h3>
    <br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/108567709/223972010-b8cac4ca-bafd-4646-a2e7-d8eb0f1c155c.jpg" width="70%">
      <img src="https://user-images.githubusercontent.com/108567709/223972020-2ec7b953-6017-4896-92cc-54971046e330.jpg" width="20%">
    </div>
    <br>
    <ul>
      <li>  메인 홈페이지는 첫 section 값만 width 값을 100% height 값을 jquery로 window.height 이벤트를 사용하여 높이를 주어 직접 fullpage를 구현 하였습니다.</li>
      <li>  이미지 eq(0)번째를 fadeOut() 시켜준뒤에 다시 eq(0)번째의 appendTo()이벤트를 사용해 부모요소를 넣어준뒤 이미지 eq(1) 에다가 fadeIn() 을 시켜주어 다음 이미지가 보이게 해준다음 setInterval()이벤트를 사용해 이것을 반볶해 주었습니다.</li>
      <li>  오른쪽 사진처럼 클릭시 $(this) 의 next()이벤트를 통해 다음 요소에다 slideDown() / slideUp() 이벤트를 사용해 sub 메뉴가 나오고 들어가는 효과를 주었습니다. 이때 addClass/removeClass 를 사용해 class 를 주었다 빼주었다 하여 시각적 효과를 주었습니다.</li>
    </ul>
    <br><br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/108567709/223972022-9eeb09af-cca9-427f-b1f1-7ab5acf2b53a.jpg">
    </div>
    <ul>
      <li>  Nav와 맨 아래 2개의 박스에 scrollTop()이벤트로 if문을 걸어주어 조건의 맞을때 등장하게 해주었습니다.</li>
      <li>  중간 박스는 Swiper 이미지 라이브러리 를 사용하였습니다.</li>
    </ul>
  </li>
  <li>
    <h3>Sub Page(Map api , js slide)</h3>
    <br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/108567709/223972038-4a92983c-2bdc-44a1-bd85-af6d019dd777.jpg">
    </div>
    <br>
    <ul>
      <li>  kakaomap api를 이용하여 현재 가게의 위치를 표시되게 해 주었습니다.</li>
      <li>  mian 페이지와 다르게 Swiper가 아닌 javascript를 이용해 자동 슬라이드 효과를 구현하였습니다..</li>
    </ul>
  </li>
  <li>
    <h3>Sub Page(scrollTop)</h3>
    <br>
    <div align="center">
      <img src="https://user-images.githubusercontent.com/108567709/223972025-84285567-8d41-4ce3-a70d-c02875f259a3.jpg" width="40%">
      <img src="https://user-images.githubusercontent.com/108567709/223972043-3b6d2e11-6ad0-4fdb-8999-038d143a28e5.jpg" width="40%">
    </div>
    <br>
    <ul>
      <li>  main page와 같이 scrollTop()에 if문을 걸어 시각적 효과를 주었습니다.</li>
    </ul>
  </li>
 </ol>
