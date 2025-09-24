import React from "react";

function StudentCard({ student, onEdit, onDelete }) {
    return (
        <div className="bg-white shadow rounded p-4 mb-3 flex justify-between items-center">
            <div>
                <p><span className="font-semibold">Roll No:</span> {student.rollNo}</p>
                <p><span className="font-semibold">Name:</span> {student.name}</p>
                <p><span className="font-semibold">Marks:</span> {student.marks}</p>
            </div>
            <div className="flex gap-2">
                <button
                    onClick={() => onEdit(student)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete(student.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default StudentCard;
