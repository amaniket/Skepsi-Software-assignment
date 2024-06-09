import React, { useState, useEffect } from 'react';
import UserList from './components/userList';
import UserForm from './components/userForm';
import './App.css';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    const handleAddUser = (user) => {
        setUsers([...users, user]);
    };

    return (
        <div className="App">
            <h1>User Management</h1>
            <UserForm onAdd={handleAddUser} />
            <UserList users={users} setUsers={setUsers} />
        </div>
    );
}

export default App;
