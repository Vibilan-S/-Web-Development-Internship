import React, { useState } from 'react';

function Enrollment() {
    const [courseId, setCourseId] = useState('');

    const handleEnroll = () => {
        fetch('/api/enrollments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ courseId })
        })
        .then(res => res.json())
        .then(data => alert('Enrollment successful'));
    };

    return (
        <div>
            <h1>Enroll in a Course</h1>
            <input 
                type="text" 
                value={courseId} 
                onChange={e => setCourseId(e.target.value)} 
                placeholder="Enter course ID" 
            />
            <button onClick={handleEnroll}>Enroll</button>
        </div>
    );
}

export default Enrollment;
