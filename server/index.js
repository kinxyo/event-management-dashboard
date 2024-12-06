import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();
import authRoutes from './routes/authRoutes.js';
import connectDB from './config/db.js';

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());
// app.use(cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true,  // Allow cookies to be sent
// }));

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.use('/api/auth', authRoutes);

app.listen(8000, () => {
    connectDB();
    console.log('Server is running on port 8000');
});