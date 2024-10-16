# Fitness Tracking System Backend

## Description

This is a backend API for a fitness tracking system that allows users to log workouts, set goals, and track their progress. The system provides an admin interface for managing users and viewing statistics.

## Features

- **User Authentication**: Secure authentication using JWT.
- **Role-Based Access**: Admins can manage users, while regular users can log workouts and set goals.
- **Workout Management**: Users can create, read, update, and delete workout logs.
- **Goal Tracking**: Users can set, update, and track their fitness goals.
- **Admin Functions**: Admins can view all users' data, including goals and workouts.

## Technologies Used

- **Node.js**: JavaScript runtime for building the API.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user, workout, and goal data.
- **Mongoose**: ODM for MongoDB and Node.js.
- **JWT**: For secure user authentication.
- **Bcrypt**: For hashing user passwords.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (set up locally or use a cloud service)
- Environment variables (see `.env.example`)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vrajpatel0007/fitness-tracking-system-backend.git
   cd fitness-tracking-system-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables in a `.env` file based on the `.env.example` file:

   ```env
   MONGODB_URL=mongodb://localhost:27017/your-database-name
   SECRET_KEY=your-secret-key
   PORT=5000
   ```

### Running the Application

1. Start the server:

   ```bash
   npm start
   ```

2. The server will run on `http://localhost:5000`.

## API Endpoints

### User Endpoints

- **POST /user/register**: Register a new user.
- **POST /user/login**: Login an existing user.
- **PUT /user/updateUser**: Update user information (Admin access required).
- **DELETE /user/deleteUser**: Delete a user (Admin access required).
- **GET /user/alluser**: Get all users (Admin access required).
- **GET /user/oneuser**: Get specific user data (Admin access required).

### Goal Endpoints

- **POST /goal/creategoal**: Create a new goal for the logged-in user.
- **GET /goal/getgoals**: Get all goals for the logged-in user.
- **PUT /goal/updategoal**: Update a specific goal (User access required).
- **DELETE /goal/deletegoal**: Delete a specific goal (User access required).
- **GET /goal/allgetgoal**: Get all goals (Admin access required).

### Workout Endpoints

- **POST /workout/createworkout**: Create a new workout log for the logged-in user.
- **GET /workout/getworkouts**: Get all workout logs for the logged-in user.
- **PUT /workout/updateworkout**: Update a specific workout log (User access required).
- **DELETE /workout/deleteworkout**: Delete a specific workout log (User access required).
- **GET /workout/allgetworkouts**: Get all workout logs (Admin access required).



