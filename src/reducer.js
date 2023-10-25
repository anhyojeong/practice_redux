// 초기 state 정의
const initialState = {
  memos: [],
};

// 리듀서 함수 정의
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": // 액션이 ADD 일 때
      return {
        ...state, // state 복사해서
        memos: [...state.memos, action.payload], // 메모 배열에 새 메모 추가
      };
    case "DELETE": // 액션이 DELETE 일 때
      return {
        ...state, // state 복사해서
        memos: state.memos.filter((memo) => memo.id !== action.payload), // 저장된 id랑 일치하지 않은 메모만 남기고 나머리 삭제
      };
    default: // 액션이 ADD, DELETE 아닐 때
      return state; // state 그대로 반환
  }
};
