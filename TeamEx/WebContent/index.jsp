<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <title>로컬 슬라이더 테스트</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="./js/wvScript.js"></script>
  <link rel="stylesheet" href="./css/wvtex/style.css" />
  <style>
    .mainScroll ul { list-style: none; padding: 0; display: flex; }
    .mainScroll li { background: #eee; text-align: center; line-height: 200px; font-size: 24px; }
  </style>
</head>
<body>

<div class="mainScroll" id="mainScroll">
  <ul>
    <li bgN="#ffcccc">1</li>
    <li bgN="#ccffcc">2</li>
    <li bgN="#ccccff">3</li>
    <li bgN="#ffffcc">4</li>
  </ul>
</div>

<script>
  $('#mainScroll').wvMain({
    control: 'duel',
    auto: true,
    listLiN: 1,
    setTime: 3000,
    speed: 800
  });
</script>

</body>
</html>
