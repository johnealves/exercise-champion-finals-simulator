import React from 'react';
import './App.css';
import Champion from './Champion';
import FinalChampios from './FinalChampions';
import SemiFinalChampios from './SemiFinalChampios';

function App() {
  return (
    <div>
      <SemiFinalChampios />
      <FinalChampios />
      <Champion />
    </div>
  );
}

export default App;
