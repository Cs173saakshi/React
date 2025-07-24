import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function NameList5() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Saakshi', age: 21 },
    { id: 2, name: 'Ravi', age: 29 },
    { id: 3, name: 'Ajay', age: 22 },
    { id: 4, name: 'Sachin', age: 30 },
  ]);

  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');

  const getNextId = () => {
    return users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
  };

  const handleAddUser = () => {
    if (newName.trim() === '' || newAge.trim() === '') return;

    const newUser = { id: getNextId(), name: newName, age: parseInt(newAge),
    };

    setUsers([...users, newUser]);
    setNewName('');
    setNewAge('');
  };

  const handleDeleteButton = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className='container mt-4'>
      <h2 className='head2'>NAME LIST WITH CONDITIONAL RENDERING:</h2>

      <input type="text" placeholder="Name" value={newName}
        onChange={e => setNewName(e.target.value)}/>
      <input type="number" placeholder="Age" value={newAge}
        onChange={e => setNewAge(e.target.value)}/>
      <button onClick={handleAddUser}>Add User</button>
      {users.length === 0 ? (
        <p className="mt-3">No users available.</p>
      ) : (
        <Table striped bordered hover responsive className="mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <Button variant="danger" size="sm"
                    onClick={() => handleDeleteButton(user.id)} >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default NameList5;
