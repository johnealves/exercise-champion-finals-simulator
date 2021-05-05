import React from 'react';
import './App.css';
import Champion from './Champion';
import FinalChampios from './FinalChampions';
import SemiFinalChampions from './SemiFinalChampions';

function App() {
  return (
    <div>
      <SemiFinalChampions />
      <FinalChampios />
      <Champion />
    </div>
  );
}

export default App;
