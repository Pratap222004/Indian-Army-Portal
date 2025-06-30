import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import newsRoutes from './routes/news.js';
import careerRoutes from './routes/careers.js';
import userRoutes from './routes/users.js';

// Load environment variables first
dotenv.config();

// Verify environment variables are loaded
console.log('Environment Variables:', {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI ? '***loaded***' : 'missing',
  JWT_SECRET: process.env.JWT_SECRET ? '***loaded***' : 'missing'
});

const app = express();

// Enhanced CORS configuration
app.use(cors({
  // origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  origin: 'https://indian-army-portal-4.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date()
  });
});

// MongoDB Connection with enhanced options
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });

// API Routes
app.use('/api/auth', userRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/careers', careerRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Enhanced error handler
app.use((err, req, res, next) => {
  console.error('[ERROR]', new Date(), err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Server startup
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    mongoose.connection.close(false, () => {
      console.log('MongoDB connection closed');
      process.exit(0);
    });
  });
});