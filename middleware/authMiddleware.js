const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  let token;

  // Check if Authorization header starts with 'Bearer'
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Extract token
      token = req.headers.authorization.split(' ')[1];

      // DEBUG: Print token and JWT secret
      console.log("🛡️ Incoming Token:", token);
      console.log("🔐 JWT_SECRET from .env:", process.env.JWT_SECRET);

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // DEBUG: Print decoded JWT payload
      console.log("✅ Decoded Payload:", decoded);

      // Attach user to request (excluding password)
      req.user = await User.findById(decoded.id).select('-password');

      // Proceed to next middleware
      return next();
    } catch (err) {
      console.error("❌ JWT Error:", err.message);
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  // No token found in headers
  return res.status(401).json({ message: 'Not authorized, no token' });
};
