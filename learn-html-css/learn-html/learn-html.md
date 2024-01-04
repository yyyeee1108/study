# HTML 공부 정리

- [HTML 공부 정리](#html-공부-정리)
  - [HTML이란 무엇인가?](#html이란-무엇인가)
  - [Emmet](#emmet)
  - [태그 관련](#태그-관련)
    - [폰트 태그](#폰트-태그)
    - [목록 태그](#목록-태그)
    - [표(Table) 태그](#표table-태그)
  - [시맨틱(Sementaic) 태그](#시맨틱sementaic-태그)
  - [Block Level Element VS Inline Level Element](#block-level-element-vs-inline-level-element)
    - [div와 span 태그](#div와-span-태그)
    - [Block Element](#block-element)
    - [Inline Element](#inline-element)
  - [이미지 \& 멀티미디어 태그](#이미지--멀티미디어-태그)

## HTML이란 무엇인가?

머리아프게 태그 외울 필요 없다.

HTML : **H**yper **T**ext **M**arkup **L**anguage

**대표적인 기능**

- Hyper Link
- Markup 언어
  ->원하는 정보를 효과적으로 표현  
  HTML은 마크업 언어이다.(프로그래밍 언어라기보다는)

**HTML 문서 기본구조**

```html
<!DOCTYPE html> # 현재 html 문서 버전, html5
<html lang="ko">
  # html 태그는 웹 문서의 시작과 끝을 나타냄. lang="ko"로 웹 접근성 높임(한국)
  <head>
    # 웹 문서의 문서 정보를 담는다. 표시되지는 않는다
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    # 웹 브라우저에서 표시되는 부분
  </body>
</html>
```

**주석 처리 방법**  
`<!--  -->`

## Emmet

**코드**  
2_emmet.html

사실 자주 사용하는 것은 외워지게 될 것이고, 모르는 것은 구글링해보면 된다.  
잘 활용하면 생산성↑

**일단 정리**

1. `! + enter` : html 기본 구조 만들어줌

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Document</title>
     </head>
     <body></body>
   </html>
   ```

2. `>` : 자식노드 만들기
   ```html
   <!-- div>ul>li 의 결과 -->
   <div>
     <ul>
       <li></li>
     </ul>
   </div>
   ```
3. `+` : 형제노드 만들기

   ```html
   <!-- div>ul+ol+div 의 결과 -->
   <div>
     <ul></ul>
     <ol></ol>
     <div></div>
   </div>
   ```

4. `*` : 반복하기

   ```html
   <!-- div>ul>li*3의 결과 -->
   <div>
     <ul>
       <li></li>
       <li></li>
       <li></li>
     </ul>
   </div>
   ```

5. `#` : id  
    기본 태그는 div 태그

   ```html
   <!-- #item의 결과 -->
   <div id="item"></div>
   <!-- span#item의 결과 -->
   <span id="item"></span>
   ```

6. `.` : class  
   마찬가지로 기본 태그는 div 태그

   ```html
   <!-- .title의 결과 -->
   <div class="title"></div>
   <!-- span.title의 결과 -->
   <span class="title"></span>
   ```

7. `{}` : content
   ```html
   <!-- p.container{Hello World~!} ]의 결과-->
   <p class="container">Hello World~!</p>
   ```
8. `$` : 자동 넘버링
   ```html
   <!-- p.container{item$} 의 결과 -->
   <p class="container">item1</p>
   <!-- p.container{item$}*5 의 결과 -->
   <p class="container">item1</p>
   <p class="container">item2</p>
   <p class="container">item3</p>
   <p class="container">item4</p>
   <p class="container">item5</p>
   ```

## 태그 관련

### 폰트 태그

- `<hr>` : 가로선/수평선(**h**orizontal **r**ule)
- `<br>` : 개행/줄 바꿈(line-**br**eak)

**`<b> vs <storng>` 차이, `<i> vs <em>` 차이**

- `b, i` 태그는 **단순히 텍스트를 진하게** 그리고 **이텔릭체로 표시**하는 역할만 한다.
- `strong, em` 태그는 실제로 페이지 내의 **중요한 부분으로 강조**하고 싶을 때 사용  
  즉, strong과 em 태그를 용도에 맞게 사용하면 웹 접근성에 큰 기여를 한다.  
  스크린리더(Screen Reader)를 사용하는 경우 음성 합성 도구가 페이지를 해석하고 읽어낼 때 **strong태그에 대해 거센 억양으로 음을 낼 수 있도록 하여 강조**

### 목록 태그

현업에서는 ul 태그를 많이 사용한다.  
dl dt dd도 간간히 사용

`<ol>, <ul>, <li>`

`<dl>, <dt>, <dd>`  
dt는 1개일 필요X 여러 개여도 상관 없다.

**주의사항**

- dl 태그는 하나 이상의 dt-dd 쌍 태그를 갖고 있어야 한다.
- li, dt-dd 태그는 독립적 사용X

### 표(Table) 태그

웹 표준을 준수하면 좋다.

- `<caption></caption>` 태그는 테이블의 캡션을 정의할 때 사용
- tr th는 `<thead></thead>`로 감싼다
- 내용 tr td는 `<tbody></tbody>`로 감싼다
- 마지막 하단 tr td는 `<tfoot></tfoot>`로 감싼다
- `<colgroup><col> ... </colgroup>`을 사용하여 열의 무언가를 한 번에 바꿀 수 있다.

**속성 관련**

- table 태그 속성들은 대부분 웹표준이 아니므로 CSS로 대체해서 써야한다.
- th td에서

  - colspan 속성 : 열을 **병합**
  - rowspan 속성 : 행을 **병합**하는 속성

  참고로 tbody tfoot과 같이 그룹 나뉘었을 때에는 나뉜 그룹까지 병합 적용은 안된다.

- col
  - width 속성 또한 웹 표준이 아님 -> CSS 대체
  - span 속성 : 열을 그룹화

## 시맨틱(Sementaic) 태그

Semantic : 의미론적(사전 의미)

시맨틱 태그 => 의미를 가지는 태그

시맨틱 태그의 이점

1. **검색엔진 최적화**  
   검색시 상단에 올 수 있다.
2. **웹 접근성 향상**  
   화면 낭독기가 시맨틱 태그를 만났을 때 더 강조해서 읽어주는 등 접근성 향상 ↑
3. **가독성 향상**

웹 사이트를 만들다보면 자연스럽게 익혀진다.  
억지로 외울 필요 없다.

`main` 태그 안에는 다양한 시맨틱 태그가 사용될 수 있다.

`section` 태그 : 페이지의 영역을 나눔

`article` 태그 : 여러 개의 태그를 그룹핑하여 재사용 가능한 태그  
 예) 쇼핑몰 상품 목록

## Block Level Element VS Inline Level Element

Block 레벨 요소와 Inline 레벨 요소에 대해 알아보자

### div와 span 태그

웹 페이지의 영역을 구분할 때 사용하는 태그
큰 의미를 가지고 있지는 않지만 매우 자주 쓰인다.

- **div 태그**
  - 주로 분할, 어떤 태그를 담는
  - container로써의 역할을 한다.  
    시맨틱한 의미를 가지지는 않는 태그임
- **span 태그**
  - 마찬가지로 시맨틱한 의미를 가지지는 않는다.
  - span 태그는 다른 태그들을 담는 container라기보다는 특정 아이템 스타일링 할 때 사용

**두 태그의 차이**  
div는 `display: block`  
즉, block 요소이며  
span은 `display: inline`
즉, inline 요소이다.

모든 html 각 태그는 기본 표시값(default display)을 갖는다. 초기 display 값이 block인지 inline인지에 따라 block 레벨 요소, inline 레벨 요소로 나뉜다.

### Block Element

부모 요소의 **전체 공간**을 차지하여 '블록'을 만든다

- 한 칸을 모두 차지  
  -> 세로로 나열된다
- width, height, margin 속성 적용됨

### Inline Element

**콘텐츠 만큼만**(줄바꿈X), 요소를 구성하는 **태그에 할당된 공간만 차지**

- 콘텐츠 영역 만큼만 차지  
  -> 가로로 나열된다
- width, height 속성이 적용되지 않는다
- martin-top, margin-bottom 속성 적용X  
  -> 대신 line-height 사용

  => **간단히 요약하면 가로 세로 조절X**

두 요소(block, inline)은 `display:inline/block`으로 형태를 바꿀 수 있음

이런 태그의 속성들을 알면 **나중에 잘못 쓸 일이 없음 + 효율적으로 쓰기 가능**하므로 잘 알아두자

## 이미지 & 멀티미디어 태그

- **이미지\<img>**

  **기본 형태**

  ```html
  <img src="이미지경로" alt="사과" />
  ```

  **속성**

  - `src` : **필수 속성**, 이미지의 경로를 지정
  - `alt` : 이미지의 텍스트 설명, **웹 접근성 향상**(스크린 리더가 alt 값을 읽어 사용자에게 이미지를 설명, 이미지 표시할 수 없을 때 대신 보여짐)  
    습관처럼 쓰도록 하자
  - `height`, `width`

- **절대경로 VS 상대경로**

  - **절대경로**  
    고유한 경로(현재 문서 경로 상관X)

  - **상대경로**
    현재 문서 기준으로 경로 인식

- **오디오 \<audio>**
  - `<audio>` 태그는 html 문서에 소리 컨텐츠를 넣을 때 사용
    - controls 속성을 넣어줘야 조작 컨트롤바가 생긴다
  - `src` 속성 혹은 `<source>` element를 사용하여 한 개 이상의 오디오 소스를 지정할 수 있으며, 다수 지정 경우 가장 적절한 소스를 브라우저가 선택함
- **비디오 \<video>**
  - 마찬가지로 controls 속성을 넣어줘야 컨트롤 바가 생긴다
  - poster 속성 : 썸네일 역할
- **하이퍼링크 \<a>**
  - `<a>`태그는 `href` 속성을 사용하여 **다른 페이지**나 같은 페이지의 **특정 위치**, 파일, 이메일 주소와 그 외 다른 URL 로 연결할 수 있는 하이퍼링크를 만든다
  - `target="_blank"`: 새 탭에서 화면 열기
