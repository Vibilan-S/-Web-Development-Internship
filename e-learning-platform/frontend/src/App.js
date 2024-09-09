import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import UserProfile from './components/UserProfile';
import Enrollment from './components/Enrollment';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<CourseList />} />
                <Route path="/courses/:id" element={<CourseDetail />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/enroll" element={<Enrollment />} />
            </Routes>
        </Router>
    );
}

export default App;
