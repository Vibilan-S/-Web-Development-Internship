# E-learning Platform

## Project Overview

The E-learning Platform is designed to offer online courses, lectures, and educational resources to users. It features functionalities such as user profiles, course enrollment, progress tracking, and interactive content delivery to enhance the learning experience.

The project is built using a **Node.js** backend with **Express** for API handling, **React** for the frontend, and **MySQL** as the database.

## Features

- **User Authentication**: Register, log in, and manage user profiles.
- **Course Management**: Browse, view details, and enroll in courses.
- **Interactive Content**: Access and interact with course materials.
- **Progress Tracking**: Track enrolled courses and progress.

## Directory Structure

```plaintext
e-learning-platform/
│
├── backend/
│   ├── app.js                  # Main server file
│   ├── config/
│   │   └── db.js               # Database connection
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   ├── courseController.js  # Course management logic
│   │   └── userController.js    # User profile logic
│   └── models/
│       ├── courseModel.js       # Course model
│       ├── userModel.js         # User model
│       └── enrollmentModel.js   # Enrollment model
│   └── package.json             # Backend dependencies and scripts
│
├── frontend/
│   ├── public/
│   │   └── index.html           # Main HTML template
│   └── src/
│       ├── App.js               # Main React app component
│       ├── components/
│       │   ├── Home.js          # Home page
│       │   ├── CourseList.js    # Course listing page
│       │   ├── CourseDetail.js  # Course detail page
│       │   ├── UserProfile.js   # User profile page
│       │   └── Enrollment.js    # Course enrollment page
│       └── index.js             # React entry point
│   └── package.json             # Frontend dependencies and scripts
│
└── README.md                    # Project documentation
