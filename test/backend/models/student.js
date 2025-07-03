import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
}); // student collection eke sturucture eka define karanawa


const Student = mongoose.model('Student', studentSchema); // coleection name eka saha schema eke name eka

export default Student;