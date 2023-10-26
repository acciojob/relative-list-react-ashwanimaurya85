import React from 'react'


const App = () => {
  // List of relatives
  const relatives = [
    'Relative 1',
    'Relative 2',
    'Relative 3',
    'Relative 4',
    'Relative 5',
  ];

  return (
    <div>
      <h2>Diwali Shopping List</h2>
      <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;

