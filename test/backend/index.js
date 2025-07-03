import express from 'express';
import mongoose from 'mongoose';
import Student from './models/student.js'; // Import the Student model

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

app.get("/",
    (req, res) => {
        console.log("get request");
        res.json({
            message: "Hello, World!"
        });
        console.log(req.body.name);
    }
);

app.post("/",
    (req, res) => {
        const student = new Student({
            name: req.body.name,
            age: req.body.age,
            city: req.body.city
        });
        student.save().then(
            () => {
                console.log("Student saved successfully");
                res.json({
                    message: "Create student Successfully"
                });
            }
        ).catch(
            () => {
                console.log("failed to save student");
            }
        )
        console.log("error");
    }
);

app.delete("/",
    (req, res) => {
        console.log("delete request");
        res.json({
            message: "Resource deleted"
        });
    });

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});