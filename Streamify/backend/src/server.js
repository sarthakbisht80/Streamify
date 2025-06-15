import express from 'express';
import   "dotenv/config";
import cookieParser from 'cookie-parser';


import authRoutes from './routes/auth.route.js'; // Adjust the path as necessary
import userRoutes from './routes/user.route.js'; // Adjust the path as necessary
import { connectDB } from './lib/db.js';
import chatRoutes from "./routes/chat.route.js"
import cors from 'cors';

const app = express();
const PORT = process.env.PORT ;

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
})
);

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cookieParser()); // Middleware to parse cookies
app.use("/api/auth",authRoutes); 

app.use("/api/users",userRoutes); 
app.use("/api/chat",chatRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});