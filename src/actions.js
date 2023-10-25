// 액션 유형 정의
export const ADD = "ADD";
export const DELETE = "DELETE";

// 액션 생성자 함수 정의
export const addMemo = (memo) => ({
  type: ADD,
  payload: memo,
});

export const deleteMemo = (id) => ({
  type: DELETE,
  payload: id,
});

// addMemo()는 단일 객체 payload를 전달
// payload는 memo라는 인수로 전달
// memo에는 id, text가 결합된 상태
