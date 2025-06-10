console.log('sw-tips.js');

// Fetch tip & save in storage
const updateTip = async () => {
  const response = await fetch('https://chrome.dev/f/extension_tips');
  const tips = await response.json();
  const randomIndex = Math.floor(Math.random() * tips.length);
  return chrome.storage.local.set({ tip: tips[randomIndex] });
};

const ALARM_NAME = 'tip';

// check if alarm exist to avoid resetting the timer.
// The alarm might be removed when the browser session restart
async function createAlarm() {
  const alarm = await chrome.alarms.get(ALARM_NAME);
  if (typeof alarm === 'undefined') {
    // 크롬 매번 시작할 때 체크해서 없으면 다시 만들기
    chrome.alarms.create(ALARM_NAME, {
      delayInMinutes: 1, // 첫 실행은 1분 뒤
      periodInMinutes: 1440, // 하루마다 실행 (1440m = 24h)
    });
    updateTip(); // 팁 갱신
  }
}

createAlarm();

// Update tip once a day
// 알람이 울릴 때마다(onAlarm) updateTip() 함수를 실행해 팁을 새로 받아 저장
chrome.alarms.onAlarm.addListener(updateTip);

// Send tip to content script via messaging
// content script에서 온 메시지 응답 처리하는 리스너
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.greeting === 'tip') {
    chrome.storage.local.get('tip').then(sendResponse);
    return true; // sendMessage를 비동기로 쓰겠다는 의미로 반드시 필요함
  }
});
