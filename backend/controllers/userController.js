const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register User
exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    console.log("request body is", req.body);

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(400).json({ error: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ firstName, lastName, email, password: hashedPassword });
    console.log('Sending user data:', {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    });
    

    res.status(201).json({ message: 'User registered successfully', userId: user.id });
  } catch (err) {
    console.error('Registration error:', err);  // <-- Add this
    res.status(500).json({ error: 'Failed to register user' });
  }
};


// Login User
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ error: 'Invalid email or password' });

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ error: 'Invalid email or password' });

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || 'your_secret_key',
      { expiresIn: '1h' }
    );

    res.json({ 
      message: 'Login successful', 
      token, 
      user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, role:user.role } // or whatever fields you want
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to login' });
  }
};
