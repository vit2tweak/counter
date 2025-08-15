// counter/src/App.tsx

import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for modern, responsive UI
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`;

const CounterCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const CounterDisplay = styled.div`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  color: #2c3e50;
  margin: 1rem 0;
  font-family: 'Arial', sans-serif;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;

const Button = styled.button<{ variant?: 'increment' | 'decrement' | 'reset' }>`
  padding: 0.8rem 1.5rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  
  &:active {
    transform: scale(0.95);
  }
  
  background-color: ${props => {
    switch (props.variant) {
      case 'increment':
        return '#4CAF50';
      case 'decrement':
        return '#f44336';
      case 'reset':
        return '#2196F3';
      default:
        return '#757575';
    }
  }};
  color: white;
  
  &:hover {
    opacity: 0.9;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
  }
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const App: React.FC = () => {
  // State management using useState hook
  const [count, setCount] = useState<number>(0);
  
  // Counter operations with validation
  const increment = () => {
    if (count < Number.MAX_SAFE_INTEGER) {
      setCount(prevCount => prevCount + 1);
    }
  };
  
  const decrement = () => {
    if (count > Number.MIN_SAFE_INTEGER) {
      setCount(prevCount => prevCount - 1);
    }
  };
  
  const reset = () => {
    setCount(0);
  };

  return (
    <Container>
      <CounterCard>
        <Title>Counter App</Title>
        <CounterDisplay>{count}</CounterDisplay>
        <ButtonContainer>
          <Button 
            variant="decrement" 
            onClick={decrement}
            aria-label="Decrease count"
          >
            -
          </Button>
          <Button 
            variant="reset" 
            onClick={reset}
            aria-label="Reset count"
          >
            Reset
          </Button>
          <Button 
            variant="increment" 
            onClick={increment}
            aria-label="Increase count"
          >
            +
          </Button>
        </ButtonContainer>
      </CounterCard>
    </Container>
  );
};

export default App;

// Required additional files:
// counter/public/index.html
// counter/src/index.tsx
// counter/package.json
// counter/tsconfig.json

// Note: This component uses styled-components for styling.
// Make sure to install required dependencies:
// npm install styled-components @types/styled-components