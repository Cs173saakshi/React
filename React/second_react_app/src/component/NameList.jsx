import React from 'react';

function NameList() {
  const names = ['Saakshi', 'Ravi', 'Ajay', 'Sachin'];

  return (
    <div>
        <h2>RENDERING NAME LIST:</h2>
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
    </div>
  );
}

export default NameList;
