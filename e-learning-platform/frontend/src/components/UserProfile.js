import React, { useEffect, useState } from 'react';

function UserProfile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('/api/users/profile', {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {user.profile.name}</p>
            <p>Email: {user.profile.email}</p>
        </div>
    );
}

export default UserProfile;
