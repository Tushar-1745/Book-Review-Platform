// === server.js ===
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./models');

const bookRoutes = require('./routes/bookRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');
const autherRouter = require('./routes/authorRoutes');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/users', userRoutes);
app.use('/api/authors', autherRouter);


const PORT = process.env.PORT || 5000;

const { sequelize } = require('./models');

sequelize.sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to sync db:', error);
  });
