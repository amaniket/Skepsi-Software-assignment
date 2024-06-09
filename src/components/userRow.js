import React, { useState } from 'react';
import $ from 'jquery';

const UserRow = ({ user, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [address, setAddress] = useState(user.address.street);

    const handleSave = () => {
        setIsEditing(false);
        onEdit({ ...user, name, email, address: { street: address } });
    };

    const handleEditClick = () => {
        setIsEditing(true);
        $(`#user-${user.id}`).addClass('highlight');
    };

    const handleCancel = () => {
        setIsEditing(false);
        setName(user.name);
        setEmail(user.email);
        setAddress(user.address.street);
        $(`#user-${user.id}`).removeClass('highlight');
    };

    return (
        <tr id={`user-${user.id}`}>
            {isEditing ? (
                <>
                    <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} /></td>
                    <td><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
                    <td><input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /></td>
                    <td>
                        <button onClick={handleSave}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </td>
                </>
            ) : (
                <>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address.street}</td>
                    <td>
                        <button onClick={handleEditClick}>Edit</button>
                        <button onClick={() => onDelete(user.id)}>Delete</button>
                    </td>
                </>
            )}
        </tr>
    );
};

export default UserRow;
