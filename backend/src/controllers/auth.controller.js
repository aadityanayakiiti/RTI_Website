const jwt = require('jsonwebtoken');
// password.util is not needed for login, but good to keep for future features
// const { comparePassword } = require('../utils/password.util'); 

const { ADMIN_USERNAME, ADMIN_PASSWORD, JWT_SECRET, NODE_ENV } = process.env;

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const isUsernameCorrect = username === ADMIN_USERNAME;
    const isPasswordCorrect = password === ADMIN_PASSWORD;

    if (!isUsernameCorrect || !isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ username: ADMIN_USERNAME, role: 'admin' }, JWT_SECRET, {
      expiresIn: '1h',
    });

    // --- NEW: Set token in a secure, HttpOnly cookie ---
    res.cookie('token', token, {
      httpOnly: true, // Cannot be accessed by client-side JS
      secure: NODE_ENV === 'production', // Only send over HTTPS in production
      sameSite: 'lax', // CSRF protection
      maxAge: 60 * 60 * 1000 // 1 hour expiration
    });

    // Send a success response without the token in the body
    res.status(200).json({ message: 'Login successful' });

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const logout = (req, res) => {
  // --- NEW: Clear the cookie on logout ---
  res.clearCookie('token');
  res.status(200).json({ message: 'Logout successful' });
};

const authStatus = (req, res) => {
    // If the verifyToken middleware passes, the user is authenticated.
    // req.user is attached by the middleware.
    res.status(200).json({ user: req.user });
};


module.exports = { login, logout, authStatus };