(async () => {
  // Sends a message to the service worker and receives a tip in response
  // 서비스워커에게 오늘의 팁 달라고 요청 후 tip에 응답 받아옴
  const { tip } = await chrome.runtime.sendMessage({ greeting: 'tip' });

  const nav = document.querySelector('.upper-tabs > nav');

  // 팁 팝오버 띄우는 버튼
  const tipWidget = createDomElement(`
    <button type="button" popovertarget="tip-popover" popovertargetaction="show" style="padding: 0 12px; height: 36px;">
        <span style="display:block; font: var(--devsite-link-font,500 14px/20px var(--devsite-primary-font-family));">Tip</span>
    </button>
    `);

  // Popover API (HTML5에 추가됨. 팝업 띄우는 기능)
  const popover = createDomElement(
    `<div id='tip-popover' popover style="margin: auto;">${tip}</div>`
  );

  document.body.append(popover);
  nav.append(tipWidget);
})();

// HTML 문자열을 실제 DOM 요소로 바꾸는 함수수
function createDomElement(html) {
  const dom = new DOMParser().parseFromString(html, 'text/html');
  return dom.body.firstElementChild;
}
