import React from 'react';

function NameList2() {

  const users = [
    { id: 1, name: 'Saakshi', age: 21 },
    { id: 2, name: 'Ravi', age: 29 },
    { id: 3, name: 'Ajay', age: 22 },
    { id: 4, name: 'Sachin', age: 30 },
  ];

  return (
    <div>
      <h2>DISPLAYING NAME LIST:</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NameList2;
