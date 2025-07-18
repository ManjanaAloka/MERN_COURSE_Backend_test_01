import express from 'express';
import mongoose from 'mongoose';
import Student from './models/student.js'; // Import the Student model
import studentRouter from './routes/studentRouter.js';

const app = express();
app.use(express.json());

const connectionString = "mongodb+srv://manjana:12345@cluster0.mb4afft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Example connection string
mongoose.connect(connectionString).then(
    () => {
        console.log("Connected to MongoDB");
    }
).catch(
    () => {
        console.log("Error connecting to MongoDB");
    }
)

app.use("/student", studentRouter);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});