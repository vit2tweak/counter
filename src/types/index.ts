export interface CounterState {
  count: number;
}

export interface CounterActions {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: (value: number) => void;
}

export interface UseCounterReturn extends CounterState, CounterActions {}

export interface UseCounterOptions {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
}

export type CounterButtonType = 'increment' | 'decrement' | 'reset';

export interface CounterButtonProps {
  type: CounterButtonType;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}