import express from "express";
import { createStudent, getStudent, updateStudent, deleteStudent } from "../controllers/studentController.js"; // Import the controller function

const studentRouter = express.Router();

studentRouter.get("/", (getStudent));

studentRouter.post("/", (createStudent));

studentRouter.delete("/", (deleteStudent));

studentRouter.put("/", (updateStudent));

export default studentRouter;