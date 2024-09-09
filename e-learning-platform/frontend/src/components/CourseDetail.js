import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail() {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        fetch(`/api/courses/${id}`)
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [id]);

    if (!course) return <div>Loading...</div>;

    return (
        <div>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <h2>Content:</h2>
            <ul>
                {course.content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default CourseDetail;
