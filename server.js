const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/generate', upload.single('photo'), (req, res) => {
  const { name, sex, dob, email } = req.body;
  const photoPath = req.file.path;
  res.render('idcard', { name, sex, dob, email, photoPath });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

