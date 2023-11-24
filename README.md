# MongoDB CRUD Operations

This project demonstrates basic CRUD operations using MongoDB, Node.js, and Mongoose schema.

## Prerequisites

- Node.js installed on your machine
- MongoDB installed and running

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mominulhouqe/orderGetting
   ```

2. Navigate to the project directory:

   ```bash
   cd node-mongodb-crud
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up MongoDB connection:

   - Create a `.env` file in the root directory.
   - Add your MongoDB connection string:

     ```env
     MONGODB_URI=your_mongodb_connection_string
     ```

## Usage

### Run the application

```bash
npm install
```

```bash
npm run start:dev
```

### API Endpoints

- **GET /api/users:** Get all users.
- **GET /api/users/:id:** Get a specific user by ID.
- **POST /api/users:** Create a new user.
- **PUT /api/users/:id:** Update a user by ID.
- **DELETE /api/users/:id:** Delete a user by ID.
- **GET /api/users/:userId/orders:** get all orders by ID.
- **PUT /api/users/:userId/orders:** update your order.
- **DELETE /api/users/:userId/orders/total-price:** Delete a user by ID.

## Example Requests

### Create a User

```bash
 -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john@example.com"}' http://localhost:3000/api/users
```

### Get All Users

```bash
 http://localhost:3000/api/users
```

### Update a User

```bash
 -X PUT -H "Content-Type: application/json" -d '{"name": "Updated Name", "email": "updated@example.com"}' http://localhost:3000/api/users/:id
```

### Delete a User

```bash
 -X DELETE http://localhost:3000/api/users/:id
```


