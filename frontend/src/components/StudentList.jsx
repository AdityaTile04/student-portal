import React from "react";
import StudentCard from "./StudentCard";

function StudentList({ students, onEdit, onDelete }) {
    return (
        <div>
            {students.length === 0 ? (
                <p className="text-gray-600">No students available.</p>
            ) : (
                students.map((student) => (
                    <StudentCard
                        key={student.id}
                        student={student}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))
            )}
        </div>
    );
}

export default StudentList;
