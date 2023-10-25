import React, { useState } from 'react';
import { connect } from 'react-redux'; // 리덕스 스토어랑 연결
import { addMemo, deleteMemo } from '../actions'; // 액션 생성자 함수 가져오기

const MemoList = ({ memos, addMemo, deleteMemo }) => {
  const [newMemo, setNewMemo] = useState(''); // 입력받는 메모 state

  // 메모 추가하기 
  const handleAddMemo = () => { 
    addMemo({ // 액션 addMemo 디스패치
      id: Date.now(), // 메모 id 부여
      text: newMemo, // 입력한 메모 내용 
    });
    setNewMemo(''); // 입력칸 초기화
  };

  return (
    <div>
      <h2>메모</h2>
      <input
        type="text"
        value={newMemo}
        onChange={(e) => setNewMemo(e.target.value)}
        placeholder="새 메모 추가"
      />
      <button onClick={handleAddMemo}>추가</button>
      <div>
        {memos.map((memo) => (
          <div key={memo.id}>
            {memo.text}
            <button onClick={() => deleteMemo(memo.id)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// 리덕스 state를 컴포넌트 props로 매핑
const mapStateToProps = (state) => ({
  memos: state.memos, // 리덕스 state에서 memos 가져와서 memos props 매핑
});

// 액션 생성자를 컴포넌트 props로 매핑
const mapDispatchToProps = (dispatch) => ({
  addMemo: (memo) => dispatch(addMemo(memo)), // add 액션 디스패치해서 새 메모 추가
  deleteMemo: (id) => dispatch(deleteMemo(id)), // delete 액션 디스패치해서 메모 삭제
});

// connect()로 리덕스와 연결된 MemoList 컴포넌트 생성하고 내보냄
export default connect(mapStateToProps, mapDispatchToProps)(MemoList);