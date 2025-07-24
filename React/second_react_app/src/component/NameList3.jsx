import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
function NameList3() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Saakshi', age: 21 },
    { id: 2, name: 'Ravi', age: 29 },
    { id: 3, name: 'Ajay', age: 22 },
    { id: 4, name: 'Sachin', age: 30 },
  ]);
  const handleDeleteButton = (id) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
  };
  return (
    <div className='container mt-4'>
      <h2 className='head2'>NAME LIST WITH DELETE BUTTON:</h2>
<Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>
                <Button onClick={() => handleDeleteButton(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default NameList3;
