import Student from "../models/student.js"; // Import the Student model

export function getStudent(req, res) {
    //read all students
    Student.find().then(
        (allStudent) => {
            console.log(allStudent);
            res.json(allStudent);
        }
    ).catch(
        () => {

        }
    )
}
export function createStudent(req, res) {
    // Logic to create a new student
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
export function deleteStudent(req, res) {}
export function updateStudent(req, res) {}