import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => (props.blue ? 'blue' : 'gray')};
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

const App = () => {
  const [isBlue, setIsBlue] = useState(false);

  // 버튼을 클릭할 때 isPrimary 상태 토글
  const toggleStyle = () => {
    setIsBlue(prevState => !prevState);
  };

  return (
    <div>
      <Button blue ={isBlue} onClick={toggleStyle}>
        {isBlue ? 'Blue 버튼' : 'Gray 버튼'}
      </Button>
    </div>
  );
};

export default App;