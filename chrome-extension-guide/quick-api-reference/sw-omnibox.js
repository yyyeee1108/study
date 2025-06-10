console.log('sw-omnibox.js');

// save default API suggestions
// runtime.onInstalled() 이벤트 발생시 extension이 처음 설치될 때의 상태(state) 초기화 가능
chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === 'install') {
    chrome.storage.local.set({
      apiSuggestions: ['tabs', 'storage', 'scripting'],
    });
  }
});

const URL_CHROME_EXTENSIONS_DOC =
  'https://developer.chrome.com/docs/extensions/reference/';
const NUMBER_OF_PREVIOUS_SEARCHES = 4;

// Display the suggestions after user starts typing
chrome.omnibox.onInputChanged.addListener(async (input, suggest) => {
  // 기본 설명 문구
  await chrome.omnibox.setDefaultSuggestion({
    description: 'Enter a Chrome API or choose from past searches',
  });
  // 저장소에서 이전 검색어 불러오기
  const { apiSuggestions } = await chrome.storage.local.get('apiSuggestions');

  // 검색어 하나하나 꺼내어 목록 전환
  const suggestions = apiSuggestions.map((api) => {
    return { content: api, description: 'Open chrome.${api} API' };
  });
  // 추천 목록을 주소창에 표시한다
  suggest(suggestions);
});

// Open the reference page of the chosen API
chrome.omnibox.onInputEntered.addListener((input) => {
  // 새로운 탭 열고 선택한 chrome API 문서 페이지로 이동
  chrome.tabs.create({ url: URL_CHROME_EXTENSIONS_DOC + input });
  // Save the latest keyword
  updateHistory(input);
});

async function updateHistory(input) {
  const { apiSuggestions } = await chrome.storage.local.get('apiSuggestions');
  apiSuggestions.unshift(input); // 새 검색어 앞에 추가
  apiSuggestions.splice(NUMBER_OF_PREVIOUS_SEARCHES); // 최대 4개까지 저장
  return chrome.storage.local.set({ apiSuggestions });
}
