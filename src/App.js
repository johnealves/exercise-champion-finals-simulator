import React from 'react';
import './App.css';
import Champion from './Champion';
import FinalChampios from './FinalChampions';
import SemiFinal from './SemiFinal';

function App() {
  return (
    <div>
      <SemiFinal />
      <FinalChampios />
      <Champion />
    </div>
  );
}

export default App;
