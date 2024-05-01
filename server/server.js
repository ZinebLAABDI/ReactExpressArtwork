const express = require('express');
const server = express();
const cors = require('cors');
const port = 4500;
const UsersRouter = require('./routes/route-user');
const oeuvreRouter = require('./routes/route-oeuvre');
const mongoose = require('mongoose');
const { urlencoded } = require('body-parser');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const multer = require('multer'); // Import multer

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // Set the destination directory for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Use a unique filename for each uploaded file
  }
});

const upload = multer({ storage: storage });

mongoose
  .connect('mongodb+srv://zineb2001laabdi:eWrpKGc6He536Wvw@cluster0.mee7kas.mongodb.net/')
  .then(() => {
    console.log('connected to database');
  })
  .catch((err) => {
    console.log('error connecting to database',err);

  });

server.use(cookieParser());
server.use(express.json());
server.use(urlencoded({ extended: true }));
server.use(cors());
server.use(express.static("uploads"))

// Route for uploading files
server.post('/upload', upload.single('file'), (req, res) => {
  res.json({ imageUrl: req.file.path }); // Return the path of the uploaded file
});

server.use('/auth', UsersRouter);
server.use('/oeuvre', oeuvreRouter);

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
