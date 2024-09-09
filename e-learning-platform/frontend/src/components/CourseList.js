import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CourseList() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/api/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <div>
            <h1>Course List</h1>
            <ul>
                {courses.map(course => (
                    <li key={course._id}>
                        <Link to={`/courses/${course._id}`}>{course.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseList;
