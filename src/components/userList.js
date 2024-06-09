import React from 'react';
import UserRow from './userRow';

const UserList = ({ users, setUsers }) => {
    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleEdit = (updatedUser) => {
        setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <UserRow key={user.id} user={user} onDelete={handleDelete} onEdit={handleEdit} />
                ))}
            </tbody>
        </table>
    );
};

export default UserList;
