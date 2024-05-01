const userSchema = require('../models/schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Generate JWT token
function generateToken(email) {
    return jwt.sign({ email }, 'secret', { expiresIn: '1h' });
  }
  exports.getRegister = async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user using the userSchema model
      const newUser = await userSchema.create({ username, email, password: hashedPassword });
  
      // Respond with success message and created user data
      res.status(201).json({ message: 'User registered successfully', user: newUser });
  
    } catch (err) {
      // Handle any errors
      res.status(500).json({ error: err.message });
    }
  };
  

exports.getLogin= async(req, res) => {
    try{
        const {email, password} = req.body;
        const user = await userSchema.findOne({ email });
        if(!user){
            return res.status(400).json({message :"User not founds"})
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch) return res.status(400).json({message:"Incorrect Password"})
        const token = generateToken(email);
        res.cookie('token', token, { httpOnly: true });
        res.json({ message: 'Login successful',token: token });
      } catch (err) {
        res.status(401).json({ error: err.message });
      }     
}
