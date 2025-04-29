const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Import routes
const menuRoutes = require('../routes/menuRoutes');
const userRoutes = require('../routes/userRoutes');
const cartRoutes = require('../routes/cartRoutes');
const orderRoutes = require('../routes/orderRoutes');

// Use routes
app.use('/.netlify/functions/api/menu', menuRoutes);
app.use('/.netlify/functions/api/user', userRoutes);
app.use('/.netlify/functions/api/cart', cartRoutes);
app.use('/.netlify/functions/api/order', orderRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports.handler = serverless(app); 