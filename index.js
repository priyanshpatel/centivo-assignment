const express = require('express');
const mongoose = require('mongoose');
const { isValidObjectId } = mongoose;
const app = express();

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/userdb';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);

// GET /users/:id
app.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ error: 'Invalid user ID format' });
  }

  try {
    const user = await User.findOne({ _id: id, age: { $gt: 21 } });
    if (!user) {
      return res.status(404).json({ error: 'User not found or under age limit' });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
