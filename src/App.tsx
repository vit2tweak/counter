import React from 'react';
import Counter from './components/Counter';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter Application</h1>
        <p>A simple and elegant counter built with React & TypeScript</p>
      </header>
      <main className="App-main">
        <Counter />
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Counter App. Built with React.</p>
      </footer>
    </div>
  );
};

export default App;