import React from 'react';
import './App.css';
import Tab from './Tab';

function App() {
  let data = [
    {
      title: 'Section 1',
      render: () => <div>Section 1Section 1Section 1Section 1Section 1Section 1Section 1Section 1Section 1Section 1Section 1Section 1Section 1Section 1Section 1Section 1</div>
    },
    {
      title: 'Section 2',
      render: () => <div>Section 2</div>
    },
    {
      title: 'Section 3',
      render: () => <div>Section 3</div>
    }
  ]
  return (
    <div>
      <Tab data={data} />
    </div>
  );
}

export default App;
