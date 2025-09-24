import React, { useEffect, useState } from "react";
import {
    getAllStudents,
    addStudent,
    updateStudent,
    deleteStudent,
} from "../services/studentService";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

function Students() {
    const [students, setStudents] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);

    // Load all students
    const loadStudents = () => {
        getAllStudents()
            .then((res) => setStudents(res.data))
            .catch((err) => console.error("Error fetching students:", err));
    };

    useEffect(() => {
        loadStudents();
    }, []);

    // Add or update student
    const handleAddOrUpdate = (student) => {
        if (editingStudent) {
            updateStudent(editingStudent.id, student)
                .then(() => {
                    loadStudents();
                    setEditingStudent(null);
                })
                .catch((err) => console.error("Error updating student:", err));
        } else {
            addStudent(student)
                .then(() => loadStudents())
                .catch((err) => console.error("Error adding student:", err));
        }
    };

    // Edit student
    const handleEdit = (student) => {
        setEditingStudent(student);
    };

    // Delete student
    const handleDelete = (id) => {
        deleteStudent(id)
            .then(() => loadStudents())
            .catch((err) => console.error("Error deleting student:", err));
    };

    return (
        <div className="max-w-3xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Student Management</h2>

            <StudentForm onSubmit={handleAddOrUpdate} editingStudent={editingStudent} />

            <StudentList
                students={students}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default Students;
