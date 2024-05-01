const jwt = require('jsonwebtoken');

exports.isAuthenticated = (req, res, next) => {
    try {
        // Get the JWT token from the cookie
        const token = req.cookies.tokenUser;

        // Check if token exists
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: Token missing' });
        }

        // Verify the JWT token
        jwt.verify(token, 'secret', (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized: Invalid token' });
            }
            // Attach user data to the request object
            req.user = decoded; // Assuming the JWT payload contains email and other user data
            next(); // Call next middleware
        });
    } catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
