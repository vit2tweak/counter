import React from 'react';
import { useCounter } from '../hooks/useCounter';
import './Counter.css';

const Counter: React.FC = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="counter-container">
      <div className="counter-card">
        <div className="counter-display">
          <span className="counter-label">Current Count</span>
          <div className="counter-value" aria-live="polite">
            {count}
          </div>
        </div>
        
        <div className="counter-controls">
          <button
            className="counter-btn counter-btn-decrement"
            onClick={decrement}
            aria-label="Decrease counter by 1"
            type="button"
          >
            <span className="btn-icon">−</span>
            <span className="btn-text">Decrease</span>
          </button>
          
          <button
            className="counter-btn counter-btn-reset"
            onClick={reset}
            aria-label="Reset counter to 0"
            type="button"
          >
            <span className="btn-icon">↻</span>
            <span className="btn-text">Reset</span>
          </button>
          
          <button
            className="counter-btn counter-btn-increment"
            onClick={increment}
            aria-label="Increase counter by 1"
            type="button"
          >
            <span className="btn-icon">+</span>
            <span className="btn-text">Increase</span>
          </button>
        </div>
        
        <div className="counter-info">
          <p className="counter-status">
            {count === 0 && "Counter is at zero"}
            {count > 0 && `Counter is positive (+${count})`}
            {count < 0 && `Counter is negative (${count})`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;