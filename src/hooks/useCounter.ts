import { useState, useCallback } from 'react';
import { UseCounterReturn, UseCounterOptions } from '../types';

export const useCounter = (options: UseCounterOptions = {}): UseCounterReturn => {
  const {
    initialValue = 0,
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    step = 1
  } = options;

  const [count, setCountState] = useState<number>(initialValue);

  const setCount = useCallback((value: number) => {
    setCountState(prevCount => {
      const newValue = Math.max(min, Math.min(max, value));
      return newValue;
    });
  }, [min, max]);

  const increment = useCallback(() => {
    setCountState(prevCount => {
      const newValue = prevCount + step;
      return newValue <= max ? newValue : prevCount;
    });
  }, [step, max]);

  const decrement = useCallback(() => {
    setCountState(prevCount => {
      const newValue = prevCount - step;
      return newValue >= min ? newValue : prevCount;
    });
  }, [step, min]);

  const reset = useCallback(() => {
    setCountState(initialValue);
  }, [initialValue]);

  return {
    count,
    increment,
    decrement,
    reset,
    setCount
  };
};

export default useCounter;