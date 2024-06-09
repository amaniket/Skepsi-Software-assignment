import React, { useState } from 'react';

const UserForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: Date.now(),
            name,
            email,
            address: { street: address }
        };
        onAdd(newUser);
        setName('');
        setEmail('');
        setAddress('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
            <button type="submit">Add User</button>
        </form>
    );
};

export default UserForm;
