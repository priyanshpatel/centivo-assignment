# centivo-assignment: Node.js + MongoDB API: User Lookup Endpoint

## 📌 Objective
Build a minimal, elegant REST API using Node.js and MongoDB that:
- Fetches a user's details by ID.
- Handles malformed input gracefully.
- Returns results only for users older than 21.

## 🛠 Tech Stack
- Node.js + Express
- MongoDB with Mongoose ODM

## 📂 Endpoint
```
GET /users/:id
```

### ✅ Features
- Accepts a MongoDB `ObjectId` as a URL parameter.
- Validates the `ObjectId` before querying.
- Filters results to only return users where `age > 21`.
- Returns JSON response with user details.
- Handles:
  - `404` if no such user exists or is underage.
  - `400` if the ID format is invalid.
  - `500` for unexpected errors.

## 🧪 Sample Document
```json
{
  "_id": "<ObjectId>",
  "name": "John Doe",
  "email": "johndoe@email.com",
  "age": 30
}
```

## 🚀 How to Run
```bash
# 1. Clone the repo
$ git clone <your-github-url>
$ cd <repo>

# 2. Install dependencies
$ npm install

# 3. Start MongoDB (locally or via Atlas)

# 4. Start the server
$ node index.js
```

## 🌟 Thoughtful Touches
- Added `ObjectId` validation using `mongoose.isValidObjectId`.
- Gracefully structured error handling ensures clarity for clients.
- Simple, readable architecture for fast onboarding and scalability.

## 💬 Questions?
Feel free to raise an issue or reach out — happy to help!

